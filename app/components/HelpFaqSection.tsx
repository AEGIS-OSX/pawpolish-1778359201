"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do you come to my house?",
    answer: "Where available, yes. Enter your ZIP to confirm mobile coverage.",
  },
  {
    question: "How long does a groom take?",
    answer: "Times vary by service and coat condition. We show estimated time ranges on each service card.",
  },
  {
    question: "What happens if my pet is reactive?",
    answer: "We assess temperament during booking. Some cases require a private appointment, additional handler fee, or may be declined for safety.",
  },
  {
    question: "Do you accept walk-ins?",
    answer: "No. All grooming is scheduled to ensure safe, focused care.",
  },
];

export default function HelpFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      className="bg-[var(--color-bg)] px-5 py-20 text-[var(--color-text)] sm:px-8 lg:px-12"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      aria-labelledby="help-faq-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
        <div className="flex flex-col justify-between gap-8 lg:min-h-80">
          <div className="max-w-md">
            <p className="mb-4 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Help
            </p>
            <h2
              id="help-faq-heading"
              className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl lg:text-6xl"
            >
              Quick answers
            </h2>
          </div>
          <p className="max-w-sm font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)]">
            Clear answers before you book, with coverage, timing, safety, and appointment details kept simple.
          </p>
        </div>

        <div className="flex flex-col">
          <motion.div
            className="border-t border-[var(--color-border)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.055,
                },
              },
            }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `help-faq-answer-${index}`;
              const buttonId = `help-faq-button-${index}`;

              return (
                <motion.div
                  key={faq.question}
                  className="border-b border-[var(--color-border)]"
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.24, ease: "easeOut" },
                    },
                  }}
                >
                  <button
                    id={buttonId}
                    type="button"
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left font-[family-name:var(--font-body)] text-lg font-semibold leading-6 text-[var(--color-text)] transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] sm:text-xl"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="max-w-xl">{faq.question}</span>
                    <motion.span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors duration-200 ease-out group-hover:border-[var(--color-primary)]"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      aria-hidden="true"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  </button>

                  <motion.div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="overflow-hidden"
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  >
                    <p className="max-w-2xl pb-6 pr-12 font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.24, ease: "easeOut", delay: 0.08 }}
          >
            <p className="font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)] sm:text-base">
              Enter your ZIP to check mobile availability.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-primary-foreground)] transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Book Now
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
