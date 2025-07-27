import { IconCheck, IconX } from "@tabler/icons-react"
import SectionHeading from "./ui/SectionHeading"
import Button from "./ui/Button"
import SectionWrapper from "./SectionWrapper"

const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col justify-center items-center">
      <SectionHeading>Pricing</SectionHeading>
      <div className="flex justify-center items-center gap-[20px]">
        <div className="col-span-1 row-span-1 flex flex-col py-[20px] px-[50px] gap-[20px] bg-neutral-100 rounded-xl text-neutral-700">
            <div>
              <SectionWrapper>
                <p className="text-4xl font-medium text-neutral-800">Free Plan</p>
              </SectionWrapper>
              <SectionWrapper>
                <p className="text-4xl ">$0 <span className="text-base text-neutral-600">/month</span></p>
              </SectionWrapper>
            </div>
          <ul className="flex flex-col gap-[4px]">
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/> 1 landing page</li>
            </SectionWrapper>
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Basic Analytics</li>
            </SectionWrapper>
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Email support</li>
            </SectionWrapper>
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconX className="size-4 text-red-500"/>Full Branding Suite</li>
            </SectionWrapper>
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconX className="size-4 text-red-500"/>Priority Support</li>
            </SectionWrapper>
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconX className="size-4 text-red-500"/>Custom Domains</li>
            </SectionWrapper>
          </ul>
          <SectionWrapper>
            <Button variant="secondary" className="text-center shadow-md">Start Free Plan</Button>
          </SectionWrapper>
        </div>

        <div className="flex flex-col py-[30px] px-[50px] gap-[20px] bg-neutral-100 rounded-xl text-background">
          <SectionWrapper>
            <div>
              <p className="text-4xl font-medium ">Pro Plan</p>
              <p className="text-4xl ">$14.99 <span className="text-base text-neutral-600">/month</span></p>
            </div>
          </SectionWrapper>
          <ul className="flex flex-col gap-[6px]">
            <SectionWrapper className="">
              <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Unlimited landing pages</li>
            </SectionWrapper>
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Complete Analytics</li>
            </SectionWrapper>
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Email support</li>
            </SectionWrapper>
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Full Branding Suite</li>
            </SectionWrapper>
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Priority Support</li>
            </SectionWrapper>
            <SectionWrapper>
              <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Custom Domains</li>
            </SectionWrapper>
          </ul>
          <SectionWrapper>
            <Button variant="primary" className="text-center shadow-lg">Buy Pro Plan</Button>
          </SectionWrapper>
        </div>
      </div>
    </div>
  )
}
export default Pricing