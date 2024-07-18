import BlogSection from '@/components/sections/Blog/BlogSection'
import React from 'react'

export default function Page() {
  return (
    <div className="relative w-full min-h-screen py-16">
      <div className="max-w-screen-xl flex-col gap-8 justify-between items-center flex mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
        <BlogSection />
      </div>
    </div>
  )
}
