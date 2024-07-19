import { AnimatedDiv } from "@/components/shared/AnimatedElements";
import Image from "next/image";
import React from "react";

export default function SpecificService({
  data,
  i,
}: {
  data: {
    heading: string;
    description: string;
    svg1: any;
    svg2: any;
    dlHeading: string;
    dlHeading2: string;
    dlText: string;
    dlText2: string;
    mainImg: string;
  };
  i: number;
}) {
  return (
    <section className="min-h-screen w-full flex items-center gap-8 px-8 flex-col justify-between">
      <AnimatedDiv
        side={`${i % 2 === 0 ? "left" : "right"}`}
        className="py-24 mx-auto w-full"
      >
        <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
          <div className={`md:${i % 2 === 0 ? "order-first" : "order-last"}`}>
            <h2 className="text-4xl font-semibold tracking-tighter text-gray-900 text-balance">
              {data.heading}
            </h2>
            <p className="mt-4 text-base font-medium text-gray-500">
              {data.description}
            </p>

            <dl className="grid max-[450px]:grid-cols-1 max-[450px]:gap-4 grid-cols-2 gap-4 mt-12 list-none lg:gap-6 text-pretty">
              <div>
                <div>
                  <data.svg1 />
                </div>
                <dt className="mt-4 font-medium text-gray-900">
                  {data.dlHeading}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">{data.dlText}</dd>
              </div>
              <div>
                <div>
                  <data.svg2 />
                </div>
                <dt className="mt-4 font-medium text-gray-900">
                  {data.dlHeading2}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">{data.dlText2}</dd>
              </div>
            </dl>
          </div>
          <div
            className={`${i % 2 === 0 ? "order-last" : "order-first"} block w-full mt-12 aspect-square lg:mt-0`}
          >
            <div className="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
              <Image
                alt={data.heading}
                width={1200}
                height={1200}
                className="object-contain h-full relative w-full rounded-2xl drop-shadow-2xl"
                src={data.mainImg}
              />
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
}
