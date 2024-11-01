import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg gradient-bg p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl">
            {" "}
            Nalaďte web podle představ!{" "}
          </strong>

          <Link
            className="inline-flex items-center gap-2 transition duration-300 rounded-full border group border-white bg-white px-8 py-3 text-blue-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
            href="/contact"
          >
            <span className="text-sm font-medium"> Pojďte začít se mnou </span>

            <svg
              className="size-5 rtl:rotate-180 group-hover:translate-x-0.5 transition"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left w-full">
            <p className="text-lg font-medium text-gray-900">Projekty</p>

            <ul className="mt-8 space-y-4 w-full text-sm">
    {/*
              <li>
                <Link
                  className="relative w-full md:w-fit max-[400px]:w-full text-gray-700 transition footerLinkStyle"
                  href="/projects/lexagos"
                >
                  Lexagos
                </Link>
              </li>
      */}
              <li>
                <Link
                  className="relative w-full md:w-fit max-[400px]:w-full text-gray-700 transition footerLinkStyle"
                  href="/projects/lyfier"
                >
                  Lyfier
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left w-full">
            <p className="text-lg font-medium text-gray-900">Služby</p>

            <ul className="mt-8 space-y-4 text-sm w-full">
              <li className="group">
                <Link
                  className="relative w-full md:w-fit max-[400px]:w-full text-gray-700 transition footerLinkStyle"
                  href="/services#animace"
                >
                  Webové Animace
                </Link>
              </li>

              <li>
                <Link
                  className="relative w-full md:w-fit max-[400px]:w-full text-gray-700 transition footerLinkStyle"
                  href="/services#design"
                >
                  {" "}
                  Webový Design{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="relative w-full md:w-fit max-[400px]:w-full text-gray-700 transition footerLinkStyle"
                  href="/services#vývoj"
                >
                  {" "}
                  Webový Vývoj{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left w-full">
            <p className="text-lg font-medium text-gray-900">Blog</p>

            <ul className="mt-8 space-y-4 text-sm w-full">
              <li>
                <Link
                  className="relative w-full md:w-fit max-[400px]:w-full text-gray-700 transition footerLinkStyle"
                  href="/blog/uvod"
                >
                  {" "}
                  Úvod{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left w-full">
            <p className="text-lg font-medium text-gray-900">Informace</p>

            <ul className="mt-8 space-y-4 text-sm w-full">
              <li>
                <Link
                  className="relative w-full md:w-fit max-[400px]:w-full text-gray-700 transition footerLinkStyle"
                  href="/#faq"
                >
                  {" "}
                  FAQs{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="relative w-full md:w-fit  text-gray-700 transition footerLinkStyle"
                  href="/contact"
                >
                  {" "}
                  Kontakt{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <ul className="flex justify-center gap-6 sm:justify-end">
            <li>
              <Link
                href="https://www.instagram.com/alexandrstencuk/"
                rel="noreferrer"
                target="_blank"
                className="text-blue-700 transition hover:text-blue-700/75"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/mrepoch"
                rel="noreferrer"
                target="_blank"
                className="text-blue-700 transition hover:text-blue-700/75"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
          </ul>

          <div className="mt-16 sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center font-medium text-primary sm:justify-start items-center">
              <Image src="/logo.svg" alt="logo" width={50} height={50} />

              <span className="ml-3 text-xl font-bold"></span>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-2 lg:gap-8">
              <Link
                href="/privacy-policy"
                className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right hover:underline"
              >
                Zásady ochrany osobních údajů
              </Link>
              <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
                Copyright &copy; 2024 Alexandr Stenčuk. Všechna práva vyhrazena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
