'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FileText, CheckCircle, Shield, Mail, Phone, ArrowRight, FileSpreadsheet, CreditCard, Clock, Pen, ActivitySquare } from 'lucide-react'

export function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-6 md:px-10 flex justify-between items-center bg-white border-b">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-500">ITIN Helper</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button asChild variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
            <Link href="https://calendly.com/brlteamroom9-labs">Schedule Appointment</Link>
          </Button>
          <div className="flex space-x-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/">English</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/es">Español</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-10">
        {/* Hero Section */}
        <section className="py-20 text-center max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#333] leading-tight">Simplify Your ITIN Application Process</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our waitlist to access financial opportunities and get your ITIN hassle-free.
          </p>
          <Link href="#schedule">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>

        {/* Why ITIN Matters Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">Why ITIN Matters</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Unlock Financial Opportunities and Secure Your Future
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: "ACCESS",
                  title: "Financial Inclusion",
                  description: "An ITIN opens doors to essential financial services, allowing you to open bank accounts, build credit history, and participate more fully in the U.S. financial system.",
                  icon: <FileSpreadsheet className="h-6 w-6" />
                },
                {
                  label: "GROW",
                  title: "Economic Opportunities",
                  description: "ITINs enable you to pursue various economic activities, such as starting a business, investing, or securing certain types of loans, fostering your financial growth and stability.",
                  icon: <CreditCard className="h-6 w-6" />
                },
                {
                  label: "COMPLY",
                  title: "Tax Compliance",
                  description: "With an ITIN, you can fulfill your tax obligations, demonstrating your commitment to following U.S. laws and potentially qualifying for certain tax benefits.",
                  icon: <CheckCircle className="h-6 w-6" />
                }
              ].map((reason, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <div className="h-24 bg-gradient-to-r from-[#FFD9D9] via-[#D9EEFF] to-[#D9FFE5] flex items-end justify-start p-4 relative">
                    <span className="text-gray-800 text-sm font-semibold tracking-wider">{reason.label}</span>
                    <div className="absolute top-4 right-4 text-gray-800">
                      {reason.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#333]">{reason.title}</h3>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto text-center bg-gray-50 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6 text-[#333]">Who We Are</h2>
            <p className="text-xl text-gray-600">
              We're on a mission to simplify the ITIN application process for migrants. ITIN Helper is a platform designed to guide you step-by-step through obtaining your Individual Taxpayer Identification Number (ITIN), helping you access vital financial services.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-12">
              From understanding ITINs to navigating the application process. Find quick answers to help you make the most of our services.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {[
                { question: "What is an ITIN?", answer: "An ITIN (Individual Taxpayer Identification Number) is a tax processing number issued by the Internal Revenue Service (IRS) for individuals who are required to have a U.S. taxpayer identification number but who do not have, and are not eligible to obtain, a Social Security Number (SSN)." },
                { question: "Who needs an ITIN?", answer: "ITINs are for individuals who need to file U.S. tax returns or are claimed as dependents on a U.S. tax return, but are not eligible for an SSN. This includes undocumented immigrants, foreign nationals, and their spouses or dependents." },
                { question: "How do I apply for an ITIN?", answer: "To apply for an ITIN, you must complete IRS Form W-7, provide proof of identity and foreign status, and submit a valid federal income tax return (unless you qualify for an exception). You can mail these documents to the IRS or use an IRS-authorized Certified Acceptance Agent (CAA) for assistance." },
                { question: "What documents do I need to apply for an ITIN?", answer: "You'll need to provide original or certified copies of documents that prove your identity and foreign status. Acceptable documents include a passport, national ID card, driver's license, civil birth certificate, or visa. The specific documents required may vary based on your situation." },
                { question: "Do I need to mail my original documents?", answer: "If you're applying directly with the IRS, you generally need to submit original documents or certified copies. However, if you use a Certified Acceptance Agent (CAA), they can verify your original documents in person, so you don't have to mail them." },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="mb-4">
                  <AccordionTrigger className="text-left text-lg font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg text-[#333]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4 px-6 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">Our Services</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We offer comprehensive assistance for your ITIN application process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Application Assistance",
                  description: "We guide you through every step of the ITIN application process.",
                  icon: <FileText className="h-6 w-6" />,
                  color: "bg-[#FFD9D9]",
                  textColor: "text-[#FF5252]"
                },
                {
                  title: "Document Review",
                  description: "Our experts review your documents to ensure accuracy and completeness.",
                  icon: <CheckCircle className="h-6 w-6" />,
                  color: "bg-[#D9EEFF]",
                  textColor: "text-[#2196F3]"
                },
                {
                  title: "Safe & Secure Processing",
                  description: "Apply with confidence. Your documents stay with you throughout the process.",
                  icon: <Shield className="h-6 w-6" />,
                  color: "bg-[#D9FFE5]",
                  textColor: "text-[#4CAF50]"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 flex flex-col">
                  <div className={`h-16 ${service.color} flex items-center justify-center`}>
                    <div className={service.textColor}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h3 className="text-xl font-bold mb-2 text-[#333]">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">How It Works</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Get Your ITIN in 3 Simple Steps
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {[
                {
                  title: "Schedule Consultation",
                  description: "Book a free consultation with our ITIN experts to discuss your situation and needs.",
                  icon: <Clock className="h-8 w-8" />,
                  color: "bg-[#FFD9D9]",
                  textColor: "text-[#FF9494]"
                },
                {
                  title: "Prepare Application",
                  description: "We'll guide you through gathering the necessary documents and completing the application forms.",
                  icon: <Pen className="h-8 w-8" />,
                  color: "bg-[#D9EEFF]",
                  textColor: "text-[#94C9FF]"
                },
                {
                  title: "Submit and Track",
                  description: "We'll submit your application and provide real-time updates on its progress.",
                  icon: <ActivitySquare className="h-8 w-8" />,
                  color: "bg-[#D9FFE5]",
                  textColor: "text-[#4CAF50]"
                }
              ].map((step, index) => (
                <div key={index} className="flex-1 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                    <div className={step.textColor}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#333]">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block h-8 w-8 text-gray-300 mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Appointment Section */}
        <section id="schedule" className="py-20 bg-gradient-to-r from-[#FFD9D9] via-[#D9EEFF] to-[#D9FFE5] rounded-3xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#333]">Start Your ITIN Journey</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to get your ITIN? Schedule a free consultation with our experts today. Limited availability!
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3" asChild>
              <Link href="https://calendly.com/brlteamroom9-labs">
                Schedule Appointment
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6  md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center  md:items-start mb-4 md:mb-0">
            <span className="text-2xl font-bold text-blue-500 mb-2">ITIN Helper</span>
            <p className="text-gray-600 text-sm">© 2024 ITIN Helper. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0  md:space-x-4">
            <p className="text-gray-600 flex items-center"><Mail className="h-4 w-4 mr-2" /> team9@labs.robinhood.org</p>
            <p className="text-gray-600 flex items-center"><Phone className="h-4 w-4 mr-2" /> (646) 920-6771</p>
            <Button asChild variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
              <Link href="https://forms.gle/Ue3Hy7Ht9aqVLLZA6">Join Waitlist</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}