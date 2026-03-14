import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroBg from "@/assets/hero-bg.jpg";

const faqs = [
  {
    q: "If it's free, what's the catch?",
    a: "There is no catch. Where Winds Meet is a fully free game available on Steam. No pay-to-win mechanics, no mandatory subscriptions, no credit card required. The developers have made the complete game available at zero cost. Just download and play.",
  },
  {
    q: "Is the free version limited?",
    a: "No. You get the complete, full game — the entire open world, all combat systems, all professions, the full main story, everything. There is no 'premium version' locked behind a paywall. What 50,000+ players are enjoying? That's exactly what you get. Free.",
  },
  {
    q: "Will it always be free?",
    a: "It is currently 100% free on Steam. We recommend downloading now to guarantee your free access. Game pricing can change — but if you download today, it's yours forever.",
  },
  {
    q: "Can my PC run this?",
    a: "Where Winds Meet is optimized for a wide range of Windows PC configurations. Check the minimum requirements on the Steam page — they're designed to be accessible for most modern computers.",
  },
  {
    q: "Is it really as good as you say?",
    a: "Don't take our word for it — it has an Overwhelmingly Positive rating on Steam from real players who paid exactly what you will: nothing. Real people, real reviews, real verdict: it's exceptional.",
  },
  {
    q: "What if I don't like it?",
    a: "Then you delete it. You've lost nothing but 5 minutes of download time. But based on 50,000+ players? You're going to love it.",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div ref={ref} className="scroll-reveal mx-auto max-w-3xl px-4">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-foreground md:text-5xl">
          You Might Be Wondering...
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-lg border border-border bg-card px-6"
            >
              <AccordionTrigger className="font-display text-lg font-semibold text-gold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
