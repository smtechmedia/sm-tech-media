"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experience = [
  {
    year: "Education",
    title: "B.Sc. Computers",
    company: "Academic Foundation",
    description:
      "Built a strong foundation in computers, digital technology and creative problem-solving.",
  },
  {
    year: "Diploma",
    title: "Multimedia",
    company: "Prakara Institute, Hyderabad",
    description:
      "Developed professional skills in graphic designing, video editing and multimedia production.",
  },
  {
    year: "Experience",
    title: "Media Professional",
    company: "V6 News Channel",
    description:
      "Gained practical experience in professional media production, editing workflows and visual communication.",
  },
  {
    year: "Experience",
    title: "Creative Media Professional",
    company: "Fact In Media",
    description:
      "Worked on digital media content, visual design and audience-focused creative production.",
  },
  {
    year: "Present",
    title: "Creative Professional",
    company: "Bhanu Tech Solutions",
    description:
      "Currently working on design, video editing, website development and digital media projects.",
  },
  {
    year: "Founder",
    title: "Founder – SM Tech Media",
    company: "Digital Creative Agency",
    description:
      "Helping businesses, institutions, political leaders and organizations grow through creative digital solutions.",
  },
];

const skills = [
  "Graphic Designing",
  "Video Editing",
  "Website Development",
  "Social Media Management",
  "YouTube SEO",
  "Digital Marketing",
  "Political Campaign Designs",
  "Creative Brand Strategy",
];

const highlights = [
  {
    value: "100+",
    label: "Creative Works",
  },
  {
    value: "10+",
    label: "Happy Clients",
  },
  {
    value: "5+",
    label: "Industries Served",
  },
  {
    value: "24/7",
    label: "Client Support",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#0c2235] via-[#173652] to-[#1F4566] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Background Glows */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-44 top-20 h-[420px] w-[420px] rounded-full bg-[#4DA3FF]/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, -18, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-44 bottom-20 h-[460px] w-[460px] rounded-full bg-white/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#4DA3FF]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
              About SM Tech Media
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Creative Experience.
            <span className="block bg-gradient-to-r from-white via-[#9fd0ff] to-[#4DA3FF] bg-clip-text text-transparent">
              Professional Digital Solutions.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base sm:leading-8">
            SM Tech Media combines professional media experience, creative
            design skills and modern digital technology to deliver reliable
            solutions for brands, businesses and organizations.
          </p>
        </motion.div>

        {/* Founder Introduction */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Logo Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#4DA3FF]/30 via-transparent to-white/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/10 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-7">
              <div className="relative overflow-hidden rounded-[26px] bg-white p-8 sm:p-10">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#4DA3FF]/10 blur-3xl" />

                <div className="relative mx-auto aspect-square w-full max-w-[320px]">
                  <Image
                    src="/logo.png"
                    alt="SM Tech Media Logo"
                    fill
                    sizes="320px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-xl font-black text-white sm:text-2xl">
                  Sunil Marapatla
                </p>

                <p className="mt-1 text-sm font-bold text-[#7ebcff]">
                  Founder – SM Tech Media
                </p>

                <p className="mt-3 text-sm leading-6 text-blue-100/70">
                  Video Editor, Graphic Designer, Web Developer and Digital
                  Media Professional.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Introduction Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#4DA3FF]">
              Founder Profile
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
              Turning Creative Ideas Into
              <span className="block text-[#7ebcff]">
                Meaningful Digital Experiences
              </span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-blue-100/80 sm:text-base sm:leading-8">
              I completed my B.Sc. in Computers and a Diploma in Multimedia
              from Prakara Institute, Hyderabad. My professional journey
              includes working with V6 News Channel and Fact In Media. I am
              currently working with Bhanu Tech Solutions while building SM
              Tech Media as a trusted digital creative agency.
            </p>

            <p className="mt-4 text-sm leading-7 text-blue-100/80 sm:text-base sm:leading-8">
              Through SM Tech Media, we provide website development, graphic
              designing, video editing, social media management, YouTube SEO,
              digital marketing and political campaign services.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-md transition-colors duration-300 hover:bg-white/15"
                >
                  <p className="text-2xl font-black text-white sm:text-3xl">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-blue-100/65">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="text-center"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#4DA3FF]">
              Professional Journey
            </p>

            <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Education & Experience
            </h3>
          </motion.div>

          <div className="relative mt-12">
            <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-[#4DA3FF] via-white/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-7">
              {experience.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.title}`}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  className={`relative flex items-start gap-5 md:w-full ${
  index % 2 === 0
    ? "md:justify-start md:pr-[calc(50%+48px)] md:text-right"
    : "md:justify-end md:pl-[calc(50%+48px)]"
}`}
                >
                  <div
  className="absolute left-0 top-7 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#173652] bg-[#4DA3FF] text-xs font-black text-white shadow-[0_0_30px_rgba(77,163,255,0.5)] md:left-1/2 md:-translate-x-1/2"
>
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="ml-14 w-full rounded-[24px] border border-white/10 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4DA3FF]/35 hover:bg-white/[0.13] md:ml-0 sm:p-6">
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        index % 2 === 0
                          ? "md:justify-end"
                          : "md:justify-start"
                      }`}
                    >
                      <span className="rounded-full bg-[#4DA3FF]/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#7ebcff]">
                        {item.year}
                      </span>
                    </div>

                    <h4 className="mt-4 text-xl font-black text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm font-bold text-[#7ebcff]">
                      {item.company}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-blue-100/70">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#4DA3FF]">
                Core Skills
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Creative, Technical &
                <span className="block text-[#7ebcff]">Digital Expertise</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-blue-100/70 sm:text-base">
                A combination of professional media experience, design skills
                and digital technology helps us deliver complete solutions
                under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-colors duration-300 hover:border-[#4DA3FF]/40 hover:bg-white/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4DA3FF] text-sm font-black text-white">
                    ✓
                  </span>

                  <span className="text-sm font-bold text-white">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission and Vision */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            whileHover={{ y: -5 }}
            className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-7 backdrop-blur-xl sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4DA3FF] text-2xl text-white">
              ◎
            </div>

            <h3 className="mt-5 text-2xl font-black text-white">
              Our Mission
            </h3>

            <p className="mt-3 text-sm leading-7 text-blue-100/70 sm:text-base">
              To deliver creative, affordable and reliable digital solutions
              that help clients build strong brands, connect with their
              audience and achieve measurable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            whileHover={{ y: -5 }}
            className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-7 backdrop-blur-xl sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl text-[#173652]">
              ◉
            </div>

            <h3 className="mt-5 text-2xl font-black text-white">
              Our Vision
            </h3>

            <p className="mt-3 text-sm leading-7 text-blue-100/70 sm:text-base">
              To establish SM Tech Media as a trusted creative and digital
              agency known for quality, innovation, professionalism and
              long-term client relationships.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}