const Footer = () => {
  return (
    <div 
        className="text-text-muted flex flex-col text-xs gap-[10px] items-center justify-center pb-6"
    >
        <div>&copy; {new Date().getFullYear()} Orbitly. All rights reserved. </div>
        <div><span className="hover:underline cursor-pointer">Privacy Policy</span> | <span className="hover:underline cursor-pointer">Terms of Service</span></div>
    </div>
  )
}
export default Footer