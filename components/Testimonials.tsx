"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Pandu Prem Kumar Foundation",
    role: "Website Development",
    review:
      "SM Tech Media delivered a professional website with modern design, fast performance and excellent support.",
  },
  {
    id: 2,
    name: "Political Campaign Client",
    role: "Social Media Creatives",
    review:
      "Creative political posters, timely delivery and professional support throughout the campaign.",
  },
  {
    id: 3,
    name: "YouTube Creator",
    role: "Video Editing",
    review:
      "High-quality video editing and attractive thumbnails that improved our content presentation.",
  },
  {
    id: 4,
    name: "Business Client",
    role: "Digital Branding",
    review:
      "Professional branding, creative designs and responsive service. We are very satisfied with the work.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#173652 1px, transparent 1px), linear-gradient(90deg, #173652 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="pointer-events-none absolute -left-44 top-20 h-[420px] w-[420px] rounded-full bg-[#4DA3FF]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-44 bottom-10 h-[420px] w-[420px] rounded-full bg-[#173652]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4DA3FF]/20 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#4DA3FF]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#173652]">
              Testimonials
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-[#173652] sm:text-4xl lg:text-5xl">
            What Our Clients
            <span className="block bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#4DA3FF] bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            We build long-term relationships by delivering creative designs,
            professional websites, video editing and digital marketing
            services.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              className="group rounded-[26px] border border-[#173652]/10 bg-white p-7 shadow-[0_15px_45px_rgba(23,54,82,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#4DA3FF]/30 hover:shadow-[0_28px_65px_rgba(23,54,82,0.16)]"
            >
              <div
                className="text-lg tracking-[0.15em] text-amber-400"
                aria-label="5 star rating"
              >
                ★★★★★
              </div>

              <div className="mt-5 text-5xl font-black leading-none text-[#4DA3FF]/20">
                “
              </div>

              <p className="-mt-3 text-sm leading-7 text-slate-600">
                {item.review}
              </p>

              <div className="mt-7 border-t border-[#173652]/10 pt-5">
                <h3 className="text-sm font-black leading-6 text-[#173652]">
                  {item.name}
                </h3>

                <p className="mt-1 text-xs font-bold text-[#4DA3FF]">
                  {item.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}