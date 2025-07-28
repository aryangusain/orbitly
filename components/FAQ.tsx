import { useState } from "react";
import FAQCard from "./ui/FAQCard";
import SectionHeading from "./ui/SectionHeading";
import SectionWrapper from "./SectionWrapper";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need coding skills to use Orbitly?",
      answer: "Nope! Orbitly is built for everyone. You can launch a stunning landing page without writing a single line of code.",
    },
    {
      question: "Can I connect my own custom domain?",
      answer: "Yes! With our Pro plan, you can link any custom domain in just a few clicks.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely. Try all features for free for 7 days—no credit card required.",
    },
    {
      question: "What happens after my trial ends?",
      answer: "Your site stays live, but advanced features like analytics and branding tools will be locked until you upgrade.",
    },
    {
      question: "Can I upgrade or cancel my plan anytime?",
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription directly from your dashboard whenever you like.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0); // open first by default

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? -1 : index)); // toggle same to close
  };

  return (
    <div id="faq" className="flex flex-col items-center my-[60px]">
      <SectionHeading>FAQs</SectionHeading>
      <SectionWrapper>
      <div className="flex flex-col gap-0 rounded-lg overflow-hidden w-[50rem]">
        {faqs.map((faq, index) => (
          <FAQCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      </SectionWrapper>
    </div>
  );
};

export default FAQ;
