'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FileText, CheckCircle, Shield, Mail, Phone, MapPin, ArrowRight, FileSpreadsheet, CreditCard, PiggyBank, UserPlus, FileCheck, Clock } from 'lucide-react'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-6 md:px-10 flex justify-between items-center bg-white border-b">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-500">ITIN Helper</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-[#FF9494] transition-colors">Home</Link>
          <Link href="#about" className="text-gray-600 hover:text-[#FF9494] transition-colors">About</Link>
          <Link href="#services" className="text-gray-600 hover:text-[#FF9494] transition-colors">Services</Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-[#FF9494] transition-colors">How It Works</Link>
          <Link href="#faq" className="text-gray-600 hover:text-[#FF9494] transition-colors">FAQ</Link>
          <Link href="#contact" className="text-gray-600 hover:text-[#FF9494] transition-colors">Contact</Link>
        </nav>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6">Get Started</Button>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-10">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#333] leading-tight">Simplify Your ITIN <br />Application Process</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our waitlist to access financial opportunities and get your ITIN hassle-free.
          </p>
          <Link href="https://docs.google.com/forms/d/1mby5zO0W4USsfPbm3Gi-kwBthG0gJrAKw8VnihomRr4/edit" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#94C9FF] hover:bg-[#76B6FF] text-white rounded-full px-8 py-6 text-lg">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 rounded-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#333]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Application Assistance', description: 'We guide you through every step of the ITIN application process.', icon: <FileText className="h-12 w-12" />, color: 'bg-[#FFD9D9]' },
              { title: 'Document Review', description: 'Our experts review your documents to ensure accuracy and completeness.', icon: <CheckCircle className="h-12 w-12" />, color: 'bg-[#D9EEFF]' },
              { title: 'Safe & Secure Processing', description: 'Apply with confidence. Your documents stay with you throughout the process.', icon: <Shield className="h-12 w-12" />, color: 'bg-[#D9FFE5]' },
            ].map((service, index) => (
              <Card key={index} className={`${service.color} border-none shadow-none rounded-3xl transition-transform hover:scale-105`}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#333]">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#333]">About Us</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              We're on a mission to simplify the ITIN application process for migrants. ITIN Helper is a platform designed to guide you step-by-step through obtaining your Individual Taxpayer Identification Number (ITIN), helping you access vital financial services.
            </p>
            <h3 className="text-2xl font-bold text-center mb-6 text-[#333]">Why We Do It</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white shadow-lg rounded-xl">
                <CardContent className="p-6 text-center">
                  <FileSpreadsheet className="h-12 w-12 mx-auto mb-4 text-[#FF9494]" />
                  <h4 className="text-xl font-semibold mb-2">Filing Taxes</h4>
                  <p className="text-gray-600">Stay compliant with U.S. tax law.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg rounded-xl">
                <CardContent className="p-6 text-center">
                  <PiggyBank className="h-12 w-12 mx-auto mb-4 text-[#94C9FF]" />
                  <h4 className="text-xl font-semibold mb-2">Opening Bank Accounts</h4>
                  <p className="text-gray-600">Gain access to financial services.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg rounded-xl">
                <CardContent className="p-6 text-center">
                  <CreditCard className="h-12 w-12 mx-auto mb-4 text-[#94FFB2]" />
                  <h4 className="text-xl font-semibold mb-2">Building Credit</h4>
                  <p className="text-gray-600">Lay the foundation for credit opportunities and future loans.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#333]">Get Your ITIN in 3 Simple Steps</h2>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
              {[
                { title: "Sign Up", description: "Join the waitlist to get started.", icon: <UserPlus className="h-12 w-12 mx-auto mb-4 text-[#FF9494]" /> },
                { title: "Document Submission", description: "We help you gather and submit the required documents.", icon: <FileCheck className="h-12 w-12 mx-auto mb-4 text-[#94C9FF]" /> },
                { title: "Track and Receive", description: "Track your application and receive your ITIN.", icon: <Clock className="h-12 w-12 mx-auto mb-4 text-[#94FFB2]" /> },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {step.icon}
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">Have a Question?</h2>
            <p className="text-center text-gray-600 mb-12">
              From understanding ITINs to navigating the application process. Find quick answers to help you make the most of our services.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {[
                { question: "What is an ITIN?", answer: "An ITIN is a tax identification number issued by the IRS for individuals who are not eligible for a Social Security Number (SSN). It allows people to comply with U.S. tax laws and file taxes." },
                { question: "Who needs an ITIN?", answer: "ITINs are for individuals without an SSN who need to file taxes, such as undocumented immigrants, foreign investors, and dependents of U.S. residents." },
                { question: "How do I apply for an ITIN?", answer: "You must complete Form W-7 and submit it along with proof of identity and foreign status, either by mail to the IRS or through an IRS-authorized Certified Acceptance Agent (CAA)." },
                { question: "Do I need to mail my passport or original documents?", answer: "If applying directly through the IRS, you must mail the original passport or certified copies from the issuing agency. However, if you apply through a Certified Acceptance Agent (CAA), they can verify your documents in person, so you don't need to mail the originals." },
                { question: "How long do I have to be in the U.S. before applying for an ITIN?", answer: "There is no minimum time requirement for being in the U.S. before applying for an ITIN. You can apply as soon as you need one for tax purposes." },
                { question: "Can I use an ITIN to work legally in the U.S.?", answer: "An ITIN can be used for tax purposes if you are an independent contractor or run your own business (like an LLC). However, it does not authorize employment in a W-2 capacity, which requires a Social Security Number." },
                { question: "Does having an ITIN qualify me for Social Security benefits or the Earned Income Tax Credit (EITC)?", answer: "No, ITIN holders are not eligible for these benefits." },
                { question: "Why should I apply for an ITIN?", answer: "ITINs are essential for filing taxes, applying for certain loans, and building credit through financial institutions." },
                { question: "How long does it take to receive an ITIN?", answer: "The process typically takes up to seven weeks if all documents are correct. However, it may take longer during peak filing seasons." },
                { question: "Do ITINs expire?", answer: "Yes, ITINs can expire. The IRS has specific rules about ITIN expiration and renewal. It's important to check the current IRS guidelines or consult with a tax professional to understand if and when your ITIN might expire." },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-semibold py-4 text-[#333] hover:text-[#FF9494]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20 bg-gray-50 rounded-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#333]">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-12">
            <Card className="w-full md:w-96 rounded-3xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-[#333]">Get in Touch</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="rounded-full" />
                  <Input type="email" placeholder="Your Email" className="rounded-full" />
                  <Input placeholder="Subject" className="rounded-full" />
                  <textarea className="w-full p-4 border rounded-3xl" rows={4} placeholder="Your Message"></textarea>
                  <Button className="w-full bg-[#94C9FF] hover:bg-[#76B6FF] text-white rounded-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-[#FF9494]" />
                <div>
                  <h4 className="font-semibold text-lg text-[#333]">Email</h4>
                  <p className="text-gray-600">info@itinhelper.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-[#94C9FF]" />
                <div>
                  <h4 className="font-semibold text-lg text-[#333]">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-8 w-8 text-[#94FFB2]" />
                
                <div>
                  <h4 className="font-semibold text-lg  text-[#333]">Address</h4>
                  <p className="text-gray-600">123 ITIN Helper St, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <span className="text-2xl font-bold text-blue-500">ITIN Helper</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="/" className="text-gray-600 hover:text-[#FF9494] transition-colors">Home</Link>
            <Link href="#about" className="text-gray-600 hover:text-[#FF9494] transition-colors">About</Link>
            <Link href="#services" className="text-gray-600 hover:text-[#FF9494] transition-colors">Services</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-[#FF9494] transition-colors">How It Works</Link>
            <Link href="#faq" className="text-gray-600 hover:text-[#FF9494] transition-colors">FAQ</Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#FF9494] transition-colors">Contact</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-[#FF9494] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-[#FF9494] transition-colors">Terms of Service</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          © 2024 ITIN Helper. All rights reserved.
        </div>
      </footer>
    </div>
  )
}