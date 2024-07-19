import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="shadow absolute bottom-0 right-0 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <Link href="/" className="hover:underline">
            {" "}
            Alexandr Stenčuk{" "}
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.privacypolicies.com/live/2470fb14-022a-4f19-a2e0-2893fa1693fd"
              className="mr-4 hover:underline md:mr-6"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
