'use client'

import { useState } from 'react'
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
import { FileText, CheckCircle, Shield, Mail, Phone, MapPin, ArrowRight, FileSpreadsheet, CreditCard, PiggyBank, UserPlus, FileCheck, Clock, Globe } from 'lucide-react'

// Define a type for the language keys
type Language = 'en' | 'es';

// Define translations with explicit typing
const translations: Record<Language, {
  nav: {
    home: string;
    about: string;
    services: string;
    howItWorks: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  about: {
    title: string;
    description: string;
    whyTitle: string;
    reasons: {
      title: string;
      description: string;
    }[];
  };
  howItWorks: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
    };
    info: {
      email: string;
      phone: string;
      address: string;
    };
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
}> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      howItWorks: "How It Works",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      title: "Simplify Your ITIN Application Process",
      subtitle: "Join our waitlist to access financial opportunities and get your ITIN hassle-free.",
      cta: "Join the Waitlist",
    },
    services: {
      title: "Our Services",
      items: [
        { title: "Application Assistance", description: "We guide you through every step of the ITIN application process." },
        { title: "Document Review", description: "Our experts review your documents to ensure accuracy and completeness." },
        { title: "Safe & Secure Processing", description: "Apply with confidence. Your documents stay with you throughout the process." },
      ],
    },
    about: {
      title: "About Us",
      description: "We're on a mission to simplify the ITIN application process for migrants.",
      whyTitle: "Why We Do It",
      reasons: [
        { title: "Filing Taxes", description: "Stay compliant with U.S. tax law." },
        { title: "Opening Bank Accounts", description: "Gain access to financial services." },
        { title: "Building Credit", description: "Lay the foundation for credit opportunities and future loans." },
      ],
    },
    howItWorks: {
      title: "Get Your ITIN in 3 Simple Steps",
      steps: [
        { title: "Sign Up", description: "Join the waitlist to get started." },
        { title: "Document Submission", description: "We help you gather and submit the required documents." },
        { title: "Track and Receive", description: "Track your application and receive your ITIN." },
      ],
    },
    faq: {
      title: "Have a Question?",
      subtitle: "From understanding ITINs to navigating the application process.",
    },
    contact: {
      title: "Contact Us",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
      },
      info: {
        email: "Email",
        phone: "Phone",
        address: "Address",
      },
    },
    footer: {
      rights: "© 2024 ITIN Helper. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      services: "Servicios",
      howItWorks: "Cómo Funciona",
      faq: "Preguntas Frecuentes",
      contact: "Contacto",
    },
    hero: {
      title: "Simplifica tu Proceso de Solicitud de ITIN",
      subtitle: "Únete a nuestra lista de espera para acceder a oportunidades financieras.",
      cta: "Únete a la Lista de Espera",
    },
    services: {
      title: "Nuestros Servicios",
      items: [
        { title: "Asistencia en la Solicitud", description: "Te guiamos en cada paso del proceso de solicitud de ITIN." },
        { title: "Revisión de Documentos", description: "Nuestros expertos revisan tus documentos para garantizar precisión." },
        { title: "Procesamiento Seguro", description: "Aplica con confianza. Tus documentos permanecen contigo." },
      ],
    },
    about: {
      title: "Sobre Nosotros",
      description: "Nuestra misión es simplificar el proceso de solicitud de ITIN para migrantes.",
      whyTitle: "Por Qué Lo Hacemos",
      reasons: [
        { title: "Declaración de Impuestos", description: "Mantente en cumplimiento con la ley fiscal de EE.UU." },
        { title: "Apertura de Cuentas Bancarias", description: "Obtén acceso a servicios financieros." },
        { title: "Construcción de Crédito", description: "Establece las bases para oportunidades de crédito." },
      ],
    },
    howItWorks: {
      title: "Obtén tu ITIN en 3 Simples Pasos",
      steps: [
        { title: "Regístrate", description: "Únete a la lista de espera para comenzar." },
        { title: "Envío de Documentos", description: "Te ayudamos a recopilar y enviar los documentos requeridos." },
        { title: "Seguimiento y Recepción", description: "Haz seguimiento de tu solicitud y recibe tu ITIN." },
      ],
    },
    faq: {
      title: "¿Tienes una Pregunta?",
      subtitle: "Desde entender los ITIN hasta navegar el proceso de solicitud.",
    },
    contact: {
      title: "Contáctanos",
      form: {
        name: "Tu Nombre",
        email: "Tu Correo Electrónico",
        subject: "Asunto",
        message: "Tu Mensaje",
        send: "Enviar Mensaje",
      },
      info: {
        email: "Correo Electrónico",
        phone: "Teléfono",
        address: "Dirección",
      },
    },
    footer: {
      rights: "© 2024 ITIN Helper. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
  },
}

export function LandingPage() {
  const [lang, setLang] = useState<Language>('en')
  const t = translations[lang]

  const toggleLanguage = () => setLang(lang === 'en' ? 'es' : 'en')

export function LandingPage() {
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-6 md:px-10 flex justify-between items-center bg-white border-b">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-500">ITIN Helper</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.home}</Link>
          <Link href="#about" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.about}</Link>
          <Link href="#services" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.services}</Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.howItWorks}</Link>
          <Link href="#faq" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.faq}</Link>
          <Link href="#contact" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6">
            {t.hero.cta}
          </Button>
          <Button onClick={toggleLanguage} variant="outline" size="icon">
            <Globe className="h-4 w-4" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-10">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#333] leading-tight">{t.hero.title}</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <Link href="https://docs.google.com/forms/d/1mby5zO0W4USsfPbm3Gi-kwBthG0gJrAKw8VnihomRr4/edit" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#94C9FF] hover:bg-[#76B6FF] text-white rounded-full px-8 py-6 text-lg">
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 rounded-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#333]">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.services.items.map((service, index) => (
              <Card key={index} className={`${['bg-[#FFD9D9]', 'bg-[#D9EEFF]', 'bg-[#D9FFE5]'][index]} border-none shadow-none rounded-3xl transition-transform hover:scale-105`}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[<FileText className="h-12 w-12" />, <CheckCircle className="h-12 w-12" />, <Shield className="h-12 w-12" />][index]}
                  </div>
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
            <h2 className="text-4xl font-bold text-center mb-8 text-[#333]">{t.about.title}</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              {t.about.description}
            </p>
            <h3 className="text-2xl font-bold text-center mb-6 text-[#333]">{t.about.whyTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {t.about.reasons.map((reason, index) => (
                <Card key={index} className="bg-white shadow-lg rounded-xl">
                  <CardContent className="p-6 text-center">
                    {[<FileSpreadsheet className="h-12 w-12 mx-auto mb-4 text-[#FF9494]" />, <PiggyBank className="h-12 w-12 mx-auto mb-4 text-[#94C9FF]" />, <CreditCard className="h-12 w-12 mx-auto mb-4 text-[#94FFB2]" />][index]}
                    <h4 className="text-xl font-semibold mb-2">{reason.title}</h4>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#333]">{t.howItWorks.title}</h2>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
              {t.howItWorks.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {[<UserPlus className="h-12 w-12 mx-auto mb-4 text-[#FF9494]" />, <FileCheck className="h-12 w-12 mx-auto mb-4 text-[#94C9FF]" />, <Clock className="h-12 w-12 mx-auto mb-4 text-[#94FFB2]" />][index]}
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
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">{t.faq.title}</h2>
            <p className="text-center text-gray-600 mb-12">
              {t.faq.subtitle}
            </p>
            <Accordion type="single" collapsible className="w-full">
              {[
                { question: lang === 'en' ? "What is an ITIN?" : "¿Qué es un ITIN?", answer: lang === 'en' ? "An ITIN is a tax identification number issued by the IRS for individuals who are not eligible for a Social Security Number (SSN). It allows people to comply with U.S. tax laws and file taxes." : "Un ITIN es un número de identificación fiscal emitido por el IRS para personas que no son elegibles para un Número de Seguro Social (SSN). Permite a las personas cumplir con las leyes fiscales de EE.UU. y presentar impuestos." },
                { question: lang === 'en' ? "Who needs an ITIN?" : "¿Quién necesita un ITIN?", answer: lang === 'en' ? "ITINs are for individuals without an SSN who need to file taxes, such as undocumented immigrants, foreign investors, and dependents of U.S. residents." : "Los ITIN son para personas sin SSN que necesitan presentar impuestos, como inmigrantes indocumentados, inversores extranjeros y dependientes de residentes de EE.UU." },
                { question: lang === 'en' ? "How do I apply for an ITIN?" : "¿Cómo solicito un ITIN?", answer: lang === 'en' ? "You must complete Form W-7 and submit it along with proof of identity and foreign status, either by mail to the IRS or through an IRS-authorized Certified Acceptance Agent (CAA)." : "Debes completar el Formulario W-7 y enviarlo junto con prueba de identidad y estatus extranjero, ya sea por correo al IRS o a través de un Agente de Aceptación Certificado (CAA) autorizado por el IRS." },
                { question: lang === 'en' ? "Do I need to mail my passport or original documents?" : "¿Necesito enviar mi pasaporte o documentos originales por correo?", answer: lang === 'en' ? "If applying directly through the IRS, you must mail the original passport or certified copies from the issuing agency. However, if you apply through a Certified Acceptance Agent (CAA), they can verify your documents in person, so you don't need to mail the originals." : "Si solicitas directamente a través del IRS, debes enviar por correo el pasaporte original o copias certificadas de la agencia emisora. Sin embargo, si solicitas a través de un Agente de Aceptación Certificado (CAA), pueden verificar tus documentos en persona, por lo que no necesitas enviar los originales por correo." },
                { question: lang === 'en' ? "How long do I have to be in the U.S. before applying for an ITIN?" : "¿Cuánto tiempo debo estar en EE.UU. antes de solicitar un ITIN?", answer: lang === 'en' ? "There is no minimum time requirement for being in the U.S. before applying for an ITIN. You can apply as soon as you need one for tax purposes." : "No hay un requisito de tiempo mínimo de estancia en EE.UU. antes de solicitar un ITIN. Puedes solicitarlo tan pronto como lo necesites para fines fiscales." },
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
          <h2 className="text-4xl font-bold text-center mb-12 text-[#333]">{t.contact.title}</h2>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-12">
            <Card className="w-full md:w-96 rounded-3xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-[#333]">{t.contact.title}</h3>
                <form className="space-y-4">
                  <Input placeholder={t.contact.form.name} className="rounded-full" />
                  <Input type="email" placeholder={t.contact.form.email} className="rounded-full" />
                  <Input placeholder={t.contact.form.subject} className="rounded-full" />
                  <textarea className="w-full p-4 border rounded-3xl" rows={4} placeholder={t.contact.form.message}></textarea>
                  <Button className="w-full bg-[#94C9FF] hover:bg-[#76B6FF] text-white rounded-full">{t.contact.form.send}</Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-[#FF9494]" />
                <div>
                  <h4 className="font-semibold text-lg text-[#333]">{t.contact.info.email}</h4>
                  <p className="text-gray-600">info@itinhelper.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-[#94C9FF]" />
                <div>
                  <h4 className="font-semibold text-lg text-[#333]">{t.contact.info.phone}</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-8 w-8 text-[#94FFB2]" />
                <div>
                  <h4 className="font-semibold text-lg  text-[#333]">{t.contact.info.address}</h4>
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
            <Link href="/" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.home}</Link>
            <Link href="#about" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.about}</Link>
            <Link href="#services" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.services}</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.howItWorks}</Link>
            <Link href="#faq" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.faq}</Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.nav.contact}</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.footer.privacy}</Link>
            <Link href="/terms" className="text-gray-600 hover:text-[#FF9494] transition-colors">{t.footer.terms}</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          {t.footer.rights}
        </div>
      </footer>
    </div>
  )
}