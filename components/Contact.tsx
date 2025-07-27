import Button from "./ui/Button"

const Contact = () => {
  return (
    <div id="contact" className="bg-neutral-200 px-[40px] py-[20px] rounded-lg flex flex-col gap-[10px] w-[65%]">
      <div className="text-neutral-700 "><span className="font-medium text-neutral-800 text-[17px]">Ready to deploy?</span> Start building with a free account. Speak to an expert for your Pro or Enterprise needs.</div>
      <Button variant="primary" className="w-fit">Talk to an Expert</Button>
    </div>
  )
}
export default Contact