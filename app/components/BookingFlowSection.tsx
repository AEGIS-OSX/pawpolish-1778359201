"use client"

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = ["Pet details", "Service", "Time", "Checkout"];

const services = [
  "Full Groom",
  "Bath & Brush",
  "Nail Trim & Paw Care",
  "Teeth Cleaning",
  "Deshedding Treatment",
];

const slots = ["8:30 AM", "11:00 AM", "2:30 PM"];

const inputClass = "mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition duration-200 placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] disabled:cursor-not-allowed disabled:opacity-50";
const labelClass = "block text-sm font-medium text-[var(--color-text)]";
const helperClass = "mt-1 text-xs leading-5 text-[var(--color-muted-text)]";
const panelMotion = {
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(8px)" },
};

type BookingForm = {
  name: string;
  email: string;
  phone: string;
  petName: string;
  petType: string;
  breed: string;
  sizeWeight: string;
  temperament: string;
  vaccination: boolean;
  photo: string;
  galleryConsent: boolean;
  service: string;
  coupon: string;
  zip: string;
  preferredDate: string;
  slot: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
};

type FieldProps = {
  id: keyof BookingForm;
  label: string;
  value: string;
  helper?: string;
  type?: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
};

function Field({ id, label, value, helper, type = "text", required = false, onChange }: FieldProps) {
  return (
    <label className={labelClass} htmlFor={id}>
      <span className="text-[var(--color-text)]">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className={inputClass}
      />
      {helper ? <span className={helperClass}>{helper}</span> : null}
    </label>
  );
}

function ActionButton({ children, type = "button", variant = "primary", disabled = false, onClick }: ButtonProps) {
  const variantClass = variant === "primary"
    ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-[0_14px_34px_var(--color-primary-shadow)]"
    : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]";

  return (
    <motion.button
      type={type}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] disabled:cursor-not-allowed disabled:opacity-45 ${variantClass}`}
    >
      {children}
    </motion.button>
  );
}

export default function BookingFlowSection() {
  const [step, setStep] = useState(0);
  const [validationMessage, setValidationMessage] = useState("");
  const [loadingTimes, setLoadingTimes] = useState(true);
  const [paymentError, setPaymentError] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [openPolicy, setOpenPolicy] = useState<"Deposits and cancellations" | "What we stand for">("Deposits and cancellations");
  const [form, setForm] = useState<BookingForm>({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petType: "Dog",
    breed: "",
    sizeWeight: "",
    temperament: "",
    vaccination: false,
    photo: "",
    galleryConsent: false,
    service: "",
    coupon: "",
    zip: "",
    preferredDate: "",
    slot: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
    setForm((current) => ({ ...current, [target.name]: value }));
    setValidationMessage("");
  };

  const stepIsValid = (index: number) => {
    if (index === 0) {
      return Boolean(form.name && form.email && form.phone && form.petType && form.temperament && (form.petType !== "Dog" || form.vaccination));
    }

    if (index === 1) {
      return Boolean(form.service);
    }

    if (index === 2) {
      return Boolean(form.zip && form.preferredDate && form.slot);
    }

    return Boolean(form.cardName && form.cardNumber && form.expiry && form.cvc && !paymentError);
  };

  const goNext = () => {
    if (!stepIsValid(step)) {
      setValidationMessage("Complete the required fields before continuing.");
      return;
    }

    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => {
    setValidationMessage("");
    setStep((current) => Math.max(current - 1, 0));
  };

  const showSampleTimes = () => {
    setLoadingTimes(false);
    setValidationMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stepIsValid(3)) {
      setValidationMessage("Review checkout details before booking.");
      return;
    }

    setConfirmed(true);
  };

  return (
    <section className="bg-[var(--color-background)] px-4 py-20 text-[var(--color-text)] sm:px-6 lg:px-8 lg:py-28" aria-labelledby="booking-flow-heading">
      <div className="mx-auto max-w-7xl font-[family-name:var(--font-body)]">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <p className="mb-4 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted-text)]">
            Guided booking
          </p>
          <h2 id="booking-flow-heading" className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Book in three steps
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--color-muted-text)] sm:text-lg">
            Enter your ZIP to check mobile availability. If we do not yet serve your area, join the waitlist and we will let you know as we expand.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-start">
          <aside className="order-2 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-muted)] p-6 text-[var(--color-text)] shadow-[0_18px_70px_var(--color-shadow)] lg:order-1 lg:col-span-4 lg:p-8">
            <div className="space-y-7">
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">What happens next</p>
                <div className="mt-5 space-y-4 text-sm leading-6 text-[var(--color-muted-text)]">
                  <p className="text-[var(--color-muted-text)]"><span className="font-semibold text-[var(--color-text)]">Check availability.</span> Enter your ZIP and pick a service. We show available windows where we operate.</p>
                  <p className="text-[var(--color-muted-text)]"><span className="font-semibold text-[var(--color-text)]">Choose a slot and tell us about your pet.</span> Select a confirmed time, add pet details and temperament, and upload a photo if you like.</p>
                  <p className="text-[var(--color-muted-text)]"><span className="font-semibold text-[var(--color-text)]">Pay a 25% deposit and receive confirmation.</span> A 25% deposit holds the slot. On confirmation you get an email and calendar event. Final payment is collected after service unless another arrangement is agreed.</p>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <p className="text-sm leading-6 text-[var(--color-muted-text)]">
                  Live availability is shown in real time. We confirm slots before charging, and we charge deposits using secure card processing. If calendars are slow, we present alternatives and waitlist options.
                </p>
              </div>

              <div className="space-y-3" aria-label="Policy toggles">
                {["Deposits and cancellations", "What we stand for"].map((policy) => (
                  <div key={policy} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <button
                      type="button"
                      onClick={() => setOpenPolicy(policy as "Deposits and cancellations" | "What we stand for")}
                      className="flex w-full items-center justify-between gap-4 rounded-3xl px-5 py-4 text-left text-sm font-semibold text-[var(--color-text)] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
                      aria-expanded={openPolicy === policy}
                    >
                      <span className="text-[var(--color-text)]">{policy}</span>
                      <span className="text-[var(--color-muted-text)]">{openPolicy === policy ? "Open" : "View"}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openPolicy === policy ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="overflow-hidden px-5 pb-5 text-sm leading-6 text-[var(--color-muted-text)]"
                        >
                          {policy === "Deposits and cancellations" ? (
                            <ul className="space-y-2 text-[var(--color-muted-text)]">
                              <li className="text-[var(--color-muted-text)]">Deposit: 25% charged at booking.</li>
                              <li className="text-[var(--color-muted-text)]">Cancel &gt;48 hours before appointment: full refund of deposit.</li>
                              <li className="text-[var(--color-muted-text)]">Cancel 24–48 hours before appointment: 50% refund or credit, case-by-case exceptions for documented illness.</li>
                              <li className="text-[var(--color-muted-text)]">Cancel &lt;24 hours before appointment: deposit forfeited, unless an exception is approved.</li>
                            </ul>
                          ) : (
                            <ul className="space-y-2 text-[var(--color-muted-text)]">
                              <li className="text-[var(--color-muted-text)]">Background-checked groomers and staff credentials on every profile.</li>
                              <li className="text-[var(--color-muted-text)]">Vaccination verification required for dogs: rabies, distemper/parvo, and bordetella.</li>
                              <li className="text-[var(--color-muted-text)]">Fully insured for grooming operations and on-site handling.</li>
                              <li className="text-[var(--color-muted-text)]">Low-stress handling and safety-first protocols.</li>
                            </ul>
                          )}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="order-1 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_24px_90px_var(--color-shadow)] sm:p-6 lg:order-2 lg:col-span-8 lg:p-8">
            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-background)] p-3 sm:p-4">
              <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="Booking progress">
                {steps.map((label, index) => (
                  <li key={label} className="text-[var(--color-text)]">
                    <button
                      type="button"
                      onClick={() => setStep(index)}
                      className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left text-xs font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] ${step === index ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)]" : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted-text)]"}`}
                      aria-current={step === index ? "step" : undefined}
                    >
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${step === index ? "bg-[var(--color-primary-foreground)] text-[var(--color-primary)]" : "bg-[var(--color-muted)] text-[var(--color-text)]"}`}>{index + 1}</span>
                      <span className="text-current">{label}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>

            <div className="min-h-[38rem] py-6 sm:py-8">
              <AnimatePresence mode="wait">
                {step === 0 ? (
                  <motion.div
                    key="pet-details"
                    {...panelMotion}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(8px)", transition: { duration: 0.2, ease: "easeOut" } }}
                    className="space-y-6"
                  >
                    <fieldset className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:p-6">
                      <legend className="px-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">Pet details</legend>
                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <Field id="name" label="Name" value={form.name} required onChange={handleInputChange} />
                        <Field id="email" label="Email" type="email" value={form.email} required onChange={handleInputChange} />
                        <Field id="phone" label="Phone" type="tel" value={form.phone} required onChange={handleInputChange} />
                        <Field id="petName" label="Pet name" value={form.petName} helper="Optional but helpful" onChange={handleInputChange} />
                        <label className={labelClass} htmlFor="petType">
                          <span className="text-[var(--color-text)]">Pet type</span>
                          <select id="petType" name="petType" value={form.petType} onChange={handleInputChange} className={inputClass} required>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                          </select>
                          <span className={helperClass}>Dog or Cat</span>
                        </label>
                        <Field id="breed" label="Breed" value={form.breed} helper="Start typing to find breed" onChange={handleInputChange} />
                        <Field id="sizeWeight" label="Size / weight" value={form.sizeWeight} helper="Select size or enter weight" onChange={handleInputChange} />
                        <label className={labelClass} htmlFor="temperament">
                          <span className="text-[var(--color-text)]">Temperament</span>
                          <select id="temperament" name="temperament" value={form.temperament} onChange={handleInputChange} className={inputClass} required>
                            <option value="">Calm, anxious, reactive</option>
                            <option value="Calm">Calm</option>
                            <option value="Anxious">Anxious</option>
                            <option value="Reactive">Reactive</option>
                          </select>
                          <span className={helperClass}>Calm, anxious, reactive</span>
                        </label>
                      </div>
                    </fieldset>

                    <fieldset className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:p-6">
                      <legend className="px-2 text-sm font-semibold text-[var(--color-text)]">Vaccination and media consent</legend>
                      <div className="mt-4 space-y-4">
                        <label className="flex gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm leading-6 text-[var(--color-text)]">
                          <input name="vaccination" type="checkbox" checked={form.vaccination} onChange={handleInputChange} className="mt-1 h-4 w-4 rounded border-[var(--color-border)] accent-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]" />
                          <span className="text-[var(--color-text)]">I confirm my pet has current rabies, distemper/parvo, and bordetella vaccinations, and I consent to verification on arrival.</span>
                        </label>
                        <label className={labelClass} htmlFor="photo">
                          <span className="text-[var(--color-text)]">Photo upload</span>
                          <input id="photo" name="photo" type="file" accept="image/png,image/jpeg" onChange={handleInputChange} className={inputClass} />
                          <span className={helperClass}>Upload a clear photo showing coat condition. JPG/PNG. Max 5MB.</span>
                        </label>
                        <label className="flex gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm leading-6 text-[var(--color-text)]">
                          <input name="galleryConsent" type="checkbox" checked={form.galleryConsent} onChange={handleInputChange} className="mt-1 h-4 w-4 rounded border-[var(--color-border)] accent-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]" />
                          <span className="text-[var(--color-text)]">I consent to before/after photos of my pet being shared without names</span>
                        </label>
                      </div>
                    </fieldset>
                  </motion.div>
                ) : null}

                {step === 1 ? (
                  <motion.div
                    key="service"
                    {...panelMotion}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(8px)", transition: { duration: 0.2, ease: "easeOut" } }}
                    className="space-y-6"
                  >
                    <fieldset className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:p-6">
                      <legend className="px-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">Core services and starting prices</legend>
                      <label className={`${labelClass} mt-5`} htmlFor="service">
                        <span className="text-[var(--color-text)]">Service</span>
                        <select id="service" name="service" value={form.service} onChange={handleInputChange} className={inputClass} required>
                          <option value="">Select a service</option>
                          {services.map((service) => <option key={service} value={service}>{service}</option>)}
                        </select>
                        <span className={helperClass}>Select a service</span>
                      </label>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => setForm((current) => ({ ...current, service }))}
                            className={`rounded-2xl border p-4 text-left text-sm transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] ${form.service === service ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)]" : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]"}`}
                          >
                            <span className="font-semibold text-current">{service}</span>
                            <span className="mt-1 block text-xs text-current">Starting estimate shown at checkout</span>
                          </button>
                        ))}
                      </div>
                      <label className={`${labelClass} mt-5`} htmlFor="coupon">
                        <span className="text-[var(--color-text)]">Coupon</span>
                        <input id="coupon" name="coupon" type="text" value={form.coupon} onChange={handleInputChange} className={inputClass} />
                      </label>
                    </fieldset>
                  </motion.div>
                ) : null}

                {step === 2 ? (
                  <motion.div
                    key="time"
                    {...panelMotion}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(8px)", transition: { duration: 0.2, ease: "easeOut" } }}
                    className="space-y-6"
                  >
                    <fieldset className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:p-6">
                      <legend className="px-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">See available times</legend>
                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <Field id="zip" label="ZIP code" value={form.zip} helper="Enter ZIP to check mobile availability" required onChange={handleInputChange} />
                        <Field id="preferredDate" label="Preferred date" type="date" value={form.preferredDate} helper="Pick a date or See available times" required onChange={handleInputChange} />
                      </div>
                      <div className="mt-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-sm font-semibold text-[var(--color-text)]">Available windows</p>
                          <ActionButton variant="secondary" onClick={showSampleTimes}>See available times</ActionButton>
                        </div>
                        {loadingTimes ? (
                          <div className="mt-5 grid gap-3 sm:grid-cols-3" aria-label="Loading available times">
                            {[0, 1, 2].map((item) => <div key={item} className="h-14 animate-pulse rounded-2xl bg-[var(--color-muted)]" />)}
                          </div>
                        ) : (
                          <div className="mt-5 grid gap-3 sm:grid-cols-3" role="radiogroup" aria-label="Choose appointment time">
                            {slots.map((slot) => (
                              <label key={slot} className={`cursor-pointer rounded-2xl border p-4 text-center text-sm font-semibold transition duration-200 ${form.slot === slot ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)]" : "border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)]"}`}>
                                <input name="slot" type="radio" value={slot} checked={form.slot === slot} onChange={handleInputChange} className="sr-only" />
                                <span className="text-current">{slot}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </fieldset>

                    <div className="rounded-3xl border border-[var(--color-warning-border)] bg-[var(--color-warning-surface)] p-5 text-sm leading-6 text-[var(--color-warning-text)]" role="status">
                      No slots in your area for that date. Join the waitlist and we will notify you when we expand or a slot opens.
                    </div>
                    <div className="rounded-3xl border border-[var(--color-error-border)] bg-[var(--color-error-surface)] p-5 text-sm leading-6 text-[var(--color-error)]" role="alert">
                      That slot was just booked. We reserved the next available slot for you, or you can choose another time.
                    </div>
                  </motion.div>
                ) : null}

                {step === 3 ? (
                  <motion.div
                    key="checkout"
                    {...panelMotion}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(8px)", transition: { duration: 0.2, ease: "easeOut" } }}
                    className="space-y-6"
                  >
                    <fieldset className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:p-6">
                      <legend className="px-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">Checkout</legend>
                      <div className="mt-5 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                        <p className="text-sm font-semibold text-[var(--color-text)]">25% deposit charged at booking to hold your slot</p>
                        <dl className="mt-4 grid gap-3 text-sm text-[var(--color-muted-text)] sm:grid-cols-2">
                          <div className="text-[var(--color-muted-text)]"><dt className="font-medium text-[var(--color-text)]">Service</dt><dd className="mt-1 text-[var(--color-muted-text)]">{form.service || "Select a service"}</dd></div>
                          <div className="text-[var(--color-muted-text)]"><dt className="font-medium text-[var(--color-text)]">Time</dt><dd className="mt-1 text-[var(--color-muted-text)]">{form.slot || "See available times"}</dd></div>
                        </dl>
                      </div>
                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <Field id="cardName" label="Name on card" value={form.cardName} required onChange={handleInputChange} />
                        <Field id="cardNumber" label="Card number" value={form.cardNumber} required onChange={handleInputChange} />
                        <Field id="expiry" label="Expiration" value={form.expiry} required onChange={handleInputChange} />
                        <Field id="cvc" label="CVC" value={form.cvc} required onChange={handleInputChange} />
                      </div>
                    </fieldset>

                    {paymentError ? (
                      <div className="rounded-3xl border border-[var(--color-error-border)] bg-[var(--color-error-surface)] p-5 text-sm leading-6 text-[var(--color-error)]" role="alert">
                        <p className="text-[var(--color-error)]">Payment did not go through. Please check your card details or try another card.</p>
                        <button type="button" onClick={() => setPaymentError(false)} className="mt-3 rounded-full border border-[var(--color-error-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold text-[var(--color-error)] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]">
                          Try another card
                        </button>
                      </div>
                    ) : null}

                    <div className="rounded-3xl border border-[var(--color-primary)] bg-[var(--color-primary-soft)] p-5 text-[var(--color-text)]">
                      <p className="text-sm leading-6 text-[var(--color-text)]">A 25% deposit holds the slot. On confirmation you get an email and calendar event.</p>
                      <div className="mt-5">
                        <ActionButton type="submit" disabled={!stepIsValid(3)}>Book Now</ActionButton>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="border-t border-[var(--color-border)] pt-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <ActionButton variant="secondary" onClick={goBack} disabled={step === 0}>Back</ActionButton>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  {step < steps.length - 1 ? <ActionButton onClick={goNext} disabled={!stepIsValid(step)}>Continue</ActionButton> : null}
                </div>
              </div>
              <div className="mt-4 min-h-6 text-sm text-[var(--color-error)]" aria-live="polite">
                {validationMessage}
              </div>
              <div className="mt-2 rounded-2xl bg-[var(--color-muted)] px-4 py-3 text-xs leading-5 text-[var(--color-muted-text)]" aria-live="polite">
                {confirmed ? "A 25% deposit holds the slot. On confirmation you get an email and calendar event." : "Complete each section to preview the front-end booking flow."}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
