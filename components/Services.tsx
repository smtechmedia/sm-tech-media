"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaBullhorn,
  FaPaintBrush,
  FaVideo,
  FaSearch,
  FaVoteYea,
} from "react-icons/fa";

const services = [
  {
    icon: FaGlobe,
    title: "Website Development",
    description:
      "Modern, responsive and SEO-friendly websites designed to grow your business.",
  },
  {
    icon: FaBullhorn,
    title: "Social Media Management",
    description:
      "Complete management of Facebook, Instagram and YouTube with engaging content.",
  },
  {
    icon: FaPaintBrush,
    title: "Graphic Designing",
    description:
      "Creative posters, branding, banners, flyers and professional marketing designs.",
  },
  {
    icon: FaVideo,
    title: "Video Editing",
    description:
      "Professional editing for business promotions, YouTube, weddings and events.",
  },
  {
    icon: FaSearch,
    title: "YouTube SEO",
    description:
      "Increase your reach with optimized titles, descriptions, tags and thumbnails.",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    description:
      "Result-driven Meta Ads, Google Ads and complete digital marketing solutions.",
  },
  {
    icon: FaVoteYea,
    title: "Political Campaigns",
    description:
      "Social media management, creative designing and campaign strategy for political leaders.",
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
    y: 48,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: "easeOut" as const,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f7fbff] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#173652 1px, transparent 1px), linear-gradient(90deg, #173652 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Floating Background Glows */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-16 h-[430px] w-[430px] rounded-full bg-[#4DA3FF]/10 blur-[120px]"
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
        className="pointer-events-none absolute -right-48 bottom-0 h-[470px] w-[470px] rounded-full bg-[#173652]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-6">
        {/* Heading */}
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
            ease: "easeOut",
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4DA3FF]/20 bg-white px-4 py-2 shadow-sm">
            <motion.span
              animate={{
                scale: [1, 1.45, 1],
                opacity: [1, 0.55, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-[#4DA3FF]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#173652] sm:text-sm">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-[#173652] sm:text-4xl lg:text-5xl">
            Complete Digital
            <span className="ml-2 bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#4DA3FF] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            We provide complete digital solutions to help your business grow
            online with creativity, strategy and technology.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.16,
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            perspective: "1200px",
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateX: -3,
                  rotateY: index % 2 === 0 ? 3 : -3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className={`group relative h-full ${
                  index === services.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                {/* Glow Border */}
                <div className="absolute -inset-px rounded-[31px] bg-gradient-to-br from-[#4DA3FF]/0 via-[#4DA3FF]/0 to-[#173652]/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-[#4DA3FF]/70 group-hover:via-[#4DA3FF]/25 group-hover:to-[#173652]/25 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[30px] border border-[#173652]/10 bg-white p-7 shadow-[0_16px_45px_rgba(23,54,82,0.08)] transition-all duration-500 group-hover:border-[#4DA3FF]/40 group-hover:shadow-[0_32px_85px_rgba(23,54,82,0.2)] sm:p-8">
                  {/* Decorative Shape */}
                  <motion.div
                    animate={{
                      scale: [1, 1.14, 1],
                      opacity: [0.07, 0.14, 0.07],
                    }}
                    transition={{
                      duration: 5 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#4DA3FF]"
                  />

                  <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#173652]/5 blur-3xl" />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4DA3FF]/0 via-transparent to-[#173652]/0 opacity-0 transition-all duration-500 group-hover:from-[#4DA3FF]/5 group-hover:to-[#173652]/5 group-hover:opacity-100" />

                  {/* Icon */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.55,
                      rotate: -12,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12 + index * 0.08,
                      type: "spring",
                      stiffness: 180,
                      damping: 12,
                    }}
                    className="relative mb-7"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1, 1.08, 1],
                      }}
                      transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        delay: index * 0.4,
                        times: [0, 0.78, 0.9, 1],
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        whileHover={{
                          rotate: [0, -10, 10, -5, 0],
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.55,
                        }}
                        className="relative flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#173652] to-[#1F4566] text-3xl text-white shadow-[0_16px_35px_rgba(23,54,82,0.3)] transition-all duration-300 group-hover:from-[#4DA3FF] group-hover:to-[#173652]"
                      >
                        <Icon />

                        <motion.span
                          animate={{
                            scale: [1, 1.35, 1],
                            opacity: [1, 0.6, 1],
                          }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                          className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#4DA3FF]"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 14,
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
                      delay: 0.22 + index * 0.08,
                    }}
                    className="relative text-xl font-black leading-tight text-[#173652] sm:text-2xl"
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 12,
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
                      delay: 0.3 + index * 0.08,
                    }}
                    className="relative mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base"
                  >
                    {service.description}
                  </motion.p>

                  {/* Bottom Action */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
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
                      delay: 0.38 + index * 0.08,
                    }}
                    className="relative mt-7 flex items-center justify-between"
                  >
                    <div className="h-1 w-12 overflow-hidden rounded-full bg-[#173652]/10 transition-all duration-500 group-hover:w-20">
                      <motion.div
                        initial={{
                          x: "-100%",
                        }}
                        whileInView={{
                          x: "0%",
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.45 + index * 0.07,
                        }}
                        className="h-full w-full rounded-full bg-gradient-to-r from-[#173652] to-[#4DA3FF]"
                      />
                    </div>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173652]/5 text-base font-black text-[#173652] transition-all duration-300 group-hover:bg-[#4DA3FF] group-hover:text-white">
                      ↗
                    </span>
                  </motion.div>

                  {/* Card Number */}
                  <span className="absolute bottom-5 right-6 text-xs font-black tracking-[0.18em] text-[#173652]/10 transition-all duration-300 group-hover:text-[#4DA3FF]/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
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
          className="relative mt-14 overflow-hidden rounded-[30px] bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#173652] px-6 py-9 shadow-[0_30px_80px_rgba(23,54,82,0.25)] sm:px-9 lg:flex lg:items-center lg:justify-between lg:gap-10"
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#4DA3FF]/25 blur-[70px]" />

          <div className="relative text-center lg:text-left">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7ebcff]">
              Need a Custom Solution?
            </p>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Let&apos;s Build Something Powerful
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Tell us your business goal and we will create the right digital
              solution for your brand.
            </p>
          </div>

          <a
            href="#contact"
            className="relative mx-auto mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#173652] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#edf7ff] sm:w-auto lg:mx-0 lg:mt-0"
          >
            Get Started
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}