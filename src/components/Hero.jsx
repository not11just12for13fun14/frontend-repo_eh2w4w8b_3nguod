import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Sparkles size={14} /> AI-powered Dev Environment
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Build full apps in minutes, not weeks
            </h1>
            <p className="mt-4 max-w-lg text-base text-gray-600">
              Spin up a beautiful frontend and a powerful backend instantly. Design, iterate, and deploy — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white shadow-sm transition hover:bg-gray-800">
                <Rocket size={18} /> Start Building
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-800 transition hover:bg-gray-50">
                See Features
              </a>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -inset-4 -z-0 rounded-2xl bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-emerald-200 opacity-60 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1527443195645-6a321d1f0031?q=80&w=1600&auto=format&fit=crop"
                alt="Developer workspace"
                className="relative z-10 w-full rounded-xl border border-gray-200 shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
