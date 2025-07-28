import { IconCheck, IconX } from "@tabler/icons-react"
import SectionHeading from "./ui/SectionHeading"
import Button from "./ui/Button"
import SectionWrapper from "./SectionWrapper"

const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col justify-center items-center my-[40px] w-full">
      <SectionHeading>Pricing</SectionHeading>
      
      <div className="flex justify-center items-center gap-[20px]">

        <SectionWrapper>
          <div className="col-span-1 row-span-1 flex flex-col py-[20px] px-[50px] gap-[20px] bg-text-primary/5 rounded-xl text-text-primary ">
              <SectionWrapper>
                <div>
                    <p className="text-4xl font-medium">Free Plan</p>
                    <p className="text-4xl ">$0 <span className="text-base text-text-primary/40">/month</span></p>
                </div>
              </SectionWrapper>
              <SectionWrapper>
                <ul className="flex flex-col gap-[4px]">
                  <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/> 1 landing page</li>
                    <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Basic Analytics</li>
                    <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Email support</li>
                    <li className="flex items-center gap-2"><IconX className="size-4 text-red-500"/>Full Branding Suite</li>
                    <li className="flex items-center gap-2"><IconX className="size-4 text-red-500"/>Priority Support</li>
                    <li className="flex items-center gap-2"><IconX className="size-4 text-red-500"/>Custom Domains</li>
                </ul>
              </SectionWrapper>
              <Button variant="secondary" className="text-center shadow-md">Start Free Plan</Button>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="flex flex-col py-[30px] px-[50px] gap-[20px] bg-text-primary/5 rounded-xl  text-text-primary shadow-sm shadow-highlight">
              <SectionWrapper>
                <div>
                  <p className="text-4xl font-medium ">Pro Plan</p>
                  <p className="text-4xl ">$14.99 <span className="text-base text-neutral-600">/month</span></p>
                </div>
              </SectionWrapper>
              <SectionWrapper>
                <ul className="flex flex-col gap-[6px]">
                    <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Unlimited landing pages</li>
                    <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Complete Analytics</li>
                    <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Email support</li>
                    <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Full Branding Suite</li>
                    <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Priority Support</li>
                    <li className="flex items-center gap-2"><IconCheck className="size-4 text-green-500"/>Custom Domains</li>
                </ul>
              </SectionWrapper>
              <SectionWrapper>
                <Button variant="primary" className="text-center shadow-lg">Buy Pro Plan</Button>
              </SectionWrapper>
          </div>
        </SectionWrapper>
      </div>
    </div>
  )
}
export default Pricing