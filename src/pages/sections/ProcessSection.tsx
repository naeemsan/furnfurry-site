import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import {
  ClipboardCheck,
  CreditCard,
  MessageCircle,
  PackageCheck,
  PenTool,
} from "lucide-react";
import { motion } from "motion/react";

const PROCESS_STEPS = [
  {
    icon: MessageCircle,
    title: "Send Your Fursona",
    description:
      "Share your reference sheet, species, style preference, budget range, and the details you want included.",
  },
  {
    icon: PenTool,
    title: "Foam Base Sculpting",
    description:
      "We hand-sculpt a custom foam base, shaping your character’s structure, proportions, and expression from scratch.",
  },
  {
    icon: ClipboardCheck,
    title: "Quote & Deposit",
    description:
      "You receive a personalized quote. Once approved, your commission slot is secured with a deposit.",
  },
  {
    icon: CreditCard,
    title: "Build Updates",
    description:
      "Your fursuit is built in stages with progress updates, so you can follow your character coming to life.",
  },
  {
    icon: PackageCheck,
    title: "Final Delivery",
    description:
      "After final approval and payment, your finished suit is safely packed and shipped to your doorstep.",
  },
];

const FOAM_IMAGES = [
  {
    src: "/process-foam-1.png",
    alt: "Foam fursuit head base front view",
    label: "Base Frame Example",
  },
  {
    src: "/process-foam-2.png",
    alt: "Foam fursuit head base angled view",
    label: "Angle Detail Example",
  },
];

export function ProcessSection() {
  return (
    <Section
      id="process"
      variant="default"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <Container>
        <SectionHeading
          badge="Commission Journey"
          title="From Fursona Reference to Finished Suit"
          subtitle="A clear, guided process designed to make your custom fursuit feel exciting, organized, and stress-free."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card/80 to-background p-5 shadow-subtle backdrop-blur-md md:p-6"
        >
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                Behind The Scenes
              </span>

              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                Foam Base Sculpting
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Every custom build starts with structure. These workshop shots
                showcase different fursuit bases at various stages of shaping —
                not the same character, but real examples of our process.
              </p>
            </div>

            <span className="w-fit rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-semibold text-muted-foreground">
              Early build stages
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {FOAM_IMAGES.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-subtle transition-smooth hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_0_35px_rgba(139,92,246,0.18)]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[430px] w-full object-contain scale-[1.25] contrast-110 brightness-95 transition duration-700 group-hover:scale-[1.32]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:bg-primary/5" />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                  {image.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative mt-6 overflow-hidden rounded-3xl border border-primary/20 bg-background/40 shadow-subtle transition-smooth hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]"
          >
            <img
              src="/process-clean-head.png"
              alt="Refined foam head shaping stage"
              className="h-[560px] w-full object-contain scale-[1.1] bg-black/20 transition duration-700 group-hover:scale-[1.16]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/45 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
              Advanced Shaping Example
            </div>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex items-center ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl border border-primary/30 bg-background shadow-elevated md:left-1/2"
                  >
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                  </motion.div>

                  <div className="ml-16 w-full rounded-3xl border border-border bg-card/80 p-6 shadow-subtle backdrop-blur-md transition-smooth hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_0_30px_rgba(139,92,246,0.14)] md:ml-0 md:w-[44%]">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}