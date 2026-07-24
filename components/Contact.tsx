"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaPhone,
  FaCommentDots,
  FaBriefcase,
  FaChevronDown,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: FaPhoneAlt,
    title: "Phone Number",
    value: "+91 99085 40952",
    href: "tel:+919908540952",
    type: "phone",
  },
  {
    icon: FaEnvelope,
    title: "Email Address",
    value: "smtechmedia206@gmail.com",
    href: "mailto:smtechmedia206@gmail.com",
    type: "email",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Our Location",
    value: "Gopalapuram, East Godavari, Andhra Pradesh – 534316",
    href: "#contact",
    type: "address",
  },
  {
    icon: FaClock,
    title: "Business Hours",
    value: "Monday – Saturday, 9:00 AM – 7:00 PM",
    href: "#contact",
    type: "hours",
  },
];

const services = [
  "Website Development",
  "Social Media Management",
  "Graphic Designing",
  "Video Editing",
  "YouTube SEO",
  "Digital Marketing",
  "Political Campaigns",
  "Other Service",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = `
Hello SM Tech Media,

I would like to enquire about your services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/919908540952?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7fbff] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#173652 1px, transparent 1px), linear-gradient(90deg, #173652 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Animated Background Glows */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, 22, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-52 top-20 h-[460px] w-[460px] rounded-full bg-[#4DA3FF]/10 blur-[125px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -18, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-[#173652]/10 blur-[135px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 32,
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
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4DA3FF]/20 bg-white px-4 py-2 shadow-sm">
            <motion.span
              animate={{
                scale: [1, 1.45, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-[#4DA3FF]"
            />

            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#173652] sm:text-sm">
              Contact Us
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-[#173652] sm:text-4xl lg:text-5xl">
            Let&apos;s Create Something
            <span className="ml-2 bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#4DA3FF] bg-clip-text text-transparent">
              Powerful Together
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Have a project in mind? Share your requirements with us and our
            team will help you choose the right digital solution for your
            business or personal brand.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          {/* Left Contact Information */}
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#173652] via-[#1F4566] to-[#102b43] p-6 shadow-[0_32px_90px_rgba(23,54,82,0.25)] sm:p-8 lg:p-9"
          >
            {/* Decorative Effects */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4DA3FF]/20 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-[90px]" />

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7ebcff]">
                Talk To Our Team
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Your Digital Growth Starts Here
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Contact SM Tech Media for professional websites, creative
                designs, video editing, digital marketing and political
                campaign solutions.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon;

                  return (
                    <motion.a
                      key={detail.title}
                      href={detail.href}
                      initial={{
                        opacity: 0,
                        y: 22,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.015,
                      }}
                      className="group flex min-h-[126px] rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#4DA3FF]/50 hover:bg-white/[0.11] hover:shadow-[0_18px_45px_rgba(77,163,255,0.12)]"
                    >
                      <div className="flex w-full items-start gap-4">
                        <motion.div
                          whileHover={{
                            rotate: [0, -8, 8, -4, 0],
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg text-[#82c0ff] transition-all duration-300 group-hover:bg-[#4DA3FF] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(77,163,255,0.35)]"
                        >
                          <Icon />
                        </motion.div>

                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-bold uppercase leading-4 tracking-[0.14em] text-white/50">
                            {detail.title}
                          </p>

                          <p
                            className={`mt-2 font-semibold leading-6 text-white ${
                              detail.type === "email"
                                ? "break-all text-[13px] xl:text-xs 2xl:text-sm"
                                : "text-sm"
                            }`}
                          >
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="text-sm font-bold text-white/70">
                  Follow SM Tech Media
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <motion.a
                    href="https://www.facebook.com/SMTechMediaOfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      rotate: 5,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    aria-label="Visit SM Tech Media Facebook page"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-lg text-white transition-all duration-300 hover:border-[#4DA3FF]/50 hover:bg-[#4DA3FF] hover:shadow-[0_12px_30px_rgba(77,163,255,0.35)]"
                  >
                    <FaFacebookF />
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/sm_tech_media?igsh=MWVtcm1hbWc1NWh4ZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      rotate: 5,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    aria-label="Visit SM Tech Media Instagram page"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-lg text-white transition-all duration-300 hover:border-[#4DA3FF]/50 hover:bg-[#4DA3FF] hover:shadow-[0_12px_30px_rgba(77,163,255,0.35)]"
                  >
                    <FaInstagram />
                  </motion.a>

                  <motion.a
                    href="https://wa.me/919908540952"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      rotate: 5,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    aria-label="Contact SM Tech Media on WhatsApp"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-lg text-white transition-all duration-300 hover:border-[#4DA3FF]/50 hover:bg-[#4DA3FF] hover:shadow-[0_12px_30px_rgba(77,163,255,0.35)]"
                  >
                    <FaWhatsapp />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="absolute -inset-px rounded-[34px] bg-gradient-to-br from-[#4DA3FF]/30 via-transparent to-[#173652]/15 blur-sm" />

            <form
              onSubmit={handleSubmit}
              className="relative h-full overflow-hidden rounded-[34px] border border-[#173652]/10 bg-white p-6 shadow-[0_24px_75px_rgba(23,54,82,0.12)] sm:p-8 lg:p-9"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#4DA3FF]/10 blur-[75px]" />

              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#4DA3FF]">
                  Send An Enquiry
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#173652] sm:text-3xl">
                  Tell Us About Your Project
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Complete the form below. After submitting, your project
                  details will open directly in WhatsApp.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[#173652]"
                    >
                      Full Name
                    </label>

                    <div className="group relative">
                      <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#173652]/45 transition-colors duration-300 group-focus-within:text-[#4DA3FF]" />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-14 w-full rounded-2xl border border-[#173652]/10 bg-[#f8fbfe] pl-11 pr-4 text-sm text-[#173652] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-[#173652]/20 focus:border-[#4DA3FF]/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(77,163,255,0.1)]"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-[#173652]"
                    >
                      Phone Number
                    </label>

                    <div className="group relative">
                      <FaPhone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#173652]/45 transition-colors duration-300 group-focus-within:text-[#4DA3FF]" />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="h-14 w-full rounded-2xl border border-[#173652]/10 bg-[#f8fbfe] pl-11 pr-4 text-sm text-[#173652] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-[#173652]/20 focus:border-[#4DA3FF]/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(77,163,255,0.1)]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[#173652]"
                    >
                      Email Address
                    </label>

                    <div className="group relative">
                      <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#173652]/45 transition-colors duration-300 group-focus-within:text-[#4DA3FF]" />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="h-14 w-full rounded-2xl border border-[#173652]/10 bg-[#f8fbfe] pl-11 pr-4 text-sm text-[#173652] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-[#173652]/20 focus:border-[#4DA3FF]/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(77,163,255,0.1)]"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-bold text-[#173652]"
                    >
                      Service
                    </label>

                    <div className="group relative">
                      <FaBriefcase className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#173652]/45 transition-colors duration-300 group-focus-within:text-[#4DA3FF]" />

                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="h-14 w-full appearance-none rounded-2xl border border-[#173652]/10 bg-[#f8fbfe] pl-11 pr-11 text-sm text-[#173652] outline-none transition-all duration-300 hover:border-[#173652]/20 focus:border-[#4DA3FF]/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(77,163,255,0.1)]"
                      >
                        <option value="">Select a Service</option>

                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>

                      <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#173652]/50 transition-colors duration-300 group-focus-within:text-[#4DA3FF]" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-[#173652]"
                    >
                      Message
                    </label>

                    <div className="group relative">
                      <FaCommentDots className="pointer-events-none absolute left-4 top-5 text-sm text-[#173652]/45 transition-colors duration-300 group-focus-within:text-[#4DA3FF]" />

                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        className="w-full resize-none rounded-2xl border border-[#173652]/10 bg-[#f8fbfe] pl-11 pr-4 pt-4 text-sm text-[#173652] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-[#173652]/20 focus:border-[#4DA3FF]/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(77,163,255,0.1)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group relative mt-8 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#173652] px-8 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(23,54,82,0.25)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(77,163,255,0.28)] sm:w-auto"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <motion.span
                    className="relative"
                    whileHover={{
                      x: 3,
                      rotate: -8,
                    }}
                  >
                    <FaPaperPlane />
                  </motion.span>

                  <span className="relative">Send via WhatsApp</span>

                  <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.button>

                <p className="mt-4 text-sm text-slate-500">
                  We usually respond within a few hours during business hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#173652] px-6 py-10 text-center shadow-[0_30px_80px_rgba(23,54,82,0.25)] sm:px-10"
        >
          <motion.div
            animate={{
              x: [0, 25, 0],
              y: [0, 18, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#4DA3FF]/20 blur-[80px]"
          />

          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, -12, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-[90px]"
          />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7ebcff]">
              Start Your Next Project
            </p>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
              Let&apos;s Build Your Brand Together
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
              Every successful business starts with a conversation. Contact SM
              Tech Media today and let&apos;s create something powerful
              together.
            </p>

            <motion.a
              href="https://wa.me/919908540952"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#173652] shadow-xl transition-all duration-300 hover:bg-[#edf7ff]"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}