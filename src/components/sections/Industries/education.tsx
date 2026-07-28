"use client";

import { FiBookOpen, FiVideo, FiAward, FiUsers } from "react-icons/fi";

export default function Education({ page }: { page: any }) {
  const icons = [FiVideo, FiUsers, FiAward];

  return (
    <div className="pb-24">
      {/* 1. Header & Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="font-display text-4xl font-extrabold text-body mb-6">
          Smart <span className="text-node">Learning Platforms</span>
        </h2>
        <p className="text-muted-ink text-lg max-w-2xl mx-auto mb-16">
          Empowering educators and students with scalable virtual classrooms and seamless campus management systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {page.easyExplanation.points.map((point: string, i: number) => {
            const [title, desc] = point.split(":");
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="bg-surface border border-line rounded-4xl p-8 hover:shadow-xl transition-all text-left group">
                <div className="w-14 h-14 bg-node/10 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-node group-hover:text-white">
                  <Icon className="text-node group-hover:text-white" size={28} />
                </div>
                <h3 className="font-bold text-xl text-body mb-3">{title}</h3>
                <p className="text-muted-ink text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Tech Architecture List */}
      <section className="py-20 bg-surface border-y border-line">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-display text-2xl font-bold text-center mb-10">Platform Capabilities</h3>
          <div className="space-y-4">
            {page.solutions.map((sol: string, i: number) => (
              <div key={i} className="flex items-center justify-between p-6 bg-canvas rounded-2xl border border-line">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-node/10 text-node flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <span className="font-semibold text-body">{sol}</span>
                </div>
                <FiBookOpen className="text-muted-ink/50 hidden sm:block" size={20} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Engagement Metrics */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-node text-white rounded-[3rem] p-12 text-center grid grid-cols-1 md:grid-cols-3 gap-12 items-center shadow-xl">
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0 md:pr-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-2">{page.visualWidget.statLabel}</p>
            <p className="font-display text-6xl font-extrabold">{page.visualWidget.statValue}</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {page.visualWidget.metrics.map((m: any, i: number) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left border border-white/10">
                <p className="text-xs text-white/60 uppercase mb-1">{m.label}</p>
                <p className="font-bold text-xl">{m.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}