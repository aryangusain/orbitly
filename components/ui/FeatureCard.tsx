import SectionWrapper from "../SectionWrapper"

const FeatureCard = ({title, description, icon}: {title: string, description: string, icon: React.ReactNode}) => {
  return (
    <SectionWrapper className="flex">
      <div className="row-span-1 col-span-1 flex flex-col gap-[10px] items-start justify-start py-[25px] px-[30px] bg-neutral-200 rounded-md ">
          <SectionWrapper>
            <div className="flex gap-[10px]">
                {icon}
                <div className="text-background font-semibold">{title}</div>
            </div>
          </SectionWrapper>
          <SectionWrapper>
            <div className="text-neutral-600 text-sm">{description}</div>
          </SectionWrapper>
      </div>
    </SectionWrapper>
  )
}
export default FeatureCard