import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cspHeader =
    process.env.NODE_ENV === "development"
      ? `
  default-src 'none';
  font-src 'self';
  script-src-elem 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com;
  style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com;
  script-src 'self' 'unsafe-eval' web3forms.com https://hcaptcha.com https://*.hcaptcha.com;
  connect-src 'self' api.web3forms.com https://hcaptcha.com https://*.hcaptcha.com;
  frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com;
  img-src 'self' www.w3.org data:;
  `
      : `
  default-src 'none';
  font-src 'self';
  script-src-elem 'unsafe-inline' 'self' https://hcaptcha.com https://*.hcaptcha.com;
  style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com;
  script-src 'self' web3forms.com https://hcaptcha.com https://*.hcaptcha.com;
  connect-src 'self' api.web3forms.com https://hcaptcha.com https://*.hcaptcha.com;
  frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com;
  img-src 'self' www.w3.org data:;
  `;

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );

  return response;
}
