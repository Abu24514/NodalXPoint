"use client";

import { motion, Variants } from "framer-motion";
// 1. Saare used icons yahan import karein
import { 
  FiLayout, FiCode, FiDatabase, FiCloud, FiSettings, FiCheckCircle,
  FiSmartphone, FiLock, FiBell, FiCpu, FiServer, FiActivity,
  FiShoppingCart, FiUsers, FiPieChart, FiMonitor, FiGrid, 
  FiPenTool, FiLayers, FiMaximize, FiTrendingUp, FiEye, FiBriefcase
} from "react-icons/fi";
import { IconType } from "react-icons";

// 2. String ko actual icon se map karne ke liye ek object banayein
const IconMap: Record<string, IconType> = {
  FiLayout, FiCode, FiDatabase, FiCloud, FiSettings, FiCheckCircle,
  FiSmartphone, FiLock, FiBell, FiCpu, FiServer, FiActivity,
  FiShoppingCart, FiUsers, FiPieChart, FiMonitor, FiGrid, 
  FiPenTool, FiLayers, FiMaximize, FiTrendingUp, FiEye, FiBriefcase
};

export interface FeatureTag {
  text: string;
  icon: string; // Type ko 'IconType' se 'string' kar diya
}

export interface FeatureShowcaseProps {
  title: string;
  titleHighlight?: string;
  description: string;
  tags?: FeatureTag[];
  images: {
    primarySrc: string;
    primaryAlt?: string;
    secondarySrc?: string;
    secondaryAlt?: string;
  };
  floatingStat?: {
    label: string;
    value: string;
  };
  reverse?: boolean;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 70, damping: 20 } 
  },
};

export default function FeatureShowcase({
  title,
  titleHighlight,
  description,
  tags = [],
  images,
  floatingStat,
  reverse = false,
}: FeatureShowcaseProps) {
  return (
    <section className="relative py-24 mb-10 overflow-hidden font-sans">
      <div className={`absolute top-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10 pointer-events-none ${reverse ? 'left-0' : 'right-0'}`} />
      
      <div className={`max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`space-y-8 relative z-10 ${reverse ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}
        >
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              {title} <br className="hidden md:block" />
              {titleHighlight && (
                <span className="text-node">
                  {titleHighlight}
                </span>
              )}
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              {description}
            </p>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {tags.map((tag, i) => {
                  // 3. String se actual icon nikaalein
                  const Icon = IconMap[tag.icon] || FiCheckCircle; // Fallback icon
                  
                  return (
                    <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-sm font-semibold rounded-lg flex items-center gap-2 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default">
                      <Icon className="text-blue-500" /> {tag.text}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>

        <div className={`relative z-10 mt-10 lg:mt-0 w-full h-[500px] flex items-center justify-center ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-[400px] h-[400px] rounded-full border border-dashed border-blue-300/50 -z-10"
          />

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute z-20 w-[80%] max-w-[450px] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-8 border-white ${reverse ? 'left-4 md:left-10' : 'right-4 md:right-10'}`}
          >
            <img 
              src={images.primarySrc} 
              alt={images.primaryAlt || "Showcase Image"} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent pointer-events-none" />
          </motion.div>

          {images.secondarySrc && (
            <motion.div
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`absolute z-30 bottom-10 w-[50%] max-w-[280px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/30 border-4 border-white backdrop-blur-sm ${reverse ? 'right-0 md:right-4' : 'left-0 md:left-4'}`}
            >
              <img 
                src={images.secondarySrc} 
                alt={images.secondaryAlt || "Secondary image"} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}

          {floatingStat && (
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-10 z-40 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-white flex items-center gap-3 ${reverse ? 'right-10' : 'left-10'}`}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  {floatingStat.label}
                </p>
                <p className="text-sm font-bold text-slate-900">
                  {floatingStat.value}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}