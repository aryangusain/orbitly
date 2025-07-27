import { IconChevronDown, IconX } from "@tabler/icons-react";
import SectionWrapper from "../SectionWrapper";

const FAQCard = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <SectionWrapper>
      <div className="py-[25px] px-[40px] flex flex-col gap-[10px] border-b-1 border-b-highlight bg-neutral-200 cursor-pointer" onClick={onToggle}>
        <div className="flex justify-between items-center">
          <div className="text-neutral-700 font-medium">{question}</div>
          {isOpen ? (
            <IconX className="text-highlight size-5" />
          ) : (
            <IconChevronDown className="text-highlight size-5" />
          )}
        </div>
        <div className={`text-neutral-600 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          {answer}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FAQCard;
