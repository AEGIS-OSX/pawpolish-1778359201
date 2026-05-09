"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "01",
    direction: -28,
    headline: "Check availability",
    body: "Enter your ZIP and pick a service. We show available windows where we operate.",
  },
  {
    label: "02",
    direction: 28,
    headline: "Choose a slot and tell us about your pet",
    body: "Select a confirmed time, add pet details and temperament, and upload a photo if you like.",
  },
  {
    label: "03",
    direction: -28,
    headline: "Pay a 25% deposit and receive confirmation",
    body: "A 25% deposit holds the slot. On confirmation you get an email and calendar event. Final payment is collected after service unless another arrangement is agreed.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[var(--color-bg)] px-6 py-20 text-[var(--color-text)] sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:sticky lg:top-24"
          >
            <p className="mb-5 font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Booking flow
            </p>
            <h2 className="max-w-sm font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              Book in three steps
            </h2>
          </motion.div>
        </div>

        <div className="lg:col-span-8 lg:col-start-5">
          <div className="divide-y divide-[var(--color-border)]">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: step.direction }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                className="grid grid-cols-1 gap-5 py-9 first:pt-0 last:pb-0 motion-reduce:transform-none sm:grid-cols-12 sm:gap-6 lg:py-11"
              >
                <div className="sm:col-span-2">
                  <span className="font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    {step.label}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-[family-name:var(--font-body)] text-xl font-semibold leading-[1.18] tracking-[-0.02em] text-[var(--color-text)] sm:text-2xl">
                    {step.headline}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
            className="mt-12 rounded-[2rem] bg-[var(--color-surface)] px-6 py-6 sm:px-8 sm:py-7"
          >
            <p className="font-[family-name:var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
              Live availability is shown in real time. We confirm slots before charging, and we charge deposits using secure card processing. If calendars are slow, we present alternatives and waitlist options.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
