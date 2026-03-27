import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid bg-radial-hero" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-500/8 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
        {/* Badge */}
        <div className="animate-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow bg-primary-600/5 mb-8">
          <Sparkles size={14} className="text-primary-400" />
          <span className="text-sm text-primary-300 font-medium">Building the Future of Technology</span>
        </div>

        {/* Headline */}
        <h1 className="animate-slide-up-delayed text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] max-w-5xl mx-auto">
          <span className="text-slate-900">We Build </span>
          <span className="text-gradient">Intelligent</span>
          <br />
          <span className="text-slate-900">Software Products</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-slide-up-delayed-2 mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Neurolyx Technologies crafts AI-powered platforms, cloud-native applications,
          and enterprise solutions that drive real business transformation.
        </p>

        {/* CTAs */}
        <div className="animate-slide-up-delayed-2 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl hover:from-primary-500 hover:to-primary-400 transition-all shadow-xl shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5"
          >
            Explore Our Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#products"
            className="flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 border border-slate-900/15 rounded-xl hover:bg-slate-900/5 hover:text-slate-900 hover:border-slate-900/20 transition-all"
          >
            View Our Products
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { value: 'AI-First', label: 'Engineering Approach' },
            { value: 'Full Stack', label: 'Product Development' },
            { value: 'Cloud', label: 'Native Architecture' },
            { value: '24/7', label: 'Reliable Systems' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  )
}
