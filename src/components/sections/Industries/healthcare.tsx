"use client";

import { FiHeart, FiShield, FiActivity, FiCheck } from "react-icons/fi";

export default function Healthcare({ page }: { page: any }) {
  return (
    <div className="pb-24">
      {/* 1. Sticky Split Screen Concept */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-5/12">
            <div className="sticky top-32">
              <h2 className="font-display text-4xl font-extrabold text-body mb-6">
                Patient-First <br/><span className="text-node">Technology.</span>
              </h2>
              <p className="text-muted-ink text-lg mb-8">
                Building secure, interoperable health systems that prioritize care delivery over administrative overhead.
              </p>
              <div className="p-6 bg-node text-white rounded-3xl shadow-lg">
                <FiShield className="mb-4 text-white/80" size={32} />
                <p className="font-bold text-xl mb-2">{page.visualWidget.statusText}</p>
                <p className="text-white/70 text-sm">We strictly adhere to healthcare data privacy regulations for all clinical platforms.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" 
              alt="Healthcare Tech" 
              className="rounded-3xl shadow-sm w-full h-87.5 object-cover border border-line mb-8"
            />
            {page.easyExplanation.points.map((point: string, i: number) => {
              const [title, desc] = point.split(":");
              return (
                <div key={i} className="bg-surface p-8 rounded-3xl border border-line hover:shadow-md transition-all">
                  <h3 className="font-bold text-xl text-body mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-node/10 text-node flex items-center justify-center text-sm">{i + 1}</span>
                    {title}
                  </h3>
                  <p className="text-muted-ink leading-relaxed pl-11">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Solutions Banner */}
      <section className="py-20 bg-surface border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-2xl font-bold text-center mb-12">Comprehensive <span className="text-node">Clinical Solutions</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.solutions.map((sol: string, i: number) => (
              <div key={i} className="flex items-center gap-4 bg-canvas p-4 rounded-xl border border-line">
                <div className="w-10 h-10 bg-node/10 text-node rounded-lg flex items-center justify-center">
                  <FiCheck size={20} />
                </div>
                <span className="font-semibold">{sol}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Live Metrics Display */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <FiActivity className="mx-auto text-node mb-6" size={40} />
        <p className="text-xs font-bold uppercase tracking-widest text-muted-ink mb-2">{page.visualWidget.statLabel}</p>
        <p className="font-display text-5xl font-extrabold text-node mb-10">{page.visualWidget.statValue}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {page.visualWidget.metrics.map((m: any, i: number) => (
            <div key={i} className="flex-1 bg-surface p-6 rounded-2xl border border-line">
              <p className="text-xs uppercase text-muted-ink mb-1">{m.label}</p>
              <p className="font-bold text-xl text-body">{m.val}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}