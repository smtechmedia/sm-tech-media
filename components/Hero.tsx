"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaCode,
  FaFacebookF,
  FaInstagram,
  FaPalette,
  FaPlay,
  FaVideo,
} from "react-icons/fa";

const skills = [
  "Graphic Designing",
  "Video Editing",
  "Website Development",
  "Digital Marketing",
];

const floatingCards = [
  {
    title: "Graphic Designer",
    subtitle: "Creative Visuals",
    icon: FaPalette,
    position: "top-[10%] -left-32 2xl:-left-40",
    delay: 0,
  },
  {
    title: "Video Editor",
    subtitle: "Professional Editing",
    icon: FaVideo,
    position: "top-[43%] -right-32 2xl:-right-40",
    delay: 0.4,
  },
  {
    title: "Web Developer",
    subtitle: "Modern Websites",
    icon: FaCode,
    position: "bottom-[2%] -left-28 2xl:-left-36",
    delay: 0.8,
  },
];

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setIsReady(true);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 lg:min-h-screen lg:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#173652 1px, transparent 1px), linear-gradient(90deg, #173652 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <motion.div
        initial={false}
        animate={{ x: [0, 35, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-24 h-[430px] w-[430px] rounded-full bg-[#4DA3FF]/10 blur-[110px]"
      />

      <motion.div
        initial={false}
        animate={{ x: [0, -25, 0], y: [0, -30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#173652]/10 blur-[130px]"
      />

      <motion.div
        initial={false}
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-20 w-20 rounded-3xl border border-[#4DA3FF]/20 lg:block"
      />

      <div
        key={isDesktop ? "desktop-hero" : "mobile-hero"}
        className={`relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:min-h-[calc(100vh-112px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-10 lg:py-16 xl:px-6 ${
          isReady ? "visible" : "lg:invisible"
        }`}
      >
        <motion.div
          initial={isDesktop ? { opacity: 0, x: -45 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative z-20 text-center lg:text-left"
        >
          <motion.div
            initial={isDesktop ? { opacity: 0, y: 18 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#4DA3FF]/20 bg-[#4DA3FF]/5 px-4 py-2 shadow-sm sm:mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4DA3FF] opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4DA3FF]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#173652] sm:text-sm sm:tracking-[0.16em]">
              Founder of SM Tech Media
            </span>
          </motion.div>

          <motion.p
            initial={isDesktop ? { opacity: 0, y: 18 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
            className="mb-2 text-lg font-semibold text-[#4DA3FF] sm:mb-3 sm:text-xl"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={isDesktop ? { opacity: 0, y: 22 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: "easeOut" }}
            className="text-[43px] font-black leading-[1.02] tracking-[-0.045em] text-[#173652] sm:text-6xl lg:text-[64px] xl:text-[76px]"
          >
            Sunil
            <span className="block bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#4DA3FF] bg-clip-text text-transparent">
              Marapatla
            </span>
          </motion.h1>

          <motion.div
            initial={isDesktop ? { opacity: 0, y: 22 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-bold text-[#1F4566] sm:mt-6 sm:text-base lg:justify-start"
          >
            <span>Creative Designer</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />
            <span>Video Editor</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />
            <span>Web Developer</span>
          </motion.div>

          <motion.p
            initial={isDesktop ? { opacity: 0, y: 22 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mt-7 sm:text-[17px] sm:leading-8 lg:mx-0"
          >
            I&apos;m the Founder of{" "}
            <span className="font-bold text-[#173652]">SM Tech Media</span>,
            creating impactful digital experiences through Graphic Design,
            Video Editing, Website Development, Branding, and Digital
            Marketing.
          </motion.p>

          <motion.div
            initial={isDesktop ? { opacity: 0, y: 22 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="mx-auto mt-6 grid max-w-md grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 lg:mx-0"
          >
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center gap-2.5 text-sm font-semibold text-[#1F4566] lg:justify-start"
              >
                <FaCheckCircle className="shrink-0 text-[#4DA3FF]" />
                <span>{skill}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={isDesktop ? { opacity: 0, y: 22 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-9 sm:flex-row lg:justify-start"
          >
            <Link
              href="#portfolio"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#173652] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(23,54,82,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1F4566] sm:w-auto"
            >
              View Portfolio
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[#173652]/15 bg-white px-7 py-4 text-sm font-bold text-[#173652] shadow-[0_12px_35px_rgba(23,54,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#4DA3FF]/40 hover:bg-[#4DA3FF]/5 sm:w-auto"
            >
              <FaPlay className="text-xs text-[#4DA3FF]" />
              Let&apos;s Talk
            </Link>
          </motion.div>

          <motion.div
            initial={isDesktop ? { opacity: 0, y: 22 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.66, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-slate-200 pt-6 sm:mt-9 sm:gap-5 lg:justify-start"
          >
            <div className="min-w-[75px] text-center lg:text-left">
              <p className="text-2xl font-black text-[#173652]">100+</p>
              <p className="text-xs font-semibold text-slate-500">Creative Works</p>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div className="min-w-[75px] text-center lg:text-left">
              <p className="text-2xl font-black text-[#173652]">10+</p>
              <p className="text-xs font-semibold text-slate-500">Happy Clients</p>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div className="min-w-[75px] text-center lg:text-left">
              <p className="text-2xl font-black text-[#173652]">24/7</p>
              <p className="text-xs font-semibold text-slate-500">Client Support</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={isDesktop ? { opacity: 0, x: 45, scale: 0.96 } : false}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-[620px] items-center justify-center pb-10 lg:pb-0"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DA3FF]/20 blur-[80px]" />

          <motion.div
            initial={false}
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute h-[94%] w-[94%] rounded-full border border-dashed border-[#4DA3FF]/20"
          />

          <div className="relative z-10 w-full max-w-[420px] sm:max-w-[470px] lg:max-w-[500px] xl:max-w-[535px]">
            <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-br from-[#4DA3FF]/25 via-transparent to-[#173652]/20 blur-sm" />

            <div className="relative overflow-hidden rounded-[28px] border-[5px] border-white bg-gradient-to-b from-[#eaf5ff] to-[#dceeff] shadow-[0_35px_90px_rgba(23,54,82,0.24)] sm:rounded-[32px] sm:border-[6px]">
              <div className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-3 py-2 shadow-lg backdrop-blur-md sm:left-5 sm:top-5 sm:px-4">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-[10px] font-bold text-[#173652] sm:text-xs">
                  Available for Projects
                </span>
              </div>

              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/profile.png"
                  alt="Sunil Marapatla - Founder of SM Tech Media"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 470px, 535px"
                  className="object-cover object-top"
                />
              </div>

              <div className="absolute bottom-3 left-3 right-3 z-20 rounded-2xl border border-white/50 bg-white/85 p-3 shadow-xl backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black text-[#173652] sm:text-lg">
                      Sunil Marapatla
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold text-slate-500 sm:text-sm">
                      Founder & Creative Professional
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href="https://www.facebook.com/SMTechMediaOfficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#173652] text-xs text-white transition-transform duration-300 hover:-translate-y-1 sm:h-9 sm:w-9"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://www.instagram.com/sm_tech_media"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4DA3FF] text-sm text-white transition-transform duration-300 hover:-translate-y-1 sm:h-9 sm:w-9"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={false}
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-7 left-1/2 z-30 hidden w-max max-w-[90%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-[0_18px_45px_rgba(23,54,82,0.18)] backdrop-blur-xl md:flex md:-bottom-9 md:left-auto md:right-4 md:translate-x-0 md:px-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4DA3FF]/10 text-[#4DA3FF] sm:h-11 sm:w-11">
                <FaBriefcase />
              </div>
              <div>
                <p className="text-xs font-black text-[#173652] sm:text-sm">Media Experience</p>
                <p className="whitespace-nowrap text-[10px] font-semibold text-slate-500 sm:text-xs">
                  V6 News • Fact In Media
                </p>
              </div>
            </motion.div>
          </div>

          {floatingCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={isDesktop ? { opacity: 0, scale: 0.85 } : false}
                animate={{ opacity: 1, scale: 1, y: [0, -9, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 + card.delay },
                  scale: { duration: 0.6, delay: 0.8 + card.delay },
                  y: {
                    duration: 4.5,
                    delay: card.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`absolute hidden ${card.position} z-30 items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_18px_45px_rgba(23,54,82,0.16)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 xl:flex`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4DA3FF]/10 text-[#4DA3FF]">
                  <Icon />
                </div>
                <div>
                  <p className="whitespace-nowrap text-sm font-black text-[#173652]">{card.title}</p>
                  <p className="whitespace-nowrap text-xs font-semibold text-slate-500">{card.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}