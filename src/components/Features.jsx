import { Code2, Database, Zap, Layers } from 'lucide-react';

const items = [
  {
    icon: Code2,
    title: 'Beautiful UI',
    desc: 'Starter components with modern design, responsive by default.',
  },
  {
    icon: Database,
    title: 'Built-in Database',
    desc: 'Persistent data layer ready to go, no setup required.',
  },
  {
    icon: Layers,
    title: 'Clear Separation',
    desc: 'Frontend handles UI, backend does the heavy lifting.',
  },
  {
    icon: Zap,
    title: 'Fast Iteration',
    desc: 'Edit, preview, and ship changes in seconds.',
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-gray-200/70 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Everything you need to build fast</h2>
          <p className="mt-3 text-gray-600">From idea to live app in one flow. No tool sprawl.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="inline-flex rounded-lg bg-gray-900 p-2 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
