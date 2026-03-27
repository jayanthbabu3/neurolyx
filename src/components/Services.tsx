import {
  Brain,
  Cloud,
  Smartphone,
  Globe,
  Shield,
  Zap,
  type LucideIcon,
} from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group relative p-8 rounded-2xl bg-white shadow-sm border border-slate-900/10 hover:border-primary-600/20 transition-all duration-500 hover:-translate-y-1">
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-primary-600/10 border border-primary-600/10 flex items-center justify-center mb-6 group-hover:bg-primary-600/15 group-hover:border-primary-600/20 transition-all">
          <Icon size={26} className="text-primary-400" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6">{description}</p>

        <ul className="space-y-2.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const services: ServiceCardProps[] = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions that automate workflows, extract insights, and create intelligent user experiences.',
    features: [
      'Natural Language Processing & LLM Integration',
      'Computer Vision & Real-time Analytics',
      'Predictive Models & Recommendation Engines',
    ],
  },
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'High-performance, scalable web platforms built with modern frameworks and best practices.',
    features: [
      'React, Next.js & TypeScript',
      'Progressive Web Apps (PWA)',
      'Real-time Collaboration Features',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Cloud-native architecture that scales effortlessly and keeps your systems resilient.',
    features: [
      'AWS, GCP & Azure Deployments',
      'Containerization & Kubernetes',
      'CI/CD Pipelines & DevOps',
    ],
  },
  {
    icon: Smartphone,
    title: 'Desktop & Mobile Apps',
    description: 'Cross-platform applications that deliver native performance and delightful UX.',
    features: [
      'Electron Desktop Applications',
      'React Native & Flutter',
      'Offline-first Architecture',
    ],
  },
  {
    icon: Shield,
    title: 'Enterprise Solutions',
    description: 'Robust, secure platforms tailored for enterprise-grade operations and compliance.',
    features: [
      'Role-based Access & SSO',
      'Data Encryption & Compliance',
      'Audit Logging & Monitoring',
    ],
  },
  {
    icon: Zap,
    title: 'API & Integration Services',
    description: 'Seamless integrations that connect your tools, data, and workflows into a unified ecosystem.',
    features: [
      'RESTful & GraphQL APIs',
      'Third-party SaaS Integrations',
      'Webhook & Event-driven Systems',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-16 mt-8">
      <div className="absolute inset-0 bg-radial-section" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            End-to-End Technology Services
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            From ideation to deployment, we deliver full-spectrum engineering services
            that turn ambitious ideas into production-grade products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
