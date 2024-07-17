import { AnimatedDiv } from '@/components/shared/AnimatedElements'
import ContactForm from '@/components/shared/ContactForm'
import React from 'react'

export default function ContactSection() {
  return (
    <section className="min-h-screen py-16 w-full flex h-full">
      <AnimatedDiv className="justify-center items-center flex-1 flex gap-8 flex-col mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
        <h2 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Kontakt</h2>
        <div className="sm:p-16 p-8 mx-auto max-w-xl w-full bg-white flex items-center font-[sans-serif] shadow-lg rounded-lg">
          <ContactForm />
        </div>
      </AnimatedDiv>
    </section>
  )
}

