const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Electron', category: 'Desktop' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'OpenAI', category: 'AI/ML' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'Tailwind CSS', category: 'Frontend' },
]

export function TechStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-px bg-gradient-to-r from-transparent via-primary-600/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4">Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies We Work With
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group px-5 py-3 rounded-xl bg-dark-900/50 border border-white/5 hover:border-primary-600/20 hover:bg-primary-600/5 transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-medium text-dark-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="ml-2 text-[10px] font-medium text-dark-600 uppercase tracking-wider">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-px bg-gradient-to-r from-transparent via-primary-600/20 to-transparent" />
    </section>
  )
}
