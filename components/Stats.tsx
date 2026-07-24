"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaPalette,
  FaUsers,
  FaBuilding,
  FaHeadset,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaPalette />,
    number: 100,
    suffix: "+",
    title: "Creative Works",
    description: "Posters, Videos & Websites",
  },
  {
    icon: <FaUsers />,
    number: 10,
    suffix: "+",
    title: "Happy Clients",
    description: "Businesses & Organizations",
  },
  {
    icon: <FaBuilding />,
    number: 5,
    suffix: "+",
    title: "Industries Served",
    description: "Healthcare • Education • Politics",
  },
  {
    icon: <FaHeadset />,
    custom: "24/7",
    title: "Support",
    description: "Always Available for Clients",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.92,
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

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
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
          y: [0, 22, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-10 h-[420px] w-[420px] rounded-full bg-[#4DA3FF]/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#173652]/10 blur-[130px]"
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4DA3FF]/20 bg-[#f7fbff] px-4 py-2 shadow-sm">
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
              Our Achievements
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-[#173652] sm:text-4xl lg:text-5xl">
            Numbers That
            <span className="ml-2 bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#4DA3FF] bg-clip-text text-transparent">
              Speak
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            We deliver creative solutions that help businesses,
            organizations and leaders build a stronger digital presence.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            perspective: "1200px",
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -14,
                scale: 1.025,
                rotateX: -4,
                rotateY: index % 2 === 0 ? 4 : -4,
              }}
              transition={{
                type: "spring",
                stiffness: 230,
                damping: 18,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="group relative h-full"
            >
              {/* Animated Glow Border */}
              <div className="absolute -inset-px rounded-[31px] bg-gradient-to-br from-[#4DA3FF]/0 via-[#4DA3FF]/0 to-[#173652]/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-[#4DA3FF]/70 group-hover:via-[#4DA3FF]/25 group-hover:to-[#173652]/25 group-hover:opacity-100" />

              {/* Card */}
              <div className="relative flex h-full min-h-[310px] flex-col items-center justify-center overflow-hidden rounded-[30px] border border-[#173652]/10 bg-white px-7 py-10 text-center shadow-[0_16px_45px_rgba(23,54,82,0.08)] transition-all duration-500 group-hover:border-[#4DA3FF]/40 group-hover:shadow-[0_32px_85px_rgba(23,54,82,0.2)] sm:min-h-[330px] sm:px-8 sm:py-11">
                {/* Top Decorative Circle */}
                <motion.div
                  animate={{
                    scale: [1, 1.13, 1],
                    opacity: [0.07, 0.14, 0.07],
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#4DA3FF]"
                />

                {/* Bottom Decorative Glow */}
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#173652]/5 blur-3xl" />

                {/* Hover Light */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4DA3FF]/0 via-transparent to-[#173652]/0 opacity-0 transition-all duration-500 group-hover:from-[#4DA3FF]/5 group-hover:to-[#173652]/5 group-hover:opacity-100" />

                {/* Icon Entrance */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.55,
                    rotate: -15,
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
                    delay: 0.12 + index * 0.1,
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                  }}
                  className="relative mb-7"
                >
                  {/* Automatic Pulse */}
                  <motion.div
                    animate={{
                      scale: [1, 1, 1.08, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.5,
                      times: [0, 0.78, 0.9, 1],
                      ease: "easeInOut",
                    }}
                  >
                    {/* Hover Rotation */}
                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, -5, 0],
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.55,
                      }}
                      className="relative flex h-17 w-17 items-center justify-center rounded-2xl bg-gradient-to-br from-[#173652] to-[#1F4566] text-2xl text-white shadow-[0_16px_35px_rgba(23,54,82,0.3)] transition-all duration-300 group-hover:from-[#4DA3FF] group-hover:to-[#173652] sm:h-[70px] sm:w-[70px]"
                    >
                      {item.icon}

                      <motion.span
                        animate={{
                          scale: [1, 1.35, 1],
                          opacity: [1, 0.6, 1],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: index * 0.25,
                        }}
                        className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#4DA3FF]"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Number */}
                <motion.h3
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.22 + index * 0.1,
                    type: "spring",
                    stiffness: 140,
                  }}
                  className="relative text-4xl font-black tracking-tight text-[#4DA3FF] sm:text-5xl"
                >
                  {item.custom ? (
                    item.custom
                  ) : (
                    <>
                      <CountUp
                        end={item.number!}
                        duration={2.4}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      {item.suffix}
                    </>
                  )}
                </motion.h3>

                {/* Title */}
                <motion.h4
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
                    delay: 0.3 + index * 0.1,
                  }}
                  className="relative mt-4 text-lg font-black text-[#173652] sm:text-xl"
                >
                  {item.title}
                </motion.h4>

                {/* Description */}
                <motion.p
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
                    delay: 0.38 + index * 0.1,
                  }}
                  className="relative mt-3 min-h-[48px] text-sm leading-6 text-slate-600"
                >
                  {item.description}
                </motion.p>

                {/* Bottom Animated Line */}
                <div className="relative mx-auto mt-6 h-1 w-12 overflow-hidden rounded-full bg-[#173652]/10 transition-all duration-500 group-hover:w-20">
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
                      duration: 0.85,
                      delay: 0.4 + index * 0.1,
                    }}
                    className="h-full w-full rounded-full bg-gradient-to-r from-[#173652] to-[#4DA3FF]"
                  />
                </div>

                {/* Card Number */}
                <span className="absolute bottom-5 right-6 text-xs font-black tracking-[0.18em] text-[#173652]/10 transition-all duration-300 group-hover:text-[#4DA3FF]/25">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Note */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            delay: 0.2,
          }}
          whileHover={{
            y: -4,
          }}
          className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-[#173652]/10 bg-[#f7fbff] px-5 py-4 text-center shadow-[0_10px_30px_rgba(23,54,82,0.07)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(23,54,82,0.12)]"
        >
          <motion.span
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4DA3FF] text-sm font-black text-white shadow-[0_8px_20px_rgba(77,163,255,0.35)]"
          >
            ✓
          </motion.span>

          <p className="text-sm font-bold leading-6 text-[#173652]">
            Every number represents the trust of our clients and the quality
            of our work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}