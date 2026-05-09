"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

const services = [
  "Full Groom",
  "Bath & Brush",
  "Nail Trim & Paw Care",
  "Teeth Cleaning",
  "Deshedding Treatment",
];

export default function HeroSection() {
  return (
    <motion.section
      id="top"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)] font-[family-name:var(--font-body)]"
    >
      <nav className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a
            href="#top"
            aria-label="PawPolish home"
            className="text-sm font-semibold tracking-[-0.01em] text-[var(--color-text)] outline-none transition-colors duration-200 ease-out focus-visible:rounded-[0.5rem] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            PawPolish
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden items-center gap-5 sm:flex">
              <a
                href="#services"
                className="text-sm font-medium text-[var(--color-muted)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:rounded-[0.5rem] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-[var(--color-muted)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:rounded-[0.5rem] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                How it works
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-[var(--color-muted)] outline-none transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:rounded-[0.5rem] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                FAQ
              </a>
            </div>
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-11 items-center justify-center rounded-[0.5rem] bg-[var(--color-primary)] px-5 text-sm font-semibold text-[var(--color-bg)] shadow-sm outline-none transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              Book Now
            </motion.a>
          </div>
        </div>
      </nav>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="flex flex-col justify-center lg:col-span-5 lg:pr-2">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="mb-6 inline-flex w-fit items-center rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)] shadow-sm"
          >
            Mobile grooming — we come to your home
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.58, delay: 0.15, ease: "easeOut" }}
            className="max-w-xl font-[family-name:var(--font-display)] text-[2.25rem] font-bold leading-[2.75rem] tracking-[-0.045em] text-[var(--color-text)] sm:text-[3rem] sm:leading-[3.5rem] lg:text-[3rem] lg:leading-[3.5rem]"
          >
            PawPolish brings professional grooming to your driveway.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base leading-6 text-[var(--color-muted)]"
          >
            Reliable, background-checked groomers. Transparent starting prices, clear time estimates, and fast booking. For suburban pet owners who want convenient, trusted care in minutes.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
            className="mt-5 max-w-lg text-sm leading-6 text-[var(--color-muted)]"
          >
            Enter your ZIP to check mobile availability. If we do not yet serve your area, join the waitlist and we will let you know as we expand.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
            className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
            aria-label="PawPolish trust indicators"
          >
            <div className="rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold leading-5 text-[var(--color-text)]">4.9 average rating</p>
            </div>
            <div className="rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold leading-5 text-[var(--color-text)]">1,254 grooms completed</p>
            </div>
            <div className="rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold leading-5 text-[var(--color-text)]">Background-checked staff</p>
            </div>
          </motion.div>
        </div>

        <div className="relative flex flex-col gap-6 lg:col-span-7 lg:min-h-[42rem] lg:items-end lg:justify-center">
          <motion.form
            id="booking"
            {...fadeUp}
            transition={{ duration: 0.58, delay: 0.35, ease: "easeOut" }}
            className="z-20 order-1 w-full rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-xl sm:p-5 lg:absolute lg:bottom-8 lg:left-0 lg:w-[24rem]"
            aria-label="Start a PawPolish booking"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="zip-code" className="block text-sm font-semibold leading-5 text-[var(--color-text)]">
                  Enter ZIP to check mobile availability
                </label>
                <input
                  id="zip-code"
                  name="zip-code"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="ZIP code"
                  className="h-12 w-full rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-base leading-6 text-[var(--color-text)] outline-none transition duration-200 ease-out placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-semibold leading-5 text-[var(--color-text)]">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="h-12 w-full rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm leading-5 text-[var(--color-text)] outline-none transition duration-200 ease-out focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="preferred-date" className="block text-sm font-semibold leading-5 text-[var(--color-text)]">
                    Preferred date
                  </label>
                  <input
                    id="preferred-date"
                    name="preferred-date"
                    type="date"
                    className="h-12 w-full rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm leading-5 text-[var(--color-text)] outline-none transition duration-200 ease-out focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
              </div>

              <p className="text-sm leading-5 text-[var(--color-muted)]">Pick a date or See available times</p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-[0.5rem] bg-[var(--color-primary)] px-5 text-sm font-semibold text-[var(--color-bg)] shadow-sm outline-none transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
                >
                  Book Now
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-12 items-center justify-center rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm font-semibold text-[var(--color-text)] outline-none transition-colors duration-200 ease-out hover:bg-[var(--color-bg)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
                >
                  See available times
                </motion.button>
              </div>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative order-2 w-full lg:w-[88%] lg:translate-y-4"
          >
            <div className="absolute -left-4 top-6 hidden h-[92%] w-[90%] rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] lg:block" aria-hidden="true" />
            <div className="absolute -right-3 -top-3 hidden h-[62%] w-[64%] rounded-[0.5rem] bg-[var(--color-border)] lg:block" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[0.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-xl">
              <ProjectImage
                id="hero"
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-[4/5]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
