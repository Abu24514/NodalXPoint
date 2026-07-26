"use client";

import { motion } from "framer-motion";
import Stats from "../Home/stats";
import SectionHeader from "@/components/common/SectionBadge";

export default function CompanyState() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 mb-15">

 <SectionHeader 
          badge="Company Stats"
          title="Growing with  "
           titleHighlight="every project."
          subtitle="Our journey is driven by innovation, collaboration, and continuous
            improvement. Every project strengthens our expertise and reinforces
            our commitment to delivering quality digital solutions."
        />

      </div>
       <div className="mt-5 sm:mt-10">
         <Stats/>
       </div>
    </section>
  );
}