/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Menu,
  Download,
  CheckCircle2,
  Terminal,
  Users,
  MapPin,
  Mail,
  Smartphone,
  Link as LinkIcon,
  Linkedin
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen selection:bg-pastel-pink/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-light-grey">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-extrabold tracking-tighter text-soft-black uppercase">
                Cinthia Jesabel Ortiz
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                <a href="#sobre-mi" className="hover:text-terracotta px-3 py-2 text-sm font-semibold transition-colors text-soft-black">Sobre mí</a>
                <a href="#estudios" className="hover:text-terracotta px-3 py-2 text-sm font-semibold transition-colors text-soft-black">Estudios</a>
                <a href="#trayectoria" className="hover:text-terracotta px-3 py-2 text-sm font-semibold transition-colors text-soft-black">Trayectoria</a>
                <a href="#habilidades" className="hover:text-terracotta px-3 py-2 text-sm font-semibold transition-colors text-soft-black">Habilidades</a>
                <a href="#contacto" className="cta-button px-6 py-2.5 rounded-full text-sm font-bold shadow-sm">Contacto</a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="p-2 text-soft-black">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-light-cream overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-5 mb-16 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-6 bg-pastel-pink/10 rounded-full blur-2xl"></div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf9W5O0_p_i_y_u_z_x_c_v_b_n_m_q_w_e_r_t_y_u_i_o_p_a_s_d_f_g_h_j_k_l_z_x_c_v_b_n_m"
                  alt="Cinthia Jesabel Ortiz Portrait"
                  className="relative rounded-3xl shadow-sm w-full object-cover aspect-[4/5] hover:scale-[1.02] transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-7 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-terracotta uppercase bg-terracotta/5 border border-terracotta/10 rounded-full">
                Desarrolladora Web en Formación
              </span>
              <h1 className="text-6xl lg:text-8xl font-extrabold text-soft-black mb-8 leading-tight">
                Cinthia Jesabel <br />
                <span className="text-pastel-pink font-light italic">Ortiz</span>
              </h1>
              <p className="text-xl text-soft-black/70 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Apasionada por la tecnología y la experiencia de usuario. Enfocada en crear soluciones web limpias, funcionales y eficientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a href="#" className="cta-button inline-flex items-center justify-center px-10 py-5 text-base font-bold rounded-full shadow-lg hover:shadow-terracotta/20 hover:-translate-y-1 transition-all">
                  <Download className="mr-2 w-5 h-5" />
                  Descargar CV (PDF)
                </a>
                <a href="#contacto" className="inline-flex items-center justify-center px-10 py-5 text-base font-bold text-soft-black border border-light-grey rounded-full hover:bg-white transition-all">
                  Contactar
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Me */}
      <section id="sobre-mi" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="card-subtle p-8 md:p-16 rounded-3xl"
            {...fadeIn}
          >
            <h2 className="section-header">Sobre mí</h2>
            <div className="space-y-8 text-xl leading-relaxed text-soft-black font-light">
              <p>
                Soy Cinthia Jesabel Ortiz, una persona curiosa, organizada y apasionada por aprender. Me encanta trabajar en espacios donde pueda aportar claridad, empatía y soluciones prácticas. Tengo una fuerte orientación al servicio y al detalle, algo que desarrollé a lo largo de mis años en atención al público y en mis primeras experiencias dentro del mundo web.
              </p>
              <p>
                Disfruto crear, ordenar procesos y mejorar cada día, ya sea en un proyecto, en un sitio web o dentro de un equipo. Me caracterizo por mi compromiso, mi actitud positiva y mi capacidad para adaptarme a distintos entornos con profesionalismo y buena energía.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Studies */}
      <section id="estudios" className="py-24 bg-light-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="card-subtle p-8 md:p-16 rounded-3xl" {...fadeIn}>
            <h2 className="section-header">Estudios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { year: '2025 - Presente', title: 'Tecnicatura Universitaria en Programación', school: 'UTN (En Curso)' },
                { year: '2023', title: 'Técnico Auxiliar Forense', school: 'I.T.E.P.S.A (Finalizado)' },
                { year: '2018 - Pausa', title: 'Licenciatura en Criminalística', school: 'F.A.S.T.A' },
                { year: '2017', title: 'Finalización de Secundaria', school: 'Educación Media' }
              ].map((study, idx) => (
                <div
                  key={idx}
                  className="bg-light-cream/50 p-6 rounded-2xl border border-light-grey/50 group hover:border-pastel-pink/40 transition-colors"
                >
                  <div className="mb-4 text-terracotta font-bold text-xs tracking-widest uppercase">{study.year}</div>
                  <h3 className="font-bold text-lg mb-2 text-soft-black">{study.title}</h3>
                  <p className="text-soft-black/60 text-sm">{study.school}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="trayectoria" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="card-subtle p-8 md:p-16 rounded-3xl"
            {...fadeIn}
          >
            <h2 className="section-header">Trayectoria</h2>
            <div className="space-y-16">
              {[
                {
                  company: "McDonald's (Arcos Dorados)",
                  role: "Cajera / Atención al Público / Encargada de Temporada",
                  period: "2018 - ACTUALIDAD",
                  tasks: [
                    "Gestión bajo presión y resolución de problemas en momentos de alta afluencia.",
                    "Agilidad y eficiencia en diversos roles (caja, mostrador, cocina).",
                    "Trabajo en equipo colaborativo para optimizar la operación diaria."
                  ]
                },
                {
                  company: "Glavinare Web",
                  role: "Asistente en Desarrollo Web (Prácticas Profesionales)",
                  period: "2025",
                  tasks: [
                    "Creación y edición de landing pages utilizando WordPress y Elementor.",
                    "Ajustes visuales, diseño responsive y personalización de plantillas.",
                    "Carga y organización de contenidos siguiendo buenas prácticas de diseño web."
                  ]
                },
                {
                  company: "Farmacia STOLAR",
                  role: "Atención al Cliente / Caja",
                  period: "2024",
                  description: "Realicé tareas de atención al público, manejo de caja y asistencia en mostrador. Responsable de gestionar operaciones de cobro y mantenimiento del sector, reforzando habilidades de comunicación y resolución de consultas."
                }
              ].map((exp, idx) => (
                <div key={idx} className="relative pl-0 md:pl-8 border-l-0 md:border-l-2 border-pastel-pink/20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-soft-black mb-1">{exp.company}</h3>
                      <p className="text-terracotta font-medium italic">{exp.role}</p>
                    </div>
                    <span className="text-pastel-pink font-bold mt-2 md:mt-0 text-sm tracking-widest">{exp.period}</span>
                  </div>
                  {exp.tasks ? (
                    <ul className="space-y-4 text-soft-black font-light leading-relaxed">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start">
                          <CheckCircle2 className="text-pastel-pink mr-3 w-5 h-5 mt-1 flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-soft-black font-light leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="habilidades" className="py-24 bg-light-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="card-subtle p-8 md:p-16 rounded-3xl" {...fadeIn}>
            <h2 className="section-header">Habilidades</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-8">
                  <Terminal className="text-terracotta w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold text-soft-black">Técnicas</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['WordPress', 'Elementor', 'Java Básico', 'C Básico', 'Sistemas de cobro', 'Organización de datos'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-light-cream border border-light-grey rounded-full text-xs font-bold text-soft-black uppercase tracking-widest">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center mb-8">
                  <Users className="text-terracotta w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold text-soft-black">Blandas</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['Atención al cliente', 'Comunicación clara', 'Organización', 'Trabajo en equipo', 'Adaptabilidad', 'Puntualidad'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-light-cream border border-light-grey rounded-full text-xs font-bold text-soft-black uppercase tracking-widest">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="card-subtle p-8 md:p-16 rounded-3xl" {...fadeIn}>
            <h2 className="section-header">Contacto</h2>
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
              <div>
                <p className="text-xl text-soft-black/70 mb-12 leading-relaxed font-light">
                  Si querés comunicarte conmigo, acá te dejo mis datos. Estoy disponible para nuevas oportunidades, proyectos o consultas.
                </p>
                <div className="space-y-8">
                  {[
                    { icon: MapPin, label: 'Ubicación', value: 'Mar del Plata, Argentina' },
                    { icon: Mail, label: 'Email', value: 'cinthiajesabel@gmail.com' },
                    { icon: Smartphone, label: 'Teléfono', value: '+54 223 6185899' },
                    { icon: LinkIcon, label: 'LinkedIn', value: 'linkedin.com/in/cinthiaortizdev', isLink: true, href: 'https://linkedin.com/in/cinthiaortizdev' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-6">
                      <div className="bg-pastel-pink/10 p-4 rounded-full">
                        <item.icon className="text-terracotta w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-soft-black/40 uppercase tracking-widest">{item.label}</p>
                        {item.isLink ? (
                          <a href={item.href} className="text-lg font-bold text-soft-black hover:text-terracotta underline decoration-pastel-pink underline-offset-4 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-bold text-soft-black">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <form className="bg-light-cream p-8 rounded-2xl border border-light-grey/50">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-soft-black/60 uppercase tracking-widest mb-2" htmlFor="name">Nombre</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-5 py-3 rounded-xl border-light-grey bg-white focus:border-terracotta focus:ring focus:ring-terracotta/10 transition-all outline-none"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-soft-black/60 uppercase tracking-widest mb-2" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-3 rounded-xl border-light-grey bg-white focus:border-terracotta focus:ring focus:ring-terracotta/10 transition-all outline-none"
                        placeholder="ejemplo@correo.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-soft-black/60 uppercase tracking-widest mb-2" htmlFor="message">Mensaje</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-5 py-3 rounded-xl border-light-grey bg-white focus:border-terracotta focus:ring focus:ring-terracotta/10 transition-all outline-none"
                        placeholder="¿En qué puedo ayudarte?"
                      ></textarea>
                    </div>
                    <button type="submit" className="cta-button w-full font-bold py-4 rounded-full shadow-lg hover:shadow-terracotta/20 uppercase tracking-widest text-sm">
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-light-cream text-center border-t border-light-grey">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold text-soft-black mb-4 uppercase tracking-tighter">Cinthia Jesabel Ortiz</h3>
          <p className="text-soft-black/50 mb-10 font-light text-sm tracking-wide">Programadora en formación | Atención al cliente | Proyectos Web</p>
          <div className="flex justify-center space-x-8 mb-10">
            <a href="https://linkedin.com/in/cinthiaortizdev" className="text-soft-black hover:text-terracotta transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-[10px] font-bold text-soft-black/30 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Cinthia Jesabel Ortiz. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
