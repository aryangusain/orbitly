import { IconArrowDown, IconChevronCompactDown, IconChevronDown } from "@tabler/icons-react"
import SectionHeading from "./SectionHeading"

const FAQCard = ({question, answer}: {question: string, answer: string}) => {
  return (
    <div className="py-[25px] px-[40px] flex flex-col gap-[10px] border-b-1 border-b-highlight bg-neutral-200">
      <div className="flex justify-between items-center">
        <div className="text-neutral-700 font-medium">{question}</div>
        <IconChevronDown className="text-highlight size-5"/>
      </div>
      <div className="text-neutral-600 hidden">{answer}</div>
    </div>
  )
}
export default FAQCard