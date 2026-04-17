import { createActor } from "@/backend";
import { PawPrint } from "@/components/ui/PawPrint";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { NAV_LINKS } from "@/data/constants";
import { Paperclip, Send } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useActor } from "@caffeineai/core-infrastructure";
import { SiDiscord, SiInstagram, SiTiktok, SiX } from "react-icons/si";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const BUDGET_RANGES = [
  "Under $200",
  "$200 – $500",
  "$500 – $1,000",
  "$1,000 – $2,000",
  "$2,000+",
  "Not sure yet",
];

const COMMISSION_TYPES = [
  "Fursuit Head",
  "Hand Paws",
  "Feet Paws",
  "Tail",
  "Partial Suit",
  "Full Suit",
  "Multiple / Not Sure Yet",
];

const SOCIAL_LINKS = [
  {
    icon: SiInstagram,
    href: "https://instagram.com",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: SiX,
    href: "https://x.com",
    label: "Twitter/X",
    color: "hover:text-foreground",
  },
  {
    icon: SiTiktok,
    href: "https://tiktok.com",
    label: "TikTok",
    color: "hover:text-foreground",
  },
  {
    icon: SiDiscord,
    href: "https://discord.gg",
    label: "Discord",
    color: "hover:text-indigo-500",
  },
];

interface FormValues {
  name: string;
  email: string;
  fursonaName: string;
  commissionType: string;
  budget: string;
  notes: string;
}

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const { actor } = useActor(createActor);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      fursonaName: "",
      commissionType: "",
      budget: "",
      notes: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/mqewpnbk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          fursonaName: data.fursonaName,
          commissionType: data.commissionType,
          budget: data.budget,
          notes: data.notes,
          referenceSheet: fileName || "No file attached",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError("Form send nahi hua. Dobara try karo.");
      }
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-card border-t border-border"
      data-ocid="contact.section"
    >
      {/* Contact form section */}
      <div className="relative overflow-hidden bg-muted/40 py-20">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <PawPrint
            className="absolute top-8 right-8 text-primary"
            size={100}
            opacity={0.05}
          />
          <PawPrint
            className="absolute bottom-8 left-8 text-secondary"
            size={80}
            opacity={0.06}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Start Your Commission
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill in the details below and we'll get back to you with a
              personalized quote.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              data-ocid="contact.success_state"
              className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Quote Request Sent!
              </h3>
              <p className="text-muted-foreground">
                Thanks! We'll review your details and get back to you within 1-2
                business days with a personalized quote.
              </p>
              <Button
                type="button"
                onClick={() => scrollTo("home")}
                className="mt-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
              >
                Back to Top
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-border bg-card p-6 shadow-elevated space-y-5 md:p-8"
              data-ocid="contact.form"
            >
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="contact-name">Name *</Label>
                  <Input
                    id="contact-name"
                    placeholder="Your name"
                    data-ocid="contact.name.input"
                    className="rounded-xl"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p
                      data-ocid="contact.name.field_error"
                      className="text-xs text-destructive mt-1"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    data-ocid="contact.email.input"
                    className="rounded-xl"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p
                      data-ocid="contact.email.field_error"
                      className="text-xs text-destructive mt-1"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Fursona name */}
              <div className="space-y-1.5">
                <Label htmlFor="contact-fursona">
                  Fursona / Character Name
                </Label>
                <Input
                  id="contact-fursona"
                  placeholder="e.g. Ember the Fox"
                  data-ocid="contact.fursona_name.input"
                  className="rounded-xl"
                  {...register("fursonaName")}
                />
              </div>

              {/* Commission type + Budget */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>What You Want Made *</Label>
                  <Controller
                    name="commissionType"
                    control={control}
                    rules={{ required: "Please select a commission type" }}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger
                          data-ocid="contact.commission_type.select"
                          className="rounded-xl"
                        >
                          <SelectValue placeholder="Select type..." />
                        </SelectTrigger>
                        <SelectContent>
                          {COMMISSION_TYPES.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.commissionType && (
                    <p
                      data-ocid="contact.commission_type.field_error"
                      className="text-xs text-destructive mt-1"
                    >
                      {errors.commissionType.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label>Budget Range</Label>
                  <Controller
                    name="budget"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger
                          data-ocid="contact.budget.select"
                          className="rounded-xl"
                        >
                          <SelectValue placeholder="Select range..." />
                        </SelectTrigger>
                        <SelectContent>
                          {BUDGET_RANGES.map((r) => (
                            <SelectItem key={r} value={r}>
                              {r}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <Label htmlFor="contact-notes">Additional Notes</Label>
                <Textarea
                  id="contact-notes"
                  placeholder="Tell us about your character, desired style, any special features..."
                  data-ocid="contact.notes.textarea"
                  className="rounded-xl min-h-[100px] resize-none"
                  {...register("notes")}
                />
              </div>

              {/* Reference sheet upload */}
              <div className="space-y-1.5">
                <Label>Upload Reference Sheet</Label>
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  data-ocid="contact.ref_sheet.upload_button"
                  className="flex w-full items-center gap-3 rounded-xl border-2 border-dashed border-border px-5 py-4 text-sm text-muted-foreground transition-smooth hover:border-primary/40 hover:bg-primary/5 text-left"
                >
                  <Paperclip
                    size={18}
                    className="flex-shrink-0 text-muted-foreground"
                  />
                  <span className="truncate">
                    {fileName ||
                      "Click to upload your ref sheet (PNG, JPG, PDF)"}
                  </span>
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*,.pdf"
                  className="sr-only"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setFileName(file.name);
                  }}
                />
              </div>

              {/* Error state */}
              {submitError && (
                <p
                  data-ocid="contact.error_state"
                  className="text-sm text-destructive text-center"
                >
                  {submitError}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                data-ocid="contact.submit.primary_button"
                className="w-full rounded-xl bg-primary py-3 text-base font-bold text-primary-foreground shadow-subtle hover:bg-primary/90 hover:shadow-elevated transition-smooth h-auto"
              >
                {isSubmitting ? (
                  <span
                    data-ocid="contact.loading_state"
                    className="flex items-center gap-2"
                  >
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send My Quote Request
                  </span>
                )}
              </Button>
            </motion.form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-card border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                  <PawPrint
                    size={20}
                    opacity={1}
                    className="text-primary-foreground"
                  />
                </div>
                <span className="font-display text-xl font-bold text-foreground">
                  Fur<span className="text-primary">N</span>Furry
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-5">
                Custom fursuits made with creativity, care, and character. Every
                commission is built around your unique fursona.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    data-ocid={`footer.${label.toLowerCase().replace(/\//g, "_")}.link`}
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground transition-smooth hover:border-primary/30 hover:bg-primary/5 ${color}`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                Navigation
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href.replace("#", ""))}
                      data-ocid={`footer.nav.${link.label.toLowerCase()}.link`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commission types */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                Commissions
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Fursuit Heads",
                  "Hand Paws",
                  "Feet Paws",
                  "Tails",
                  "Partials",
                  "Full Suits",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} FurNFurry. All rights reserved.
              Custom fursuits made with creativity, care, and character.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Built with love using caffeine.ai ☕
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
