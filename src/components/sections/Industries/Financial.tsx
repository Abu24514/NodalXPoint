"use client";

import { FiShield, FiLock, FiCpu, FiServer } from "react-icons/fi";

export default function Finance({ page }: { page: any }) {
  return (
    <div className="pb-0">
      {/* 1. Dark Dashboard Header */}
      <section className="py-24 px-6 bg-node text-white rounded-b-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mx-auto w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <FiLock size={32} />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6">Bank-Grade <br/>Infrastructure</h2>
            <p className="text-white/80 text-lg">{page.easyExplanation.points[0].split(":")[1]}</p>
          </div>

          <div className="bg-white/10 border border-white/20 p-10 rounded-4xl backdrop-blur-md max-w-5xl mx-auto shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-8 mb-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-2">{page.visualWidget.statLabel}</p>
                <p className="font-display text-6xl font-extrabold">{page.visualWidget.statValue}</p>
              </div>
              <div className="bg-white text-node px-6 py-3 rounded-full font-bold flex items-center gap-2">
                <FiShield /> {page.visualWidget.statusText}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {page.visualWidget.metrics.map((m: any, i: number) => (
                <div key={i} className="bg-black/20 p-6 rounded-2xl">
                  <p className="text-sm text-white/60 mb-2">{m.label}</p>
                  <p className="font-bold text-2xl">{m.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Concepts */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h3 className="font-display text-3xl font-bold text-center mb-16">Security at the <span className="text-node">Core</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {page.easyExplanation.points.slice(1).map((point: string, i: number) => {
             const [title, desc] = point.split(":");
             return (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 shrink-0 bg-node/10 text-node rounded-2xl flex items-center justify-center">
                  <FiCpu size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-body">{title}</h4>
                  <p className="text-muted-ink leading-relaxed">{desc}</p>
                </div>
              </div>
             );
          })}
        </div>
      </section>

      {/* 3. FinTech Capabilities */}
      <section className="py-24 px-6 bg-surface border-t border-line">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-display text-2xl font-bold mb-12">Our FinTech Solutions Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.solutions.map((sol: string, i: number) => (
              <div key={i} className="p-8 bg-canvas rounded-2xl border border-line text-center hover:shadow-md transition-shadow">
                <FiServer className="mx-auto text-node mb-4" size={24} />
                <p className="font-semibold text-sm">{sol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}