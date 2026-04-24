import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FAQS = [
  {
    question: "How do I start a custom fursuit commission?",
    answer:
      "Simply send us your character reference, idea, or inspiration images. We’ll guide you through the best build type, style, and price range before anything is confirmed.",
  },
  {
    question: "How much does a custom fursuit cost?",
    answer:
      "Pricing depends on the type of suit, complexity, materials, and features. Heads, partials, and full suits all have different ranges. You’ll receive a personalized quote before any work begins.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. For larger builds, payments can be split into stages during your commission timeline. We agree on the schedule before starting so everything stays clear.",
  },
  {
    question: "How long does it take to make a fursuit?",
    answer:
      "Build time depends on the type of suit and queue. On average, full suits take a few months. You’ll be given a timeline estimate before your commission starts.",
  },
  {
    question: "Do I need a reference sheet?",
    answer:
      "A reference sheet is preferred, but not required. You can also send images, sketches, or describe your character — we’ll help you figure things out.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping costs and delivery times will be discussed based on your location.",
  },
  {
    question: "Can I request changes during the build?",
    answer:
      "Small adjustments may be possible depending on the stage of the build. Major changes after production starts may not be possible, which is why planning is important.",
  },
  {
    question: "Are custom fursuit orders refundable?",
    answer:
      "Custom work is generally non-refundable once production begins. This is because each suit is made specifically for your character.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faqs" variant="default">
      <Container narrow>
        <SectionHeading
          badge="Questions"
          title="Before You Commission a Fursuit"
          subtitle="Everything you need to know before starting your custom build — from pricing and timelines to payments and process."
        />

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`rounded-2xl border overflow-hidden transition-smooth ${
                  isOpen
                    ? "border-primary/30 bg-primary/5 shadow-subtle"
                    : "border-border bg-card"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left gap-4"
                >
                  <span className="font-semibold text-foreground leading-snug">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Still unsure about something?
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-2 font-semibold text-primary hover:underline"
          >
            Ask us directly →
          </button>
        </motion.div>
      </Container>
    </Section>
  );
}