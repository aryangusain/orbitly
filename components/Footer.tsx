import Button from "./ui/Button"

const Footer = () => {
  return (
    <footer className="text-text-secondary px-8 py-12 text-text-muted">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    <div>
      <h3 className="text-xl font-bold text-text-primary mb-4">Orbitly</h3>
      <p className="text-sm">Build landing pages faster with smarter tools and AI-powered templates.</p>
    </div>

    <div>
      <h4 className="text-md font-semibold text-text-primary mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#features" className="hover:text-highlight transition">Features</a></li>
        <li><a href="#testimonials" className="hover:text-highlight transition">Testimonials</a></li>
        <li><a href="#pricing" className="hover:text-highlight transition">Pricing</a></li>
        <li><a href="#faq" className="hover:text-highlight transition">FAQ</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-md font-semibold text-text-primary mb-3">Resources</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-highlight transition">Blog</a></li>
        <li><a href="#" className="hover:text-highlight transition">Help Center</a></li>
        <li><a href="#" className="hover:text-highlight transition">Terms of Service</a></li>
        <li><a href="#" className="hover:text-highlight transition">Privacy Policy</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-md font-semibold text-text-primary mb-3">Stay Updated</h4>
      <p className="text-sm mb-4">Subscribe to our newsletter for product updates and tips.</p>
      <form className="flex flex-col gap-2">
        <input type="email" placeholder="Your email" className="px-3 py-2 rounded bg-text-primary/10 text-text-primary text-sm focus:outline-none"/>
        <Button variant="primary" className="text-center">Subscribe</Button>
      </form>
    </div>
  </div>

  <div className="border-t border-t-text-primary/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
    <p>&copy; {new Date().getFullYear()} Orbitly. All rights reserved.</p>
    <div className="flex gap-4 mt-4 md:mt-0">
      <a href="#" aria-label="Twitter" className="hover:text-highlight transition">Twitter</a>
      <a href="#" aria-label="LinkedIn" className="hover:text-highlight transition">LinkedIn</a>
      <a href="#" aria-label="GitHub" className="hover:text-highlight transition">GitHub</a>
    </div>
  </div>
</footer>

  )
}
export default Footer