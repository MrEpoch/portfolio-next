"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomField from "./CustomField";
import { Textarea } from "@/components/ui/textarea";
import { Suspense, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useToast } from "../ui/use-toast";
import Loader from "./Loader";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Jméno musí mít alespoň 3 znaky" })
    .max(50, { message: "Jméno nesmí překročit 50 znaků" }),
  email: z.string().email({ message: "Musí být pravý email" }),
  message: z
    .string()
    .min(15, { message: "Zpráva musí mít alespoň 15 znaků" })
    .max(400, { message: "Zpráva nesmí překročit 400 znaků" }),
  "h-captcha-response": z.string(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      "h-captcha-response": "",
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const [isLoadedHCaptcha, setIsLoadedHCaptcha] = useState(false);

  const { toast } = useToast();

  const onHCaptchaChange = (token: string) => {
    form.setValue("h-captcha-response", token);
    form.handleSubmit(onSubmit)();
  };

  const hcaptcha = useRef<HCaptcha>(null);

  function hcaptchaVerify(e: Event) {
    e.preventDefault();
    if (hcaptcha.current == null) {
      return;
    }

    hcaptcha.current.execute();
  }

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (
      !(data["h-captcha-response"] && data["h-captcha-response"].length > 0)
    ) {
      toast({
        description: "Zkontrolujte, prosím, zda jste vyplnili captcha.",
      });
      return;
    }

    form.trigger();
    setSubmitting(true);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3_FORMS_KEY,
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });

    const dataRes = await response.json();
    if (dataRes.success) {
      setSubmitting(false);
    } else {
      console.log("err");
    }

    hcaptcha.current?.resetCaptcha();
    if (dataRes.success) {
      toast({
        description: "Vaše zpráva byla odeslána.",
      });
    }
    form.reset();
    setSubmitting(false);
    return;
  }

  return (
    <Form {...form}>
      <form
        id="form"
        encType="multipart/form-data"
        onSubmit={hcaptchaVerify}
        onChange={() => setIsLoadedHCaptcha(true)}
        className="p-4 space-y-8 w-full"
      >
        <CustomField
          control={form.control}
          name="name"
          formDescription={"Jméno bude zobrazeni ve zprávě."}
          formLabel={"Jméno (3-50)*"}
          render={({ field }) => (
            <Input type="text" value={field.value} {...field} />
          )}
        />
        <CustomField
          control={form.control}
          formDescription={"Email na který přijde odpověď."}
          name="email"
          formLabel={"Email*"}
          render={({ field }) => (
            <Input value={field.value} {...field} type="email" />
          )}
        />
        <CustomField
          control={form.control}
          formDescription={"Obsah zprávy, text."}
          name="message"
          formLabel={"Zpráva (15-400)*"}
          render={({ field }) => <Textarea value={field.value} {...field} />}
        />

        <Button
          className="text-white hover:translate-y-1 hover:scale-[1.01] transition"
          disabled={submitting}
          type="submit"
        >
          Poslat zprávu
        </Button>
        <div className="w-fit h-full items-center justify-center flex">
    {isLoadedHCaptcha && (<Suspense fallback={<Loader />}>
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              languageOverride="cs"
              size="invisible"
              ref={hcaptcha}
              onVerify={onHCaptchaChange}
            />
          </Suspense>)
    }
        </div>
      </form>
    </Form>
  );
}
