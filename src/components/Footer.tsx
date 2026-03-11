import { Linkedin } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
              <span className="text-white font-extrabold text-sm leading-none">N</span>
            </div>
            <div>
              <span className="text-white font-bold text-sm">Neurolyx Technologies</span>
              <span className="text-dark-600 text-xs ml-2">Pvt. Ltd.</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#services" className="text-sm text-dark-500 hover:text-white transition-colors">Services</a>
            <a href="#products" className="text-sm text-dark-500 hover:text-white transition-colors">Products</a>
            <a href="#about" className="text-sm text-dark-500 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-dark-500 hover:text-white transition-colors">Contact</a>
            <a
              href="https://www.linkedin.com/company/neurolyx-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-primary-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-dark-600">
            &copy; {year} Neurolyx Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
