import Button from "./ui/Button"
import Partition from "./ui/Partition"
import SectionWrapper from "./SectionWrapper"

const Hero = () => {
  return (
    <div 
        className="flex items-center justify-center w-full relative h-[30rem]"
    >   
        <div className="w-fit">
          <SectionWrapper className="flex flex-col gap-[30px]">
            <div className="flex flex-col items-center gap-[20px]">
                  <h2 className="text-6xl font-semibold text-center w-[60rem]">Launch your startup to the stars</h2>
                  <h3 className="text-lg text-center text-text-muted w-[30rem]">Build stunning landing pages, manage your brand, and attract customers—all in one platform</h3>
            </div>
            <div className="flex gap-[10px] items-center justify-center">
                <Button variant="secondary">Watch Demo</Button>
                <Button variant="primary" className="">Start Free Trial</Button>
            </div>
          </SectionWrapper>
        </div>

        <img src='/planet.png' className="absolute translate-x-[700px] rotate-270 opacity-90 w-[60rem]"/>
    </div>
  )
}
export default Hero