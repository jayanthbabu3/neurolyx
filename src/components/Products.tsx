import { ArrowUpRight, Monitor, Smartphone, Blocks } from 'lucide-react'

interface Product {
  icon: React.ReactNode
  name: string
  tagline: string
  description: string
  status: 'Live' | 'Beta' | 'Coming Soon'
  gradient: string
  url?: string
}

const products: Product[] = [
  {
    icon: <Monitor size={28} />,
    name: 'Navigator 247 — Web',
    tagline: 'AI Interview Platform',
    description:
      'Web-based AI interview platform where companies create assessments, manage candidates, and review AI-scored results through an intuitive dashboard.',
    status: 'Live',
    gradient: 'from-primary-600 to-blue-500',
    url: 'https://navigator247.com',
  },
  {
    icon: <Smartphone size={28} />,
    name: 'Navigator 247 — Desktop',
    tagline: 'AI-Proctored Interview Client',
    description:
      'Secure desktop application for candidates. AI-conducted voice interviews with real-time proctoring, face detection, and enterprise-grade lockdown.',
    status: 'Live',
    gradient: 'from-primary-500 to-cyan-500',
    url: 'https://navigator247.com',
  },
  {
    icon: <Blocks size={28} />,
    name: 'More Products',
    tagline: 'In the Pipeline',
    description:
      'We are actively building new products across HR-tech, edtech, and developer tools. Stay tuned for announcements.',
    status: 'Coming Soon',
    gradient: 'from-primary-700 to-indigo-500',
  },
]

const statusColors: Record<string, string> = {
  Live: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  Beta: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  'Coming Soon': 'bg-slate-200 text-slate-600 border-slate-300',
}

export function Products() {
  return (
    <section id="products" className="relative py-16 mt-8">
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">Our Products</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Products We're Building
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            We don't just build for clients — we build our own products. Each one
            tackles a real problem with intelligent engineering.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative flex flex-col rounded-2xl bg-white shadow-sm border border-slate-900/10 hover:border-primary-600/20 overflow-hidden transition-all duration-500 hover:-translate-y-1"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${product.gradient}`} />

              <div className="flex-1 p-8">
                {/* Icon + status */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {product.icon}
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[product.status]}`}>
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1">{product.name}</h3>
                <p className="text-primary-400 text-sm font-medium mb-4">{product.tagline}</p>
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Footer */}
              <div className="px-8 py-5 border-t border-slate-900/10 bg-slate-900/[0.02]">
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors group/btn"
                  >
                    Visit Site
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-sm text-slate-400">Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
