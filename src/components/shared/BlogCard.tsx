import Link from 'next/link';
import React from 'react'
import { AnimatedDiv } from './AnimatedElements';

export default function BlogCard({ data, i }: {
  data: {
    dataTime: string;
    text: string;
    tags: string[];
    link: string;
  },
  i: number
}) {
  return (
            <AnimatedDiv  key={i} side="bottom" className="w-full h-full" animationLength={0.3 * (i + 1)}>
    <article
  className="hover:animate-background rounded-xl bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
    <time dateTime={data.dataTime} className="block text-xs text-gray-500"> {data.dataTime} </time>

    <Link href={data.link}>
      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
        {data.text}
      </h3>
    </Link>

    <div className="mt-4 flex flex-wrap gap-1">
      {data.tags.map((tag, i) => (
      <span
        key={i} className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600"
      >
        {tag}
      </span>

      ))}
    </div>
  </div>
</article>
</AnimatedDiv>
  )
}
