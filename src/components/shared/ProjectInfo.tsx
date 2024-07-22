import { Project } from '@/types'
import React from 'react'

export default function ProjectInfo({ info }: { info: Project }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center border py-2 px-4 bg-gray-200 justify-between gap-8 overflow-x-auto">
        <span className="text-xl font-bold">Technologie</span>
        <span className="text-xl font-bold">{info.technologies.join(", ")}</span>
      </div>
      <div className="flex justify-between gap-8 overflow-x-auto"></div>
      <div className="flex justify-between gap-8 overflow-x-auto"></div>
    </div>
  )
}

