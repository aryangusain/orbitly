import Button from "./ui/Button"
import Partition from "./ui/Partition"
import SectionWrapper from "./SectionWrapper"

const Hero = () => {
  return (
    <div 
        id="home"
        className="flex flex-col gap-[40px] items-center justify-center py-[180px] mt-[60px] w-full relative"
    >   
        <div id="bg-container"></div>
        <div className="flex flex-col items-center gap-[20px]">
            <SectionWrapper>
              <h2 className="text-5xl font-semibold text-center w-[50rem]">Launch your startup to the stars</h2>
            </SectionWrapper>
            <Partition className="-mt-5 -z-1 w-[60%]"/>
            <SectionWrapper>
              <h3 className="text-xl text-center text-text-muted w-[40rem]">Build stunning landing pages, manage your brand, and attract customers—all in one platform</h3>
            </SectionWrapper>
        </div>
        <SectionWrapper>
          <div className="flex gap-[10px] items-center justify-center">
              <Button variant="secondary">Watch Demo</Button>
              <Button variant="primary" className="">Start Free Trial</Button>
          </div>
        </SectionWrapper>
    </div>
  )
}
export default Hero