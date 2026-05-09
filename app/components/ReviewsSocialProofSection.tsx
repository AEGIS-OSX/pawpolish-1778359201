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
  { id: "feature_3", label: "Safety-first paw care" },
];

const governanceCopy =
  "All photos require owner consent. Use the gallery to show typical results by breed and service. Add a caption with service type and time-in-care when available.";

export default function ReviewsSocialProofSection() {
  return (
    <motion.section
      aria-labelledby="reviews-heading"
      className="bg-[var(--color-surface)] px-6 py-24 text-[var(--color-text)] md:px-8 lg:px-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
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
                <figcaption className="mt-4 text-sm leading-6 text-[var(--color-muted-text)]">
                  {governanceCopy}
                </figcaption>
              </motion.figure>

              <motion.div
                className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-warm)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              >
                <ProjectImage id="social_proof" className="h-full w-full object-cover" />
              </motion.div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text)]"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-5">
              {galleryImages.map((image, index) => (
                <motion.figure
                  key={image.id}
                  className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
                >
                  <ProjectImage id={image.id} className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-5 py-4 text-sm leading-6 text-[var(--color-muted-text)]">
                    {image.label}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}