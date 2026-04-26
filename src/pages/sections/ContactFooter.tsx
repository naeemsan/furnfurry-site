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
import {
  BadgeCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileImage,
  Globe2,
  Mail,
  MapPin,
  Paperclip,
  Send,
  ShieldCheck,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  SiBluesky,
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiX,
} from "react-icons/si";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const BUDGET_RANGES = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,000",
  "$2,000 – $3,500",
  "$3,500 – $6,000+",
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

const STYLE_OPTIONS = [
  "Kemono",
  "Toony",
  "Semi-Realistic",
  "Plushy",
  "Not sure yet",
];

const TRUST_POINTS = [
  "Personalized quote before production",
  "Reference images supported",
  "Payment plans available for larger builds",
  "Friendly guidance for first-time commissioners",
];

const SOCIAL_LINKS = [
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/fur_n_furry/",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: SiX,
    href: "https://x.com/FurNFurry",
    label: "Twitter/X",
    color: "hover:text-foreground",
  },
  {
    icon: SiTiktok,
    href: "https://www.tiktok.com/@fur_n_furry",
    label: "TikTok",
    color: "hover:text-foreground",
  },
  {
    icon: SiFacebook,
    href: "https://www.facebook.com/people/Furnfurry/61573469704773/",
    label: "Facebook",
    color: "hover:text-blue-600",
  },
  {
    icon: SiBluesky,
    href: "https://bsky.app/profile/furnfurry.com",
    label: "Bluesky",
    color: "hover:text-sky-500",
  },
];

interface FormValues {
  name: string;
  email: string;
  fursonaName: string;
  commissionType: string;
  style: string;
  budget: string;
  notes: string;
}

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      fursonaName: "",
      commissionType: "",
      style: "",
      budget: "",
      notes: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const uploadedUrls: string[] = [];

      for (const file of selectedFiles) {
        const cloudinaryFormData = new FormData();
        cloudinaryFormData.append("file", file);
        cloudinaryFormData.append("upload_preset", "furnfurry_unsigned");

        const cloudinaryRes = await fetch(
          "https://api.cloudinary.com/v1_1/dzpde74hy/image/upload",
          {
            method: "POST",
            body: cloudinaryFormData,
          },
        );

        const cloudinaryData = await cloudinaryRes.json();

        if (!cloudinaryRes.ok) {
          throw new Error("Image upload failed");
        }

        uploadedUrls.push(cloudinaryData.secure_url);
      }

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
          style: data.style,
          budget: data.budget,
          notes: data.notes,
          referenceImages: uploadedUrls.join("\n"),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setSelectedFiles([]);
        reset();
        if (fileRef.current) fileRef.current.value = "";
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Upload or form submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-border bg-card"
      data-ocid="contact.section"
    >
      <div className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-8 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-8 right-8 h-[260px] w-[260px] rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 h-[220px] w-[220px] rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-[2rem] border border-primary/20 bg-primary/5 p-7 shadow-subtle backdrop-blur-md md:p-8"
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
                <Sparkles className="h-4 w-4" strokeWidth={1.8} />
                Request a Quote
              </span>

              <h2 className="font-display text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
                Start Your Custom Fursuit Commission
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Send your fursona reference, preferred style, budget range, and
                build idea. We’ll review everything and help you understand the
                best direction before you commit.
              </p>

              <div className="mt-8 grid gap-3">
                {TRUST_POINTS.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card/70 px-4 py-3"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.8}
                    />
                    <span className="text-sm text-muted-foreground">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-border bg-card/70 p-4">
                  <Clock className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-sm font-bold text-foreground">
                    Reply Time
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Usually within 1–2 business days.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card/70 p-4">
                  <FileImage className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-sm font-bold text-foreground">
                    Reference Upload
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Upload ref sheets, sketches, or inspiration images.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card/70 p-4">
                  <ShieldCheck className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-sm font-bold text-foreground">
                    No Pressure
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Asking for a quote does not lock you into an order.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="rounded-[2rem] border border-primary/25 bg-card p-8 text-center shadow-elevated md:p-10"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <BadgeCheck
                      className="h-7 w-7 text-primary"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="font-display text-3xl font-bold text-foreground">
                    Quote Request Sent
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                    Thanks! We’ll review your details and get back to you within
                    1–2 business days with next steps.
                  </p>

                  <Button
                    type="button"
                    onClick={() => scrollTo("home")}
                    className="mt-7 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Back to Top
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-[2rem] border border-border bg-card p-6 shadow-elevated md:p-8"
                  data-ocid="contact.form"
                >
                  <div className="mb-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      Commission Details
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                      Tell us about your fursona
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      The more details you share, the better we can estimate your
                      build.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-name">Name *</Label>
                        <Input
                          id="contact-name"
                          placeholder="Your name"
                          className="rounded-xl"
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive">
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
                          <p className="text-xs text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="contact-fursona">
                        Fursona / Character Name
                      </Label>
                      <Input
                        id="contact-fursona"
                        placeholder="e.g. Ember the Fox"
                        className="rounded-xl"
                        {...register("fursonaName")}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label>What You Want Made *</Label>
                        <Controller
                          name="commissionType"
                          control={control}
                          rules={{
                            required: "Please select a commission type",
                          }}
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="rounded-xl">
                                <SelectValue placeholder="Select type..." />
                              </SelectTrigger>
                              <SelectContent>
                                {COMMISSION_TYPES.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.commissionType && (
                          <p className="text-xs text-destructive">
                            {errors.commissionType.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label>Preferred Style</Label>
                        <Controller
                          name="style"
                          control={control}
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="rounded-xl">
                                <SelectValue placeholder="Select style..." />
                              </SelectTrigger>
                              <SelectContent>
                                {STYLE_OPTIONS.map((style) => (
                                  <SelectItem key={style} value={style}>
                                    {style}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </div>
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
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Select range..." />
                            </SelectTrigger>
                            <SelectContent>
                              {BUDGET_RANGES.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="contact-notes">Build Details</Label>
                      <Textarea
                        id="contact-notes"
                        placeholder="Tell us about your character, colors, markings, style, deadline, special features, or anything important..."
                        className="min-h-[120px] resize-none rounded-xl"
                        {...register("notes")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Upload Reference Sheet</Label>

                      <button
                        type="button"
                        onClick={() => fileRef.current?.click()}
                        className="group flex w-full items-center gap-4 rounded-2xl border-2 border-dashed border-border bg-background/40 px-5 py-5 text-left transition-smooth hover:border-primary/40 hover:bg-primary/5"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          {selectedFiles.length > 0 ? (
                            <Paperclip
                              className="h-5 w-5 text-primary"
                              strokeWidth={1.8}
                            />
                          ) : (
                            <UploadCloud
                              className="h-5 w-5 text-primary"
                              strokeWidth={1.8}
                            />
                          )}
                        </span>

                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold text-foreground">
                            {selectedFiles.length > 0
                              ? `${selectedFiles.length} file(s) selected`
                              : "Click to upload ref sheets or inspiration"}
                          </span>
                          <span className="mt-1 block text-xs text-muted-foreground">
                            PNG, JPG, WEBP, or PDF accepted
                          </span>
                        </span>
                      </button>

                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*,.pdf"
                        multiple
                        className="sr-only"
                        onChange={(e) => {
                          const files = Array.from(e.target.files || []);
                          setSelectedFiles(files);
                        }}
                      />
                    </div>

                    {submitError && (
                      <p className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-center text-sm text-destructive">
                        {submitError}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-auto w-full rounded-2xl bg-primary py-4 text-base font-bold text-primary-foreground shadow-subtle hover:bg-primary/90 hover:shadow-elevated"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                          Sending Request...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="h-5 w-5" strokeWidth={1.8} />
                          Send My Quote Request
                        </span>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      By submitting, you’re requesting a quote — not placing a
                      confirmed order yet.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-card/95 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img src="/logo.png" alt="FurNFurry" className="h-16 w-auto" />
                <span className="font-display text-2xl font-bold text-foreground">
                  FurNFurry
                </span>
              </div>

              <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Custom fursuits made with creativity, care, and character. Every
                commission is built around your unique fursona.
              </p>

              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/40 text-muted-foreground shadow-subtle transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_24px_rgba(139,92,246,0.18)] ${color}`}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
                Navigation
              </h4>

              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href.replace("#", ""))}
                      className="group text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span className="bg-gradient-to-r from-primary to-primary bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_1px]">
                        {link.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
                Commissions
              </h4>

              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Fursuit Heads",
                  "Hand Paws",
                  "Feet Paws",
                  "Tails",
                  "Partials",
                  "Full Suits",
                ].map((item) => (
                  <li key={item} className="transition-colors hover:text-primary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 shadow-subtle backdrop-blur-md">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
                Contact
              </h4>

              <div className="space-y-4 text-sm text-muted-foreground">
                <a
                  href="mailto:furnfurry@outlook.com"
                  className="flex items-start gap-3 transition-colors hover:text-primary"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>furnfurry@outlook.com</span>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=16%20Surrey%20Lane%2C%20Belle%20Mead%2C%20NJ%2008502%2C%20USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-primary"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    16 Surrey Lane
                    <br />
                    Belle Mead, NJ 08502
                    <br />
                    USA
                  </span>
                </a>

                <div className="flex items-start gap-3">
                  <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Worldwide Shipping Available</span>
                </div>

                <p className="text-xs text-muted-foreground">
  Click the WhatsApp icon on the screen to chat instantly
</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
            <p className="text-center text-xs text-muted-foreground sm:text-left">
              © {new Date().getFullYear()} FurNFurry. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="h-3.5 w-3.5" />
              Designed for FurNFurry
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}