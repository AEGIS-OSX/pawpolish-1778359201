"use client"

import { motion } from "framer-motion"
import { ProjectImage } from "@/app/components/ProjectImage"

const trustItems = [
  "Background-checked groomers and staff credentials on every profile.",
  "Vaccination verification required for dogs: rabies, distemper/parvo, and bordetella. Owners confirm in the form and may upload proof. Providers may refuse service without proof.",
  "Fully insured for grooming operations and on-site handling.",
  "Low-stress handling and safety-first protocols; muzzles only when needed and with owner notification."
]

const policyItems = [
  "Deposit: 25% charged at booking.",
  "Cancel >48 hours before appointment: full refund of deposit.",
  "Cancel 24–48 hours before appointment: 50% refund or credit, case-by-case exceptions for documented illness.",
  "Cancel <24 hours before appointment: deposit forfeited, unless an exception is approved."
]

export default function TrustSafetySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-warm)] px-5 py-16 text-[var(--color-text)] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-x-6 top-0 h-px bg-[var(--color-border)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_24px_80px_var(--color-shadow)] sm:p-8 lg:p-9">
            <div className="mb-7 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" />
              <p className="font-[family-name:var(--font-body)] text-sm font-medium tracking-[0.14em] text-[var(--color-muted)] uppercase">
                Trust & safety
              </p>
            </div>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl leading-[0.98] font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              What we stand for
            </h2>
            <div className="mt-8 grid gap-3.5">
              {trustItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-4"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] font-[family-name:var(--font-body)] text-xs font-semibold text-[var(--color-primary)]">
                    {index + 1}
                  </span>
                  <p className="font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-text)] sm:text-[0.95rem]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="relative h-full overflow-hidden rounded-[2.25rem] border border-[var(--color-border)] bg-[var(--color-card)] p-3 shadow-[0_28px_90px_var(--color-shadow)]">
            <ProjectImage
              id="feature_3"
              className="h-[24rem] w-full rounded-[1.75rem] object-cover sm:h-[30rem] lg:h-full lg:min-h-[42rem]"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-5 shadow-[0_18px_60px_var(--color-shadow)] backdrop-blur-md sm:inset-x-8 sm:bottom-8">
              <p className="font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-text)]">
                Every visit starts with clear expectations, verified care standards, and a calm plan for pets who need extra patience.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-12"
        >
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_20px_70px_var(--color-shadow)] sm:p-8 lg:p-9">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div className="max-w-lg">
                <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium tracking-[0.14em] text-[var(--color-muted)] uppercase">
                  Booking policy
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-3xl leading-tight font-semibold tracking-[-0.03em] text-[var(--color-text)] sm:text-4xl">
                  Deposits and cancellations
                </h3>
              </div>
              <div className="grid gap-3">
                {policyItems.map((item, index) => (
                  <motion.p
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-text)] sm:text-[0.95rem]"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
