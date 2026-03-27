import { Mail, MapPin, Linkedin, ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-16 mt-8">
      <div className="absolute inset-0 bg-radial-section" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <p className="text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Let's Build Something<br />
              <span className="text-gradient">Together</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
              Whether you have a product idea, need a technology partner, or want to explore
              how AI can transform your business — we'd love to hear from you.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-600/10 border border-primary-600/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Email</p>
                  <a href="mailto:neurolyxtechnologies@gmail.com" className="text-slate-900 hover:text-primary-400 transition-colors font-medium">
                    neurolyxtechnologies@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-600/10 border border-primary-600/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Headquarters</p>
                  <p className="text-slate-900 font-medium">India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-600/10 border border-primary-600/10 flex items-center justify-center shrink-0">
                  <Linkedin size={20} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/company/neurolyx-technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:text-primary-400 transition-colors font-medium inline-flex items-center gap-1"
                  >
                    Neurolyx Technologies
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — CTA Card */}
          <div className="flex items-center">
            <div className="w-full p-10 rounded-2xl bg-white/60 border border-slate-900/10 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-600/10 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to start a project?</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Tell us about your idea and we'll get back to you within 24 hours
                  with an initial consultation plan.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:neurolyxtechnologies@gmail.com"
                    className="flex items-center justify-center gap-2 w-full px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl hover:from-primary-500 hover:to-primary-400 transition-all shadow-xl shadow-primary-600/20 hover:shadow-primary-600/40"
                  >
                    <Mail size={18} />
                    Send Us an Email
                  </a>

                  <a
                    href="https://www.linkedin.com/company/neurolyx-technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-8 py-4 text-base font-semibold text-slate-700 border border-slate-900/15 rounded-xl hover:bg-slate-900/5 hover:text-slate-900 hover:border-slate-900/20 transition-all"
                  >
                    <Linkedin size={18} />
                    Connect on LinkedIn
                  </a>
                </div>

                <p className="mt-6 text-center text-sm text-slate-400">
                  No spam, no obligations — just a conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
