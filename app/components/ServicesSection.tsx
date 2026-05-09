"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

type Service = {
  title: string;
  body: string;
  imageId: "feature_1" | "feature_2" | "feature_3";
};

const services: Service[] = [
  {
    title: "Full Groom — Starts $75 — 90–180 minutes in care",
    body: "A complete grooming session including bath, brush, haircut where requested, nail trim, and light ear cleaning. Best for routine maintenance or a fresh look.",
    imageId: "feature_1",
  },
  {
    title: "Bath & Brush — Starts $45 — 45–90 minutes in care",
    body: "Bath, blow dry, brush out, and tidy-up trim. Ideal for quick refreshes and regular upkeep.",
    imageId: "feature_2",
  },
  {
    title: "Nail Trim & Paw Care — Starts $20 — 15–30 minutes in care",
    body: "Safe nail trimming, quick pad check, and gentle paw care. Add a handling fee for highly anxious pets.",
    imageId: "feature_3",
  },
  {
    title: "Teeth Cleaning — Starts $35 — 15–30 minutes in care",
    body: "Basic oral care focused on surface cleaning and fresh breath. Not a substitute for veterinary dental work.",
    imageId: "feature_2",
  },
  {
    title: "Deshedding Treatment — Starts $60 — 60–120 minutes in care",
    body: "Targeted de-shedding for heavy shedders using breed-appropriate tools and techniques.",
    imageId: "feature_1",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const modal = modalRef.current;
    const firstFocusable = modal?.querySelector<HTMLElement>("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])");

    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("overflow-hidden");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
      previousActiveElement?.focus();
    };
  }, [isModalOpen]);

  const handleModalKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const modal = modalRef.current;

    if (!modal) {
      return;
    }

    const focusableElements = Array.from(
      modal.querySelectorAll<HTMLElement>("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])")
    ).filter((element) => !element.hasAttribute("disabled"));

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  const openPriceBreakdown = () => {
    setIsModalOpen(true);
  };

  const closePriceBreakdown = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      className="bg-[var(--color-surface)] px-4 py-16 text-[var(--color-text)] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-labelledby="services-heading"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="mb-4 inline-flex rounded-full border border-[var(--color-border)] px-3 py-1 font-[family-name:var(--font-body)] text-[0.8125rem] font-semibold leading-5 text-[var(--color-muted)]">
            Mobile grooming menu
          </p>
          <h2
            id="services-heading"
            className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-[var(--color-text)]"
          >
            Core services and starting prices
          </h2>
          <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-[1rem] leading-6 text-[var(--color-muted)]">
            See price breakdown for breed adjustments, matting fees, and add-ons. Prices shown are starting estimates; your deposit will reflect the estimator total at checkout.
          </p>
        </div>

        <div className="md:col-span-5 md:pt-10">
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-background)] p-5 shadow-[0_1rem_2.5rem_color-mix(in_srgb,var(--color-text)_8%,transparent)]">
            <p className="font-[family-name:var(--font-body)] text-[0.8125rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[var(--color-muted)]">
              Booking estimate
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div>
                <p className="font-[family-name:var(--font-display)] text-[2rem] font-semibold leading-none tracking-[-0.04em] text-[var(--color-text)]">5</p>
                <p className="mt-2 font-[family-name:var(--font-body)] text-[0.8125rem] leading-5 text-[var(--color-muted)]">Core services</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-[2rem] font-semibold leading-none tracking-[-0.04em] text-[var(--color-text)]">25%</p>
                <p className="mt-2 font-[family-name:var(--font-body)] text-[0.8125rem] leading-5 text-[var(--color-muted)]">Deposit</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-[2rem] font-semibold leading-none tracking-[-0.04em] text-[var(--color-text)]">15</p>
                <p className="mt-2 font-[family-name:var(--font-body)] text-[0.8125rem] leading-5 text-[var(--color-muted)]">Minute trim</p>
              </div>
            </div>
            <p className="mt-5 border-t border-[var(--color-border)] pt-4 font-[family-name:var(--font-body)] text-[0.9375rem] leading-6 text-[var(--color-muted)]">
              Choose a service, confirm pet details, and review the estimator before the deposit is collected.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-12 md:gap-6"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className={`${index === 0 ? "md:col-span-12" : "md:col-span-6"} overflow-hidden rounded-[8px] border border-[var(--color-border)] bg-[var(--color-background)] shadow-[0_0.75rem_2rem_color-mix(in_srgb,var(--color-text)_6%,transparent)]`}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)] [&_*]:h-full [&_*]:w-full [&_*]:object-cover">
              <ProjectImage id={service.imageId} />
            </div>
            <div className="flex min-h-[15rem] flex-col p-5 sm:p-6">
              <h3 className="font-[family-name:var(--font-body)] text-[1.125rem] font-semibold leading-[1.625rem] tracking-[-0.01em] text-[var(--color-text)]">
                {service.title}
              </h3>
              <p className="mt-4 font-[family-name:var(--font-body)] text-[1rem] leading-6 text-[var(--color-muted)]">
                {service.body}
              </p>
              <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row sm:items-center">
                <button
                  ref={index === 0 ? triggerRef : null}
                  type="button"
                  className="inline-flex min-h-11 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 font-[family-name:var(--font-body)] text-[0.9375rem] font-semibold leading-5 text-[var(--color-text)] transition duration-200 ease-out hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                  onClick={openPriceBreakdown}
                  aria-haspopup="dialog"
                >
                  See price breakdown
                </button>
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center justify-center rounded-[8px] border border-[var(--color-primary)] bg-[var(--color-primary)] px-4 font-[family-name:var(--font-body)] text-[0.9375rem] font-semibold leading-5 text-[var(--color-on-primary)] transition duration-200 ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {isModalOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[var(--color-overlay)] px-0 md:items-center md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePriceBreakdown();
            }
          }}
        >
          <motion.div
            ref={modalRef}
            className="max-h-[90vh] w-full overflow-y-auto rounded-t-[16px] border border-[var(--color-border)] bg-[var(--color-background)] p-6 text-[var(--color-text)] shadow-[0_1.5rem_4rem_color-mix(in_srgb,var(--color-text)_16%,transparent)] md:max-w-[38rem] md:rounded-[8px] md:p-7"
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="price-breakdown-title"
            onKeyDown={handleModalKeyDown}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-[family-name:var(--font-body)] text-[0.8125rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[var(--color-muted)]">
                  Estimator details
                </p>
                <h3
                  id="price-breakdown-title"
                  className="mt-2 font-[family-name:var(--font-display)] text-[2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-text)]"
                >
                  Price breakdown
                </h3>
              </div>
              <button
                type="button"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] font-[family-name:var(--font-body)] text-[1.25rem] leading-none text-[var(--color-text)] transition duration-200 ease-out hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                onClick={closePriceBreakdown}
                aria-label="Close price breakdown"
              >
                ×
              </button>
            </div>

            <div className="mt-7 grid gap-3">
              <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <h4 className="font-[family-name:var(--font-body)] text-[1.125rem] font-semibold leading-[1.625rem] text-[var(--color-text)]">Breed adjustments</h4>
                <p className="mt-2 font-[family-name:var(--font-body)] text-[1rem] leading-6 text-[var(--color-muted)]">Breed, coat type, size, and service complexity can change the final estimate before checkout.</p>
              </div>
              <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <h4 className="font-[family-name:var(--font-body)] text-[1.125rem] font-semibold leading-[1.625rem] text-[var(--color-text)]">Matting fees</h4>
                <p className="mt-2 font-[family-name:var(--font-body)] text-[1rem] leading-6 text-[var(--color-muted)]">Extra handling time may apply when matting requires slower brushing, comfort breaks, or a safer trim plan.</p>
              </div>
              <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <h4 className="font-[family-name:var(--font-body)] text-[1.125rem] font-semibold leading-[1.625rem] text-[var(--color-text)]">Add-ons</h4>
                <p className="mt-2 font-[family-name:var(--font-body)] text-[1rem] leading-6 text-[var(--color-muted)]">Optional treatments can be added during booking so the deposit matches the selected care plan.</p>
              </div>
            </div>

            <p className="mt-6 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 font-[family-name:var(--font-body)] text-[1rem] leading-6 text-[var(--color-muted)]">
              Prices shown are starting estimates; your deposit will reflect the estimator total at checkout.
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </motion.section>
  );
}
