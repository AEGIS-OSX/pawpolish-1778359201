"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

type ProjectImageId = "hero" | "feature_1" | "feature_2" | "feature_3" | "social_proof";

type Service = {
  title: string;
  body: string;
  imageId: ProjectImageId;
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Full Groom — Starts $75 — 90–180 minutes in care",
    body: "A complete grooming session including bath, brush, haircut where requested, nail trim, and light ear cleaning. Best for routine maintenance or a fresh look.",
    imageId: "feature_1",
    featured: true
  },
  {
    title: "Bath & Brush — Starts $45 — 45–90 minutes in care",
    body: "Bath, blow dry, brush out, and tidy-up trim. Ideal for quick refreshes and regular upkeep.",
    imageId: "feature_2"
  },
  {
    title: "Nail Trim & Paw Care — Starts $20 — 15–30 minutes in care",
    body: "Safe nail trimming, quick pad check, and gentle paw care. Add a handling fee for highly anxious pets.",
    imageId: "feature_3"
  },
  {
    title: "Teeth Cleaning — Starts $35 — 15–30 minutes in care",
    body: "Basic oral care focused on surface cleaning and fresh breath. Not a substitute for veterinary dental work.",
    imageId: "feature_2"
  },
  {
    title: "Deshedding Treatment — Starts $60 — 60–120 minutes in care",
    body: "Targeted de-shedding for heavy shedders using breed-appropriate tools and techniques.",
    imageId: "feature_1"
  }
];

const feeLabels = ["Breed adjustments", "Matting fees", "Add-ons"];
const priceMicrocopy =
  "See price breakdown for breed adjustments, matting fees, and add-ons. Prices shown are starting estimates; your deposit will reflect the estimator total at checkout.";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" } }
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  return (
    <motion.section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white px-6 py-20 text-[var(--color-text)] md:px-8 lg:px-12 lg:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <p className="mb-5 font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
              Services and pricing
            </p>
            <h2
              id="services-heading"
              className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text)] md:text-4xl"
            >
              Core services and starting prices
            </h2>
          </div>
          <div className="lg:col-span-5">
            <div className="border-l border-[var(--color-border)] pl-5">
              <p className="font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
                {priceMicrocopy}
              </p>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className={`overflow-hidden rounded-lg border border-[var(--color-border)] bg-white shadow-sm ${
                service.featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
              }`}
            >
              <div className={service.featured ? "min-h-80" : "min-h-64"}>
                <ProjectImage
                  id={service.imageId}
                  className="h-full min-h-64 w-full object-cover"
                />
              </div>
              <div className="flex h-full flex-col p-5 md:p-6">
                <h3 className="font-[family-name:var(--font-body)] text-lg font-semibold leading-7 tracking-tight text-[var(--color-text)]">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-muted)]">
                  {service.body}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="min-h-11 rounded-md border border-[var(--color-border)] px-4 py-2 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  >
                    See price breakdown
                  </button>
                  <button
                    type="button"
                    className="min-h-11 rounded-md bg-[var(--color-primary)] px-4 py-2 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-text)] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {selectedService ? (
        <div
          className="fixed inset-0 z-50 flex items-end bg-[rgba(31,34,37,0.42)] p-0 md:items-center md:justify-center md:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedService(null);
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="price-breakdown-heading"
            className="max-h-[90vh] w-full overflow-y-auto rounded-t-lg border border-[var(--color-border)] bg-white p-6 shadow-sm md:max-w-xl md:rounded-lg md:p-8"
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                  Price breakdown
                </p>
                <h3
                  id="price-breakdown-heading"
                  className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-text)]"
                >
                  {selectedService.title}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedService(null)}
                className="min-h-11 rounded-md border border-[var(--color-border)] px-3 py-2 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                Close
              </button>
            </div>
            <p className="mt-5 font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
              {priceMicrocopy}
            </p>
            <ul className="mt-6 space-y-3">
              {feeLabels.map((label) => (
                <li
                  key={label}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-text)]"
                >
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ) : null}
    </motion.section>
  );
}
