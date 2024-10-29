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
            <Link href="https://calendly.com/brlteamroom9-labs">Programar Cita</Link>
          </Button>
          <div className="flex space-x-2">
            <Button asChild variant="outline" size="sm" className="w-10">
              <Link href="/">EN</Link>
            </Button>
            <Button variant="outline" size="sm" className="w-10">
              ES
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-10">
        {/* Hero Section */}
        <section className="py-20 text-center max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#333] leading-tight">Simplifica tu Proceso de Solicitud de ITIN</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Únete a nuestra lista de espera para acceder a oportunidades financieras y obtener tu ITIN sin complicaciones.
          </p>
          <Link href="#schedule">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg">
              Unirse a la Lista de Espera
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>

        {/* Why ITIN Matters Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">Por qué el ITIN es Importante</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Desbloquea Oportunidades Financieras y Asegura tu Futuro
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: "ACCESO",
                  title: "Inclusión Financiera",
                  description: "Un ITIN abre puertas a servicios financieros esenciales, permitiéndote abrir cuentas bancarias, construir historial crediticio y participar más plenamente en el sistema financiero de EE. UU.",
                  icon: <FileSpreadsheet className="h-6 w-6" />
                },
                {
                  label: "CRECER",
                  title: "Oportunidades Económicas",
                  description: "Los ITIN te permiten realizar diversas actividades económicas, como iniciar un negocio, invertir o asegurar ciertos tipos de préstamos, fomentando tu crecimiento y estabilidad financiera.",
                  icon: <CreditCard className="h-6 w-6" />
                },
                {
                  label: "CUMPLIR",
                  title: "Cumplimiento Fiscal",
                  description: "Con un ITIN, puedes cumplir con tus obligaciones fiscales, demostrando tu compromiso de seguir las leyes de EE. UU. y potencialmente calificar para ciertos beneficios fiscales.",
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
            <h2 className="text-4xl font-bold mb-6 text-[#333]">Quiénes Somos</h2>
            <p className="text-xl text-gray-600">
              Nuestra misión es simplificar el proceso de solicitud de ITIN para migrantes. ITIN Helper es una plataforma diseñada para guiarte paso a paso en la obtención de tu Número de Identificación Personal del Contribuyente (ITIN), ayudándote a acceder a servicios financieros vitales.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">Preguntas Frecuentes</h2>
            <p className="text-center text-gray-600 mb-12">
              Desde entender los ITIN hasta navegar por el proceso de solicitud. Encuentra respuestas rápidas para aprovechar al máximo nuestros servicios.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {[
                { question: "¿Qué es un ITIN?", answer: "Un ITIN (Número de Identificación Personal del Contribuyente) es un número de procesamiento de impuestos emitido por el Servicio de Impuestos Internos (IRS) para personas que necesitan un número de identificación de contribuyente de EE. UU. pero que no tienen, y no son elegibles para obtener, un Número de Seguro Social (SSN)." },
                { question: "¿Quién necesita un ITIN?", answer: "Los ITIN son para personas que necesitan presentar declaraciones de impuestos de EE. UU. o son reclamados como dependientes en una declaración de impuestos de EE. UU., pero no son elegibles para un SSN. Esto incluye a inmigrantes indocumentados, ciudadanos extranjeros y sus cónyuges o dependientes." },
                { question: "¿Cómo solicito un ITIN?", answer: "Para solicitar un ITIN, debes completar el Formulario W-7 del IRS, proporcionar prueba de identidad y estatus extranjero, y presentar una declaración de impuestos federales válida (a menos que califiques para una excepción). Puedes enviar estos documentos por correo al IRS o utilizar un Agente de Aceptación Certificado (CAA) autorizado por el IRS para obtener asistencia." },
                { question: "¿Qué documentos necesito para solicitar un ITIN?", answer: "Necesitarás proporcionar documentos originales o copias certificadas que prueben tu identidad y estatus extranjero. Los documentos aceptables incluyen pasaporte, tarjeta de identificación nacional, licencia de conducir, certificado de nacimiento civil o visa. Los documentos específicos requeridos pueden variar según tu situación." },
                { question: "¿Necesito enviar mis documentos originales por correo?", answer: "Si estás solicitando directamente con el IRS, generalmente necesitas enviar documentos originales o copias certificadas. Sin embargo, si utilizas un Agente de Aceptación Certificado (CAA), pueden verificar tus documentos originales en persona, por lo que no necesitas enviarlos por correo." },
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
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">Nuestros Servicios</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Ofrecemos asistencia integral para tu proceso de solicitud de ITIN.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Asistencia en la Solicitud",
                  description: "Te guiamos en cada paso del proceso de solicitud de ITIN.",
                  icon: <FileText className="h-6 w-6" />,
                  color: "bg-[#FFD9D9]",
                  textColor: "text-[#FF5252]"
                },
                {
                  title: "Revisión de Documentos",
                  description: "Nuestros expertos revisan tus documentos para garantizar precisión y completitud.",
                  icon: <CheckCircle className="h-6 w-6" />,
                  color: "bg-[#D9EEFF]",
                  textColor: "text-[#2196F3]"
                },
                {
                  title: "Procesamiento Seguro",
                  description: "Aplica con confianza. Tus documentos permanecen contigo durante todo el proceso.",
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
            <h2 className="text-4xl font-bold text-center mb-4 text-[#333]">Cómo Funciona</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Obtén tu ITIN en 3 Simples Pasos
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {[
                {
                  title: "Programa una Consulta",
                  description: "Reserva una consulta gratuita con nuestros expertos en ITIN para discutir tu situación y necesidades.",
                  icon: <Clock className="h-8 w-8" />,
                  color: "bg-[#FFD9D9]",
                  textColor: "text-[#FF9494]"
                },
                {
                  title: "Prepara la Solicitud",
                  description: "Te guiaremos en la recopilación de los documentos necesarios y en completar los formularios de solicitud.",
                  icon: <Pen className="h-8 w-8" />,
                  color: "bg-[#D9EEFF]",
                  textColor: "text-[#94C9FF]"
                },
                {
                  title: "Envía y Rastrea",
                  description: "Enviaremos tu solicitud y te proporcionaremos actualizaciones en tiempo real sobre su progreso.",
                  icon: <ActivitySquare className="h-8 w-8" />,
                  color: "bg-[#D9FFE5]",
                  textColor: "text-[#4CAF50]"
                }
              ].map((step, index) => (
                <div key={index} className="flex-1 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center  mb-4`}>
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
            <h2 className="text-4xl font-bold mb-4 text-[#333]">Comienza tu Viaje ITIN</h2>
            <p className="text-xl text-gray-600 mb-8">
              ¿Listo para obtener tu ITIN? Programa una consulta gratuita con nuestros expertos hoy. ¡Disponibilidad limitada!
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3" asChild>
              <Link href="https://calendly.com/brlteamroom9-labs">
                Programar Cita
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <span className="text-2xl font-bold text-blue-500 mb-2">ITIN Helper</span>
            <p className="text-gray-600 text-sm">© 2024 ITIN Helper. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0  md:space-x-4">
            <p className="text-gray-600 flex items-center"><Mail className="h-4 w-4 mr-2" /> team9@labs.robinhood.org</p>
            <p className="text-gray-600 flex items-center"><Phone className="h-4 w-4 mr-2" /> (646) 920-6771</p>
            <Button asChild variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
              <Link href="https://forms.gle/Ue3Hy7Ht9aqVLLZA6">Unirse a la Lista de Espera</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}