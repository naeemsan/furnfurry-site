import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { FAQS } from "@/data/constants";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faqs" variant="default" data-ocid="faq.section">
      <Container narrow>
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Everything you want to know about commissioning a custom fursuit from FurNFurry."
        />
        <div className="space-y-3" data-ocid="faq.list">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                data-ocid={`faq.item.${i + 1}`}
                className={`rounded-2xl border overflow-hidden transition-smooth ${
                  isOpen
                    ? "border-primary/30 bg-primary/3 shadow-subtle"
                    : "border-border bg-card"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  data-ocid={`faq.toggle.${i + 1}`}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-smooth hover:bg-primary/5 gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold transition-smooth ${
                        isOpen
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-semibold text-foreground leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-[3.75rem]">
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Still have questions?{" "}
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            Send us a message ↓
          </button>
        </motion.p>
      </Container>
    </Section>
  );
}
