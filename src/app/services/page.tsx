import ContactSection from '@/components/sections/Home/ContactSection'
import Landing from '@/components/sections/Services/Landing'
import SpecificService from '@/components/sections/Services/SpecificService'
import { AudioLines, Cloud } from 'lucide-react'
import React from 'react'

const services = [
  {
    heading: "Animace",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi inim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.",
    svg1: Cloud,
    svg2: AudioLines,
    dlHeading: "Text",
    dlHeading2: "Text2",
    dlText: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    dlText2: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    mainImg: "/assets/polaroid.svg"
  },
  {
    heading: "Design",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi inim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.",
    svg1: Cloud,
    svg2: AudioLines,
    dlHeading: "Text",
    dlHeading2: "Text2",
    dlText: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    dlText2: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    mainImg: "/assets/undraw-design.svg"
  },
  {
    heading: "Vývoj",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi inim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.",
    svg1: Cloud,
    svg2: AudioLines,
    dlHeading: "Text",
    dlHeading2: "Text2",
    dlText: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    dlText2: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    mainImg: "/assets/undraw-code.svg"
  },
]

export default function Page() {
  return (
    <div className="relative w-full min-h-screen py-16">
      <div className="max-w-screen-xl flex-col gap-8 justify-between items-center flex mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
        <Landing />
        {services.map((data, index) => (
          <SpecificService i={index} key={index} data={data} />
        ))}
        <ContactSection />
      </div>
    </div>
  )
}

