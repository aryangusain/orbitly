import SectionWrapper from "../SectionWrapper"

const SectionHeading = ({children}: {children: React.ReactNode}) => {
  return (
    <SectionWrapper className="flex justify-center">
      <div className="text-4xl font-semibold mb-[60px]">{children}</div>
    </SectionWrapper>
  )
}
export default SectionHeading