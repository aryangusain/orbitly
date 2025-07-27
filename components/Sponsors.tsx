import SectionWrapper from "./SectionWrapper"

const Sponsors = () => {
  return (
      <SectionWrapper>
    <div className="flex flex-col justify-center items-center gap-[20px] w-full -my-16">
        <div className="flex">
          <img src="/TechLaunch.png" className="size-44"></img>
          <img src="/BoostCamp.png" className="size-44"></img>
          <img src="/StartlyVentures.png" className="size-40"></img>
          <img src="/ScaleX.png" className="size-44"></img>
          <img src="/NovaForge.png" className="size-44"></img>
          <img src="/LaunchNest.png" className="size-44"></img>
        </div>
    </div>
      </SectionWrapper>
  )
}
export default Sponsors