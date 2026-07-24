"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Category =
  | "Corporate"
  | "Political"
  | "Festival"
  | "Thumbnails"
  | "Websites"
  | "Videos";

type PortfolioItem = {
  id: number;
  title: string;
  category: Category;
  image: string;
};

const corporateWorks: PortfolioItem[] = Array.from(
  { length: 6 },
  (_, index) => ({
    id: index + 1,
    title: `Corporate Creative ${String(index + 1).padStart(2, "0")}`,
    category: "Corporate",
    image: `/portfolio/corporate/corporate-${String(index + 1).padStart(
      2,
      "0"
    )}.jpg`,
  })
);

const politicalWorks: PortfolioItem[] = Array.from(
  { length: 14 },
  (_, index) => ({
    id: 100 + index,
    title: `Political Creative ${String(index + 1).padStart(2, "0")}`,
    category: "Political",
    image: `/portfolio/political/political-${String(index + 1).padStart(
      2,
      "0"
    )}.jpg`,
  })
);

const festivalWorks: PortfolioItem[] = Array.from(
  { length: 9 },
  (_, index) => ({
    id: 200 + index,
    title: `Festival Creative ${String(index + 1).padStart(2, "0")}`,
    category: "Festival",
    image: `/portfolio/festival/festival-${String(index + 1).padStart(
      2,
      "0"
    )}.jpg`,
  })
);

const thumbnailWorks: PortfolioItem[] = Array.from(
  { length: 6 },
  (_, index) => ({
    id: 300 + index,
    title: `YouTube Thumbnail ${String(index + 1).padStart(2, "0")}`,
    category: "Thumbnails",
    image: `/portfolio/thumbnails/thumbnail-${String(index + 1).padStart(
      2,
      "0"
    )}.jpg`,
  })
);

const portfolioItems: PortfolioItem[] = [
  ...corporateWorks,
  ...politicalWorks,
  ...festivalWorks,
  ...thumbnailWorks,
];

const categories: {
  name: Category;
  count: number;
  comingSoon?: boolean;
}[] = [
  {
    name: "Corporate",
    count: 6,
  },
  {
    name: "Political",
    count: 14,
  },
  {
    name: "Festival",
    count: 9,
  },
  {
    name: "Thumbnails",
    count: 6,
  },
  {
    name: "Websites",
    count: 0,
    comingSoon: true,
  },
  {
    name: "Videos",
    count: 0,
    comingSoon: true,
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Corporate");

  const [selectedItem, setSelectedItem] =
    useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    return portfolioItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const selectedIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const showPrevious = () => {
    if (!selectedItem || filteredItems.length === 0) return;

    const previousIndex =
      selectedIndex <= 0 ? filteredItems.length - 1 : selectedIndex - 1;

    setSelectedItem(filteredItems[previousIndex]);
  };

  const showNext = () => {
    if (!selectedItem || filteredItems.length === 0) return;

    const nextIndex =
      selectedIndex >= filteredItems.length - 1 ? 0 : selectedIndex + 1;

    setSelectedItem(filteredItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (!selectedItem) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyboard);

    if (selectedItem) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "";
    };
  }, [selectedItem, selectedIndex]);

  return (
    <>
      <section
        id="portfolio"
        className="relative overflow-hidden bg-[#f7fbff] py-20 sm:py-24 lg:py-28"
      >
        {/* Background Decorations */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#173652 1px, transparent 1px), linear-gradient(90deg, #173652 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="pointer-events-none absolute -left-44 top-20 h-[420px] w-[420px] rounded-full bg-[#4DA3FF]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-44 bottom-10 h-[460px] w-[460px] rounded-full bg-[#173652]/10 blur-[130px]" />

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
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4DA3FF]/20 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#4DA3FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#173652] sm:text-sm">
                Creative Portfolio
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-[#173652] sm:text-4xl lg:text-5xl">
              Explore Our Latest
              <span className="block bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#4DA3FF] bg-clip-text text-transparent">
                Creative Works
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              A collection of corporate designs, political campaigns,
              festival creatives and YouTube thumbnails created by SM Tech
              Media.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-[#173652]/10 bg-white px-5 py-3 shadow-[0_12px_35px_rgba(23,54,82,0.08)]">
              <span className="text-2xl font-black text-[#4DA3FF]">
                35+
              </span>

              <span className="text-sm font-bold text-[#173652]">
                Creative Works
              </span>
            </div>
          </motion.div>

          {/* Filters */}
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
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  disabled={category.comingSoon}
                  onClick={() => {
                    if (!category.comingSoon) {
                      setActiveCategory(category.name);
                    }
                  }}
                  className={`relative rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
                    category.comingSoon
                      ? "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400"
                      : isActive
                      ? "bg-[#173652] text-white shadow-[0_12px_30px_rgba(23,54,82,0.25)]"
                      : "border border-[#173652]/10 bg-white text-[#173652] shadow-sm hover:-translate-y-1 hover:border-[#4DA3FF]/40 hover:text-[#4DA3FF]"
                  }`}
                >
                  <span>{category.name}</span>

                  {!category.comingSoon && (
                    <span
                      className={`ml-2 rounded-full px-2 py-0.5 text-[10px] ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-[#4DA3FF]/10 text-[#4DA3FF]"
                      }`}
                    >
                      {category.count}
                    </span>
                  )}

                  {category.comingSoon && (
                    <span className="ml-2 text-[9px] font-black uppercase tracking-wider">
                      Soon
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Gallery */}
          <motion.div
            layout
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.article
                  layout
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.045,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-[26px] border border-[#173652]/10 bg-white shadow-[0_15px_45px_rgba(23,54,82,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-[#4DA3FF]/30 hover:shadow-[0_28px_70px_rgba(23,54,82,0.18)]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="block w-full text-left"
                    aria-label={`View ${item.title}`}
                  >
                    <div
                      className={`relative w-full overflow-hidden ${
                        item.category === "Thumbnails"
                          ? "aspect-video"
                          : "aspect-square"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d263d]/90 via-[#173652]/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#173652]/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-md">
                        {item.category}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-lg font-black text-white">
                          {item.title}
                        </p>

                        <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-black text-[#173652]">
                          View Creative
                          <span className="text-base">↗</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 p-4">
                      <div>
                        <p className="text-sm font-black text-[#173652] sm:text-base">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          SM Tech Media
                        </p>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#173652]/5 text-lg font-bold text-[#173652] transition-all duration-300 group-hover:bg-[#4DA3FF] group-hover:text-white">
                        ↗
                      </span>
                    </div>
                  </button>
                </motion.article>
              ))}
            </AnimatePresence>
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
            className="relative mt-16 overflow-hidden rounded-[30px] bg-gradient-to-r from-[#173652] via-[#1F4566] to-[#173652] px-6 py-9 shadow-[0_30px_80px_rgba(23,54,82,0.25)] sm:px-9 lg:flex lg:items-center lg:justify-between lg:gap-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#4DA3FF]/25 blur-[70px]" />

            <div className="relative text-center lg:text-left">
              <p className="text-2xl font-black text-white sm:text-3xl">
                Have a project in mind?
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Let&apos;s create powerful designs, videos and digital
                experiences that help your brand stand out.
              </p>
            </div>

            <a
              href="#contact"
              className="relative mx-auto mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#173652] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#edf7ff] sm:w-auto lg:mx-0 lg:mt-0"
            >
              Start Your Project
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07192a]/95 p-4 backdrop-blur-xl sm:p-8"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#173652] sm:right-8 sm:top-8"
              aria-label="Close preview"
            >
              ×
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white hover:text-[#173652] sm:left-8 sm:h-12 sm:w-12"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white hover:text-[#173652] sm:right-8 sm:h-12 sm:w-12"
              aria-label="Next image"
            >
              ›
            </button>

            <motion.div
              key={selectedItem.id}
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[24px] border border-white/15 bg-[#102c45] shadow-2xl"
            >
              <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/25">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={1600}
                  height={1600}
                  priority
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 sm:px-7">
                <div>
                  <p className="text-base font-black text-white sm:text-lg">
                    {selectedItem.title}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/55">
                    {selectedItem.category} • SM Tech Media
                  </p>
                </div>

                <p className="shrink-0 text-xs font-bold text-white/55">
                  {selectedIndex + 1} / {filteredItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}