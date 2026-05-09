"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "1.",
    direction: -28,
    headline: "Check availability",
    body: "Enter your ZIP and pick a service. We show available windows where we operate.",
  },
  {
    label: "2.",
    direction: 28,
    headline: "Choose a slot and tell us about your pet",
    body: "Select a confirmed time, add pet details and temperament, and upload a photo if you like.",
  },
  {
    label: "3.",
    direction: -28,
    headline: "Pay a 25% deposit and receive confirmation",
    body: "A 25% deposit holds the slot. On confirmation you get an email and calendar event. Final payment is collected after service unless another arrangement is agreed.",
  },
];

const mechanicsNote =
  "Live availability is shown in real time. We confirm slots before charging, and we charge deposits using secure card processing. If calendars are slow, we present alternatives and waitlist options.";

export default function HowItWorksSection() {
  return (
    <motion.section
      id="how-it-works"
      className="bg-[var(--color-bg)] px-6 py-24 text-[var(--color-text)] sm:px-8 lg:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:sticky lg:top-24"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Booking flow
            </p>
            <h2
              id="how-it-works-heading"
              className="max-w-sm font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
            >
              Book in three steps
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-[var(--color-muted-text)]">
              {mechanicsNote}
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-8 lg:col-start-5">
          <div className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {steps.map((step, index) => (
              <motion.article
                key={step.headline}
                initial={{ opacity: 0, x: step.direction }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-12 sm:gap-6 lg:py-12"
              >
                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    {step.label}
                  </p>
                </div>
                <div className="sm:col-span-10">
                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[var(--color-text)] sm:text-4xl">
                    {step.headline}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted-text)]">
                    {step.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}