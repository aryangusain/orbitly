import SectionWrapper from "../SectionWrapper"

const SectionHeading = ({children}: {children: React.ReactNode}) => {
  return (
    <SectionWrapper className="flex justify-center">
      <div className="text-4xl mb-[40px]">{children}</div>
    </SectionWrapper>
  )
}
export default SectionHeading