"use client";

import { FiCheckCircle, FiShoppingCart, FiTrendingUp, FiZap } from "react-icons/fi";

export default function Ecommerce({ page }: { page: any }) {
  return (
    <div className="pb-24">
      {/* 1. Visual Split Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-node/10 text-node text-xs font-bold uppercase tracking-wider mb-6">
              <FiZap /> High-Speed Commerce
            </div>
            <h2 className="font-display text-4xl font-extrabold text-body mb-6">
              Selling Digital, <br/><span className="text-node">Scaling Global.</span>
            </h2>
            <p className="text-muted-ink text-lg leading-relaxed mb-8">
              {page.easyExplanation.points[0].split(":")[1]}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.easyExplanation.points.slice(1).map((point: string, i: number) => (
                <div key={i} className="bg-surface p-5 rounded-2xl border border-line shadow-sm">
                  <FiShoppingCart className="text-node mb-3" size={24} />
                  <p className="font-bold text-body text-sm mb-1">{point.split(":")[0]}</p>
                  <p className="text-xs text-muted-ink">{point.split(":")[1]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-node/10 translate-x-4 translate-y-4 rounded-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop" 
              alt="E-commerce" 
              className="relative z-10 rounded-3xl shadow-xl w-full h-137.5 object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Solutions Grid */}
      <section className="py-20 bg-surface border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-display text-3xl font-bold">Engineered for <span className="text-node">Conversion</span></h3>
            <p className="text-muted-ink mt-4">Core features built into our e-commerce architecture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.solutions.map((sol: string, i: number) => (
              <div key={i} className="bg-canvas p-6 rounded-2xl border border-line hover:border-node/50 transition-all hover:shadow-lg">
                <FiCheckCircle className="text-node mb-4" size={28} />
                <h4 className="font-bold text-body mb-2">{sol}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Performance Metrics */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-node/5 border border-node/10 rounded-[3rem] p-12">
          <FiTrendingUp className="mx-auto text-node mb-6" size={48} />
          <p className="text-sm font-bold uppercase tracking-widest text-node mb-2">{page.visualWidget.statLabel}</p>
          <p className="font-display text-6xl font-extrabold text-body mb-8">{page.visualWidget.statValue}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {page.visualWidget.metrics.map((m: any, i: number) => (
              <div key={i} className="bg-white px-6 py-3 rounded-full border border-line shadow-sm">
                <span className="text-xs text-muted-ink uppercase mr-2">{m.label}:</span>
                <span className="font-bold text-node">{m.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}