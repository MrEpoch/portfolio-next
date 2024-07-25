import { Project } from "@/types";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ProjectInfo({ info }: { info: Project }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 odd:bg-white sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Název</dt>
            <dd className="text-gray-700 sm:col-span-2">{info.title}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Vydán</dt>
            <dd className="text-gray-700 sm:col-span-2">{info.publishDate}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 odd:bg-white sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Technologie</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {info.technologies.join(", ")}
            </dd>
          </div>
        </dl>
      </div>
      <div className="flex gap-4 justify-end">
        <Link
          href={info.githubUrl}
          className="bg-gray-100 p-3 hover:bg-gray-200 transition flex items-center justify-center w-fit rounded-full"
        >
          <Github className="w-5 h-5 text-black" />
        </Link>
        <Link
          href={info.projectUrl}
          className="bg-gray-100 p-3 hover:bg-gray-200 transition flex items-center justify-center w-fit rounded-full"
        >
          <Globe className="w-5 h-5 text-black" />
        </Link>
      </div>
    </div>
  );
}
