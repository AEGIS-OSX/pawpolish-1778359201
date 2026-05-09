"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

type ProjectImageId = "hero" | "feature_1" | "feature_2" | "feature_3" | "social_proof";

type GalleryImage = {
  id: ProjectImageId;
  label: string;
};

const stats = ["4.9 average rating", "1,254 grooms completed", "Background-checked staff"];

const galleryImages: GalleryImage[] = [
  { id: "feature_1", label: "Mobile grooming setup" },
  { id: "feature_2", label: "Prepared care tools" },
  { id: "feature_3", label: "Safety-first paw care" }
];

const governanceCopy =
  "All photos require owner consent. Use the gallery to show typical results by breed and service. Add a caption with service type and time-in-care when available.";

export default function ReviewsSocialProofSection() {
  return (
    <motion.section
      aria-labelledby="reviews-heading"
      className="bg-white px-6 py-20 text-[var(--color-text)] md:px-8 lg:px-12 lg:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <p className="mb-5 font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
              Proof, not performance
            </p>
            <h2
              id="reviews-heading"
              className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text)] md:text-4xl"
            >
              Real customers, verified consent required
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              <motion.figure
                className="border-l-2 border-[var(--color-accent)] pl-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <blockquote className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug tracking-tight text-[var(--color-text)]">
                  Consent comes first, every photo earns its place.
                </blockquote>
                <figcaption className="mt-4 font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)]">
                  Gallery governance for launch content
                </figcaption>
              </motion.figure>

              <motion.figure
                className="border-l-2 border-[var(--color-border)] pl-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
              >
                <blockquote className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug tracking-tight text-[var(--color-text)]">
                  Service captions stay factual, specific, and approved.
                </blockquote>
                <figcaption className="mt-4 font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)]">
                  No invented testimonials, no fake names
                </figcaption>
              </motion.figure>
            </div>

            <p className="mt-8 max-w-2xl font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
              {governanceCopy}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-text)]"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          >
            <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
              <ProjectImage
                id="social_proof"
                className="aspect-[4/5] w-full rounded-md object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-[var(--color-text)] md:text-3xl">
            Before and afters from real clients
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <motion.figure
                key={image.id}
                className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-white"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              >
                <ProjectImage id={image.id} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[var(--color-muted)]">
                  {image.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
