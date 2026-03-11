import { Target, Eye, Users, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We push boundaries with AI, cloud-native design, and modern engineering to solve hard problems elegantly.',
  },
  {
    icon: Target,
    title: 'Product Mindset',
    description: 'Every line of code is written with the end-user in mind. We ship products that people genuinely love to use.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Transparent communication, shared ownership, and a flat structure where the best ideas win — no matter who proposes them.',
  },
  {
    icon: Eye,
    title: 'Quality Obsession',
    description: 'We don\'t cut corners. Rigorous testing, code reviews, and continuous improvement are baked into how we work.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 bg-radial-section" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story */}
          <div>
            <p className="text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">About Us</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineering the Next<br />
              <span className="text-gradient">Generation of Products</span>
            </h2>
            <div className="mt-8 space-y-5 text-dark-400 leading-relaxed text-lg">
              <p>
                <strong className="text-white font-semibold">Neurolyx Technologies Private Limited</strong> is
                an IT services and product development company headquartered in India. We specialize in
                building intelligent, scalable software products from the ground up.
              </p>
              <p>
                Our team brings deep expertise in full-stack development, artificial intelligence,
                cloud infrastructure, and user experience design. We combine these capabilities
                to deliver products that are both technically excellent and a joy to use.
              </p>
              <p>
                Whether we're building our own products or partnering with visionary teams,
                our mission stays the same: <span className="text-white">transform ideas into software
                that makes a real impact.</span>
              </p>
            </div>

            {/* Company badge */}
            <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-dark-900/60 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">N</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Neurolyx Technologies Pvt. Ltd.</div>
                <div className="text-xs text-dark-500">Registered IT Services Company</div>
              </div>
            </div>
          </div>

          {/* Right — Values grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-dark-900/50 border border-white/5 hover:border-primary-600/15 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary-600/10 flex items-center justify-center mb-4">
                  <value.icon size={22} className="text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
