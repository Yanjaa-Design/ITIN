'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FileText, CheckCircle, Shield, Mail, Phone, MapPin, ArrowRight, FileSpreadsheet, CreditCard, PiggyBank, UserPlus, FileCheck, Clock, Pen, Search, ActivitySquare } from 'lucide-react'

const englishContent = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    howItWorks: "How It Works",
    faq: "FAQ",
    contact: "Contact",
    scheduleAppointment: "Schedule Appointment",
  },
  hero: {
    title: "Simplify Your ITIN Application Process",
    subtitle: "Join our waitlist to access financial opportunities and get your ITIN hassle-free.",
    cta: "Join the Waitlist",
  },
  whoWeAre: {
    title: "Who We Are",
    description: "We're on a mission to simplify the ITIN application process for migrants. ITIN Helper is a platform designed to guide you step-by-step through obtaining your Individual Taxpayer Identification Number (ITIN), helping you access vital financial services.",
  },
  whyItinMatters: {
    title: "Why ITIN Matters",
    subtitle: "Unlock Financial Opportunities and Secure Your Future",
    reasons: [
      {
        label: "ACCESS",
        title: "Financial Inclusion",
        description: "An ITIN opens doors to essential financial services, allowing you to open bank accounts, build credit history, and participate more fully in the U.S. financial system.",
      },
      {
        label: "GROW",
        title: "Economic Opportunities",
        description: "ITINs enable you to pursue various economic activities, such as starting a business, investing, or securing certain types of loans, fostering your financial growth and stability.",
      },
      {
        label: "COMPLY",
        title: "Tax Compliance",
        description: "With an ITIN, you can fulfill your tax obligations, demonstrating your commitment to following U.S. laws and potentially qualifying for certain tax benefits.",
      },
    ],
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "Get Your ITIN in 3 Simple Steps",
    steps: [
      {
        title: "Schedule Consultation",
        description: "Book a free consultation with our ITIN experts to discuss your situation and needs.",
      },
      {
        title: "Prepare Application",
        description: "We'll guide you through gathering the necessary documents and completing the application forms.",
      },
      {
        title: "Submit and Track",
        description: "We'll submit your application and provide real-time updates on its progress.",
      },
    ],
  },
  services: {
    title: "Our Services",
    subtitle: "We offer comprehensive assistance for your ITIN application process.",
    items: [
      {
        title: "Application Assistance",
        description: "We guide you through every step of the ITIN application process.",
        icon: <FileText className="h-6 w-6" />,
      },
      {
        title: "Document Review",
        description: "Our experts review your documents to ensure accuracy and completeness.",
        icon: <CheckCircle className="h-6 w-6" />,
      },
      {
        title: "Safe & Secure Processing",
        description: "Apply with confidence. Your documents stay with you throughout the process.",
        icon: <Shield className="h-6 w-6" />,
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "From understanding ITINs to navigating the application process. Find quick answers to help you make the most of our services.",
  },
  schedule: {
    title: "Schedule an Appointment",
    subtitle: "Ready to start your ITIN application? Book a consultation with our experts today.",
    cta: "Schedule Now",
  },
  footer: {
    rights: "© 2024 ITIN Helper. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};

const spanishContent = {
  nav: {
    home: "Inicio",
    about: "Acerca de",
    services: "Servicios",
    howItWorks: "Cómo funciona",
    faq: "Preguntas frecuentes",
    contact: "Contacto",
    scheduleAppointment: "Programar Cita",
  },
  hero: {
    title: "Simplifica tu proceso de solicitud de ITIN",
    subtitle: "Únete a nuestra lista de espera para acceder a oportunidades financieras y obtener tu ITIN sin complicaciones.",
    cta: "Únete a la lista de espera",
  },
  whoWeAre: {
    title: "¿Quiénes somos?",
    description: "Nuestra misión es simplificar el proceso de solicitud de ITIN para los inmigrantes. ITIN Helper es una plataforma diseñada para guiarte paso a paso en la obtención de tu Número de Identificación de Contribuyente Individual (ITIN), ayudándote a acceder a servicios financieros vitales.",
  },
  whyItinMatters: {
    title: "¿Por qué importa el ITIN?",
    subtitle: "Desbloquea oportunidades financieras y asegura tu futuro",
    reasons: [
      {
        label: "ACCESO",
        title: "Inclusión financiera",
        description: "Un ITIN abre las puertas a servicios financieros esenciales, permitiéndote abrir cuentas bancarias, construir un historial crediticio y participar más plenamente en el sistema financiero de EE. UU.",
      },
      {
        label: "CRECIMIENTO",
        title: "Oportunidades económicas",
        description: "Los ITIN te permiten perseguir diversas actividades económicas, como iniciar un negocio, invertir u obtener ciertos tipos de préstamos, fomentando tu crecimiento y estabilidad financiera.",
      },
      {
        label: "CUMPLIMIENTO",
        title: "Cumplimiento tributario",
        description: "Con un ITIN, puedes cumplir con tus obligaciones fiscales, demostrando tu compromiso de seguir las leyes de EE. UU. y posiblemente calificar para ciertos beneficios fiscales.",
      },
    ],
  },
  howItWorks: {
    title: "Cómo funciona",
    subtitle: "Obtén tu ITIN en 3 sencillos pasos",
    steps: [
      {
        title: "Programa una consulta",
        description: "Reserva una consulta gratuita con nuestros expertos en ITIN para discutir tu situación y necesidades.",
      },
      {
        title: "Prepara la solicitud",
        description: "Te guiaremos para reunir los documentos necesarios y completar los formularios de solicitud.",
      },
      {
        title: "Envía y realiza un seguimiento",
        description: "Enviaremos tu solicitud y te proporcionaremos actualizaciones en tiempo real sobre su progreso.",
      },
    ],
  },
  services: {
    title: "Nuestros servicios",
    subtitle: "Ofrecemos asistencia integral para tu proceso de solicitud de ITIN.",
    items: [
      {
        title: "Asistencia con la solicitud",
        description: "Te guiamos en cada paso del proceso de solicitud de ITIN.",
        icon: <FileText className="h-6 w-6" />,
      },
      {
        title: "Revisión de documentos",
        description: "Nuestros expertos revisan tus documentos para garantizar su precisión e integridad.",
        icon: <CheckCircle className="h-6 w-6" />,
      },
      {
        title: "Procesamiento seguro y confiable",
        description: "Solicita con confianza. Tus documentos permanecen contigo durante todo el proceso.",
        icon: <Shield className="h-6 w-6" />,
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Desde comprender los ITIN hasta navegar el proceso de solicitud. Encuentra respuestas rápidas para ayudarte a aprovechar al máximo nuestros servicios.",
  },
  schedule: {
    title: "Programa una cita",
    subtitle: "¿Listo para comenzar tu solicitud de ITIN? Reserva una consulta con nuestros expertos hoy mismo.",
    cta: "Programar ahora",
  },
  footer: {
    rights: "© 2024 ITIN Helper. Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
  },
};

export function LandingPageComponent() {
  const { locale } = 'en'; //Hardcoded to 'en'
  const content = locale === 'es' ? spanishContent : englishContent;

  const { nav, hero, whoWeAre, whyItinMatters, howItWorks, services, faq, schedule, footer } = content;


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-6 md:px-10 flex justify-between items-center bg-white border-b">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-500">ITIN Helper</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.home}</Link>
          <Link href="#about" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.about}</Link>
          <Link href="#services" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.services}</Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.howItWorks}</Link>
          <Link href="#faq" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.faq}</Link>
          <Link href="#contact" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.contact}</Link>
          <Button asChild variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
            <Link href="https://calendly.com/brlteamroom9-labs">{nav.scheduleAppointment}</Link>
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-10">
        {/* Hero Section */}
        <section className="py-20 text-center max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#333] leading-tight">{hero.title}</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
          <Link href="#schedule">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg">
              {hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>

        {/* Why ITIN Matters Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">{whyItinMatters.title}</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {whyItinMatters.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyItinMatters.reasons.map((reason, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <div className="h-24 bg-gradient-to-r from-[#FFD9D9] via-[#D9EEFF] to-[#D9FFE5] flex items-end justify-start p-4 relative">
                    <span className="text-gray-800 text-sm font-semibold tracking-wider">{reason.label}</span>
                    <div className="absolute top-4 right-4 text-gray-800">
                      {index === 0 && <FileSpreadsheet className="h-6 w-6" />}
                      {index === 1 && <CreditCard className="h-6 w-6" />}
                      {index === 2 && <CheckCircle className="h-6 w-6" />}
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
            <h2 className="text-4xl font-bold mb-6 text-[#333]">{whoWeAre.title}</h2>
            <p className="text-xl text-gray-600">
              {whoWeAre.description}
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">{faq.title}</h2>
            <p className="text-center  text-gray-600 mb-12">
              {faq.subtitle}
            </p>
            <Accordion type="single" collapsible className="w-full">
              {[
                { question: "What is an ITIN?", answer: "An ITIN (Individual Taxpayer Identification Number) is a tax processing number issued by the Internal Revenue Service (IRS) for individuals who are required to have a U.S. taxpayer identification number but who do not have, and are not eligible to obtain, a Social Security Number (SSN)." },
                { question: "Who needs an ITIN?", answer: "ITINs are for individuals who need to file U.S. tax returns or are claimed as dependents on a U.S. tax return, but are not eligible for an SSN. This includes undocumented immigrants, foreign nationals, and their spouses or dependents." },
                { question: "How do I apply for an ITIN?", answer: "To apply for an ITIN, you must complete IRS Form W-7, provide proof of identity and foreign status, and submit a valid federal income tax return (unless you qualify for an exception). You can mail these documents to the IRS or use an IRS-authorized Certified Acceptance Agent (CAA) for assistance." },
                { 
                  question: "What documents do I need to apply for an ITIN?",
                  answer: "You'll need to provide original or certified copies of documents that prove your identity and foreign status. Acceptable documents include a passport, national ID card, driver's license, civil birth certificate, or visa. The specific documents required may vary based on your situation."
                },
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
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">{services.title}</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {services.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.items.map((service, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 flex flex-col">
                  <div className={`h-16 ${['bg-[#FFD9D9]', 'bg-[#D9EEFF]', 'bg-[#D9FFE5]'][index]} flex items-center justify-center`}>
                    <div className={`${['text-[#FF5252]', 'text-[#2196F3]', 'text-[#4CAF50]'][index]}`}>
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
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">{howItWorks.title}</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {howItWorks.subtitle}
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {howItWorks.steps.map((step, index) => (
                <div key={index} className="flex-1 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full ${['bg-[#FFD9D9]', 'bg-[#D9EEFF]', 'bg-[#D9FFE5]'][index]} flex items-center justify-center mb-4`}>
                    <div className={`${['text-[#FF9494]', 'text-[#94C9FF]', 'text-[#4CAF50]'][index]}`}>
                      {[<Clock className="h-8 w-8" />, <Pen className="h-8 w-8" />, <ActivitySquare className="h-8 w-8" />][index]}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#333]">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  {index < howItWorks.steps.length - 1 && (
                    <ArrowRight className="hidden md:block h-8 w-8 text-gray-300 mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Appointment Section */}
        <section id="schedule" className="py-20 bg-gradient-to-r from-[#FFD9D9] via-[#D9EEFF] to-[#D9FFE5]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#333]">{schedule.title}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {schedule.subtitle}
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3" asChild>
              <Link href="https://calendly.com/brlteamroom9-labs">
                {schedule.cta}
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold text-blue-500 mb-4">ITIN Helper</span>
            <p className="text-gray-600 text-sm">{footer.rights}</p>
          </div>
          <nav className="flex flex-col space-y-2 items-center md:items-start">
            <Link href="/" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.home}</Link>
            <Link href="#about" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.about}</Link>
            <Link href="#services" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.services}</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.howItWorks}</Link>
            <Link href="#faq" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.faq}</Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.contact}</Link>
            <Link href="https://calendly.com/brlteamroom9-labs" className="text-gray-600 hover:text-[#FF9494] transition-colors">{nav.scheduleAppointment}</Link>
          </nav>
          <div className="flex flex-col space-y-2 items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
            <p className="text-gray-600 flex items-center"><Mail className="h-4 w-4 mr-2" /> team9@labs.robinhood.org</p>
            <p className="text-gray-600 flex items-center"><Phone className="h-4 w-4 mr-2" /> (646) 920-6771</p>
            <p className="text-gray-600 flex items-center"><MapPin className="h-4 w-4 mr-2" /> 123 Main St, Anytown, USA 12345</p>
          </div>
        </div>
      </footer>
    </div>
  )
}