"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "Website Development", href: "#services" },
  { name: "Graphic Designing", href: "#services" },
  { name: "Video Editing", href: "#services" },
  { name: "Social Media Management", href: "#services" },
  { name: "YouTube SEO", href: "#services" },
  { name: "Political Campaigns", href: "#services" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/SMTechMediaOfficial",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sm_tech_media?igsh=MWVtcm1hbWc1NWh4ZA==",
    icon: FaInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919908540952",
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0c2235] text-white">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#173652] via-[#102d45] to-[#081a29]" />

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background Glow Left */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 24, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-44 top-10 h-[420px] w-[420px] rounded-full bg-[#4DA3FF]/15 blur-[120px]"
      />

      {/* Background Glow Right */}
      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-44 bottom-0 h-[450px] w-[450px] rounded-full bg-white/10 blur-[130px]"
      />

      {/* Wider Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Top CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative -top-1 overflow-hidden rounded-b-[30px] border-x border-b border-white/10 bg-white/[0.06] px-6 py-8 backdrop-blur-xl sm:px-8 lg:px-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#4DA3FF]/20 blur-[80px]" />

          <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div className="max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#7ebcff]">
                Ready To Grow Your Brand?
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[44px]">
                Let&apos;s Turn Your Ideas Into
                <span className="ml-2 bg-gradient-to-r from-white to-[#7ebcff] bg-clip-text text-transparent">
                  Digital Success
                </span>
              </h2>

              <p className="mt-3 max-w-3xl text-base leading-8 text-white/75 lg:text-[17px]">
                Partner with SM Tech Media for professional creative, digital
                and marketing solutions.
              </p>
            </div>

            <motion.a
              href="https://wa.me/919908540952"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex min-w-[265px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-[17px] font-black text-[#173652] shadow-[0_18px_45px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-[#edf7ff]"
            >
              <FaWhatsapp className="text-2xl" />

              <span>Start a Conversation</span>

              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>

        {/* Main Footer Columns */}
        <div className="grid gap-10 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.15fr] lg:gap-7">
          {/* Company Information */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="min-w-0"
          >
            <a href="#home" className="inline-flex items-center gap-5">
              <div className="relative flex h-[86px] w-[86px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
                <Image
                  src="/logo.png"
                  alt="SM Tech Media Logo"
                  width={86}
                  height={86}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-[34px] font-black leading-tight tracking-[-0.025em] text-white">
                  SM Tech Media
                </h3>

                <p className="mt-2 text-[15px] font-bold uppercase tracking-[0.17em] text-[#7ebcff]">
                  Digital Creative Agency
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-[440px] text-[17px] leading-8 text-white/72">
              SM Tech Media provides professional website development, graphic
              designing, video editing, social media management, digital
              marketing and political campaign services.
            </p>

            <p className="mt-5 max-w-[430px] text-[17px] font-semibold leading-8 text-white/90">
              Transforming ideas into powerful digital experiences.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit SM Tech Media on ${social.name}`}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                      rotate: 5,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="flex h-[62px] w-[62px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[25px] text-white backdrop-blur-xl transition-all duration-300 hover:border-[#4DA3FF]/60 hover:bg-[#4DA3FF] hover:shadow-[0_15px_35px_rgba(77,163,255,0.3)]"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
          >
            <h3 className="text-[27px] font-black leading-tight text-white">
              Quick Links
            </h3>

            <div className="mt-4 h-1.5 w-16 rounded-full bg-[#4DA3FF]" />

            <ul className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-[17px] font-semibold text-white/72 transition-colors duration-300 hover:text-white"
                  >
                    <FaArrowRight className="text-xs text-[#4DA3FF] transition-transform duration-300 group-hover:translate-x-1.5" />

                    <span className="relative whitespace-nowrap">
                      {link.name}

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#4DA3FF] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.2,
            }}
          >
            <h3 className="text-[27px] font-black leading-tight text-white">
              Our Services
            </h3>

            <div className="mt-4 h-1.5 w-16 rounded-full bg-[#4DA3FF]" />

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group inline-flex items-center gap-3 text-[17px] font-semibold text-white/72 transition-colors duration-300 hover:text-white"
                  >
                    <FaArrowRight className="shrink-0 text-xs text-[#4DA3FF] transition-transform duration-300 group-hover:translate-x-1.5" />

                    <span className="relative">
                      {service.name}

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#4DA3FF] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.3,
            }}
            className="min-w-0"
          >
            <h3 className="text-[27px] font-black leading-tight text-white">
              Contact Us
            </h3>

            <div className="mt-4 h-1.5 w-16 rounded-full bg-[#4DA3FF]" />

            <div className="mt-7 space-y-6">
              {/* Phone */}
              <a
                href="tel:+919908540952"
                className="group flex items-start gap-4"
              >
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[23px] text-[#7ebcff] transition-all duration-300 group-hover:border-[#4DA3FF]/50 group-hover:bg-[#4DA3FF] group-hover:text-white">
                  <FaPhoneAlt />
                </div>

                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/45">
                    Phone
                  </p>

                  <p className="mt-1.5 whitespace-nowrap text-[17px] font-semibold text-white/82 transition-colors duration-300 group-hover:text-white">
                    +91 99085 40952
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:smtechmedia206@gmail.com"
                className="group flex items-start gap-4"
              >
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[23px] text-[#7ebcff] transition-all duration-300 group-hover:border-[#4DA3FF]/50 group-hover:bg-[#4DA3FF] group-hover:text-white">
                  <FaEnvelope />
                </div>

                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/45">
                    Email
                  </p>

                  <p className="mt-1.5 break-words text-[16px] font-semibold leading-6 text-white/82 transition-colors duration-300 group-hover:text-white xl:text-[17px]">
                    smtechmedia206@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[23px] text-[#7ebcff]">
                  <FaMapMarkerAlt />
                </div>

                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/45">
                    Location
                  </p>

                  <p className="mt-1.5 text-[17px] font-semibold leading-7 text-white/82">
                    Gopalapuram, East Godavari,
                    <br />
                    Andhra Pradesh – 534316
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-base font-medium text-white/55">
            © {currentYear}{" "}
            <span className="font-bold text-white/82">SM Tech Media.</span> All
            Rights Reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-2 text-base font-medium text-white/55 sm:justify-end">
            Designed &amp; Developed by
            <a
              href="#home"
              className="font-bold text-[#7ebcff] transition-colors duration-300 hover:text-white"
            >
              SM Tech Media
            </a>

            <motion.span
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-lg text-[#4DA3FF]"
            >
              <FaHeart />
            </motion.span>
          </p>
        </div>
      </div>
    </footer>
  );
}