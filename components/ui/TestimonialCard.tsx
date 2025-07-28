import SectionWrapper from "../SectionWrapper";

const TestimonialCard = ({image, name, comment}: {image: string, name: string, comment: string}) => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-[10px] bg-text-primary/5 py-[20px] px-[40px] rounded-md">
          <div className="flex gap-[10px] items-center">
            <img src={image} className="size-10 rounded-full"/>
            <div className="font-semibold text-text-primary">{name}</div>
          </div>
          <div className="text-text-muted text-sm">{comment}</div>
      </div>
    </SectionWrapper>
  )
}
export default TestimonialCard