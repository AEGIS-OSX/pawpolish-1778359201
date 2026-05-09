"use client"

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const introMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const quoteMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.54, delay: 0.1 + index * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const imageMotion = {
  hidden: { opacity: 0, scale: 0.985 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.72, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
};

const galleryItems = [
  {
    imageId: "feature_1",
    label: "Full Groom",
    detail: "Fresh trim, bath, and brush out",
  },
  {
    imageId: "feature_2",
    label: "Bath & Brush",
    detail: "Clean coat with a tidy finish",
  },
  {
    imageId: "feature_3",
    label: "Paw Care",
    detail: "Gentle handling for sensitive paws",
  },
];

const stats = ["4.9 average rating", "1,254 grooms completed", "Background-checked staff"];

export default function ReviewsSocialProofSection() {
  return (
    <section
      aria-labelledby="reviews-social-proof-heading"
      className="overflow-hidden bg-[var(--color-background)] px-5 py-20 text-[var(--color-text)] sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={introMotion}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-[var(--color-accent)] px-4 py-2 font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Proof with permission
          </p>
          <h2
            id="reviews-social-proof-heading"
            className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl lg:text-6xl"
          >
            Real customers, verified consent required
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.78fr)] lg:items-stretch">
          <div className="order-2 flex flex-col gap-5 lg:order-1">
            <motion.article
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
              variants={quoteMotion}
              className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-9 lg:p-10"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]">
                <span className="font-[family-name:var(--font-display)] text-2xl leading-none">“</span>
              </div>
              <p className="max-w-3xl font-[family-name:var(--font-display)] text-2xl font-medium leading-[1.12] tracking-[-0.035em] text-[var(--color-text)] sm:text-3xl lg:text-4xl">
                All photos require owner consent. Use the gallery to show typical results by breed and service. Add a caption with service type and time-in-care when available.
              </p>
            </motion.article>

            <motion.article
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
              variants={quoteMotion}
              className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-9 lg:p-10"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]">
                <span className="font-[family-name:var(--font-display)] text-2xl leading-none">”</span>
              </div>
              <p className="max-w-3xl font-[family-name:var(--font-display)] text-2xl font-medium leading-[1.12] tracking-[-0.035em] text-[var(--color-text)] sm:text-3xl lg:text-4xl">
                Verified grooming proof should feel calm, specific, and transparent before a customer books a driveway appointment.
              </p>
              <p className="mt-5 max-w-2xl font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)] sm:text-base">
                Captions focus on service type, time in care, and pet comfort signals so the gallery supports trust without overstating results.
              </p>
            </motion.article>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={introMotion}
              className="flex flex-wrap gap-3 pt-2"
              aria-label="PawPolish trust statistics"
            >
              {stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 font-[family-name:var(--font-body)] text-sm font-medium text-[var(--color-text)]"
                >
                  {stat}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={imageMotion}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-2">
              <ProjectImage
                id="social_proof"
                className="aspect-[16/13] w-full rounded-[1.75rem] object-cover lg:aspect-[4/5]"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-background)]/90 p-4 backdrop-blur-md">
                <p className="font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Consent-first gallery
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                  Typical results, clear context, no surprise claims.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={introMotion}
          className="border-t border-[var(--color-border)] pt-10 lg:pt-12"
        >
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
              Before and afters from real clients
            </h3>
            <p className="max-w-md font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)] sm:text-base">
              Browse recent outcomes by service type, coat needs, and appointment length before choosing a grooming window.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.article
                key={item.imageId}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.28 }}
                variants={quoteMotion}
                className="group overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-2"
              >
                <ProjectImage
                  id={item.imageId}
                  className="aspect-[5/4] w-full rounded-[1.25rem] object-cover transition duration-300 ease-out group-hover:scale-[1.015]"
                />
                <div className="px-3 pb-3 pt-4">
                  <h4 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                    {item.label}
                  </h4>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)]">
                    {item.detail}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
