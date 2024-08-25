"use server";

import { headers } from "next/headers";
import { z } from "zod";

const dataSchemaZod = z.object({
  name: z.string().min(3, { message: "Jméno musí mít alespoň 3 znaky" }),
  email: z.string().email({ message: "Musí být pravý email" }),
  message: z
    .string()
    .min(15, { message: "Zpráva musí mít alespoň 15 znaků" })
    .max(400, { message: "Zpráva nesmí překročit 400 znaků" }),
  privacyPolicy: z.boolean(),
});

export async function sendMail({
  data,
  hcaptchaRes,
}: {
  data: z.infer<typeof dataSchemaZod>;
  hcaptchaRes: string;
}) {
  try {
    if (!(hcaptchaRes && hcaptchaRes.length > 0)) {
      return {
        error: "Zkontrolujte, prosím, zda jste vyplnili captcha.",
        code: 400,
      };
    }
    const validatedData = await dataSchemaZod.safeParseAsync(data);

    if (!validatedData.success) {
      return { error: "data-validation-fail", code: 400 };
    }

    if (!validatedData.data.privacyPolicy) {
      return { error: "privacy-policy-fail", code: 400 };
    }

    const fallBack = "0.0.0.0";
    let ip = headers().get("x-forwarded-for");
    if (!ip) {
      ip = headers().get("x-real-ip") ?? fallBack;
    } else ip.split(",")[0];

    const formData = new FormData();

    formData.append("secret", process.env.HCAPTCHA_SECRET ?? "");
    formData.append("response", hcaptchaRes);
    formData.append("remoteip", ip);

    const hcaptchaResponse = await fetch(
      `https://api.hcaptcha.com/siteverify?secret=${process.env.HCAPTCHA_SECRET}&response=${hcaptchaRes}&remoteip=${ip}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    const hcaptchaData = await hcaptchaResponse.json();

    if (!hcaptchaData.success) {
      return { error: "hcaptcha-fail", code: 400 };
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3_FORMS_KEY,
        name: validatedData.data.name,
        email: validatedData.data.email,
        message: validatedData.data.message,
      }),
    });

    const dataRes = await response.json();

    if (dataRes.error) {
      return { error: dataRes.error, code: 500 };
    }

    return {
      data: dataRes,
      code: 200,
    };
  } catch (error) {
    return { code: 500 };
  }
}
