"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaHeadset,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: FaLightbulb,
    title: "Creative Solutions",
    description:
      "Unique and innovative ideas that help your brand stand out from the competition.",
  },
  {
    icon: FaRocket,
    title: "Fast Delivery",
    description:
      "We value your time and deliver projects quickly without compromising quality.",
  },
  {
    icon: FaUsers,
    title: "Experienced Team",
    description:
      "A skilled team of designers, developers and editors working together for your success.",
  },
  {
    icon: FaChartLine,
    title: "Growth Focused",
    description:
      "Every strategy is designed to increase your business growth and online presence.",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    description:
      "Friendly support and clear communication throughout every project.",
  },
  {
    icon: FaShieldAlt,
    title: "Trusted Partner",
    description:
      "Building long-term relationships through quality work and reliable service.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#173652 1px, transparent 1px),linear-gradient(90deg,#173652 1px,transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-44 top-10 h-[430px] w-[430px] rounded-full bg-[#4DA3FF]/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-52 bottom-0 h-[470px] w-[470px] rounded-full bg-[#173652]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4DA3FF]/20 bg-white px-4 py-2 shadow-sm">
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, .5, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-[#4DA3FF]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#173652]">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-[#173652] lg:text-5xl">
            Why Businesses
            <span className="bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#4DA3FF] bg-clip-text text-transparent">
              {" "}
              Trust SM Tech Media
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We combine creativity, strategy and technology to build digital
            experiences that not only look premium but also deliver measurable
            business growth.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            perspective: "1200px",
          }}
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  rotateX: -3,
                  rotateY: index % 2 === 0 ? 3 : -3,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-[30px] bg-gradient-to-br from-[#4DA3FF]/0 via-[#4DA3FF]/0 to-[#173652]/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-[#4DA3FF]/70 group-hover:to-[#173652]/30 group-hover:opacity-100" />

                <div className="relative flex h-full min-h-[310px] flex-col overflow-hidden rounded-[30px] border border-[#173652]/10 bg-white p-8 shadow-[0_16px_45px_rgba(23,54,82,.08)] transition-all duration-500 group-hover:border-[#4DA3FF]/40 group-hover:shadow-[0_32px_85px_rgba(23,54,82,.18)]">

                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [.08, .14, .08],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                    }}
                    className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#4DA3FF]"
                  />

                  <motion.div
                    whileHover={{
                      rotate: [0,-10,10,-5,0],
                      scale:1.08,
                    }}
                    transition={{
                      duration:.55
                    }}
                    className="relative mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#173652] to-[#1F4566] text-3xl text-white shadow-xl"
                  >
                    <Icon/>

                    <motion.span
                      animate={{
                        scale:[1,1.4,1],
                        opacity:[1,.5,1]
                      }}
                      transition={{
                        duration:2.5,
                        repeat:Infinity,
                        delay:index*.2
                      }}
                      className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#4DA3FF]"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-black text-[#173652]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <div className="h-1 w-12 overflow-hidden rounded-full bg-[#173652]/10 group-hover:w-20 transition-all">
                      <div className="h-full w-full bg-gradient-to-r from-[#173652] to-[#4DA3FF]" />
                    </div>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173652]/5 font-bold text-[#173652] transition-all group-hover:bg-[#4DA3FF] group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <span className="absolute bottom-5 right-6 text-xs font-black tracking-[0.2em] text-[#173652]/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#173652] px-8 py-10 shadow-[0_30px_80px_rgba(23,54,82,0.25)] lg:flex lg:items-center lg:justify-between"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#4DA3FF]/20 blur-[80px]" />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7EBEFF]">
              Ready To Grow?
            </p>

            <h3 className="mt-3 text-3xl font-black text-white">
              Let's Build Your Digital Success Together
            </h3>

            <p className="mt-4 max-w-2xl text-white/70 leading-7">
              Whether you're a business, startup, hospital, educational
              institution or political leader, we create premium digital
              experiences that help you reach more people and achieve better
              results.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="relative mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-[#173652] shadow-xl transition-all hover:bg-[#EDF7FF] lg:mt-0"
          >
            Start Your Project
            <span className="text-lg">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}