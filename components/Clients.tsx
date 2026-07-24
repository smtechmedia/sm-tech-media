"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Client = {
  id: number;
  name: string;
  logo: string;
  category: string;
};

const clients: Client[] = [
  {
    id: 1,
    name: "Our Valued Client",
    logo: "/clients/client-1.png",
    category: "Trusted Partner",
  },
  {
    id: 2,
    name: "Our Valued Client",
    logo: "/clients/client-2.png",
    category: "Trusted Partner",
  },
  {
    id: 3,
    name: "Our Valued Client",
    logo: "/clients/client-3.png",
    category: "Trusted Partner",
  },
  {
    id: 4,
    name: "Our Valued Client",
    logo: "/clients/client-4.png",
    category: "Trusted Partner",
  },
  {
    id: 5,
    name: "Our Valued Client",
    logo: "/clients/client-5.png",
    category: "Trusted Partner",
  },
  {
    id: 6,
    name: "Our Valued Client",
    logo: "/clients/client-6.png",
    category: "Trusted Partner",
  },
  {
    id: 7,
    name: "Our Valued Client",
    logo: "/clients/client-7.png",
    category: "Trusted Partner",
  },
  {
    id: 8,
    name: "Our Valued Client",
    logo: "/clients/client-8.png",
    category: "Trusted Partner",
  },
];

const topRowClients = [...clients, ...clients];

const bottomRowClients = [
  ...clients.slice().reverse(),
  ...clients.slice().reverse(),
];

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="group relative w-[210px] shrink-0 sm:w-[240px] lg:w-[260px]">
      <div className="absolute -inset-px rounded-[26px] bg-gradient-to-br from-[#4DA3FF]/0 via-[#4DA3FF]/0 to-[#4DA3FF]/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-[#4DA3FF]/60 group-hover:via-[#4DA3FF]/20 group-hover:to-white/20 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[25px] border border-[#173652]/10 bg-white p-4 shadow-[0_15px_45px_rgba(23,54,82,0.08)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#4DA3FF]/35 group-hover:shadow-[0_28px_70px_rgba(23,54,82,0.18)] sm:p-5">
        <div className="relative flex h-[145px] items-center justify-center overflow-hidden rounded-[19px] bg-gradient-to-br from-[#f8fbff] to-[#edf6ff] p-5 sm:h-[160px]">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#4DA3FF]/10 blur-3xl transition-all duration-500 group-hover:bg-[#4DA3FF]/20" />

          <div className="absolute -bottom-14 -left-14 h-32 w-32 rounded-full bg-[#173652]/10 blur-3xl" />

          <Image
            src={client.logo}
            alt={client.name}
            width={220}
            height={140}
            sizes="260px"
            className="relative z-10 max-h-[115px] w-auto max-w-full object-contain transition-all duration-500 group-hover:scale-110"
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-black text-[#173652]">
              {client.name}
            </p>

            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              {client.category}
            </p>
          </div>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#173652]/5 text-sm font-black text-[#173652] transition-all duration-300 group-hover:bg-[#4DA3FF] group-hover:text-white">
            ✓
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="clients"
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

      {/* Decorative Glows */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, 18, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-20 h-[430px] w-[430px] rounded-full bg-[#4DA3FF]/12 blur-[120px]"
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
        className="pointer-events-none absolute -right-48 bottom-10 h-[470px] w-[470px] rounded-full bg-[#173652]/10 blur-[130px]"
      />

      <div className="relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-6">
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
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4DA3FF]/20 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#4DA3FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#173652] sm:text-sm">
                Our Trusted Clients
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-[#173652] sm:text-4xl lg:text-5xl">
              Trusted By Brands,
              <span className="block bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#4DA3FF] bg-clip-text text-transparent">
                Leaders & Organizations
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              We are proud to work with businesses, educational institutions,
              healthcare organizations, political leaders and growing brands.
            </p>
          </motion.div>

          {/* Client Stats */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
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
              duration: 0.65,
              delay: 0.1,
            }}
            className="mx-auto mt-9 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-[#173652]/10 bg-white p-5 text-center shadow-[0_12px_35px_rgba(23,54,82,0.07)]">
              <p className="text-3xl font-black text-[#173652]">10+</p>

              <p className="mt-1 text-xs font-bold text-slate-500">
                Happy Clients
              </p>
            </div>

            <div className="rounded-2xl border border-[#173652]/10 bg-white p-5 text-center shadow-[0_12px_35px_rgba(23,54,82,0.07)]">
              <p className="text-3xl font-black text-[#4DA3FF]">5+</p>

              <p className="mt-1 text-xs font-bold text-slate-500">
                Industries Served
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-[#173652]/10 bg-white p-5 text-center shadow-[0_12px_35px_rgba(23,54,82,0.07)] sm:col-span-1">
              <p className="text-3xl font-black text-[#173652]">100%</p>

              <p className="mt-1 text-xs font-bold text-slate-500">
                Quality Focus
              </p>
            </div>
          </motion.div>
        </div>

        {/* Logos Marquee */}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="relative mt-14"
        >
          {/* Side Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#f7fbff] to-transparent sm:w-28 lg:w-44" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#f7fbff] to-transparent sm:w-28 lg:w-44" />

          {/* First Row */}
          <div className="marquee-wrapper overflow-hidden py-3">
            <div className="marquee-left flex w-max gap-5 px-3">
              {topRowClients.map((client, index) => (
                <ClientCard
                  key={`top-${client.id}-${index}`}
                  client={client}
                />
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="marquee-wrapper mt-3 overflow-hidden py-3">
            <div className="marquee-right flex w-max gap-5 px-3">
              {bottomRowClients.map((client, index) => (
                <ClientCard
                  key={`bottom-${client.id}-${index}`}
                  client={client}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-6">
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
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#173652] px-6 py-10 shadow-[0_30px_80px_rgba(23,54,82,0.25)] sm:px-9 lg:flex lg:items-center lg:justify-between lg:gap-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#4DA3FF]/25 blur-[75px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-white/10 blur-[70px]" />

            <div className="relative text-center lg:text-left">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7ebcff]">
                Grow With SM Tech Media
              </p>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Become Our Next Success Story
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Let us create professional designs, videos, websites and
                digital campaigns that help your brand grow.
              </p>
            </div>

            <a
              href="#contact"
              className="relative mx-auto mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#173652] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#edf7ff] sm:w-auto lg:mx-0 lg:mt-0"
            >
              Work With Us
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .marquee-left {
          animation: marqueeLeft 35s linear infinite;
        }

        .marquee-right {
          animation: marqueeRight 35s linear infinite;
        }

        .marquee-wrapper:hover .marquee-left,
        .marquee-wrapper:hover .marquee-right {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 640px) {
          .marquee-left,
          .marquee-right {
            animation-duration: 25s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-left,
          .marquee-right {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}