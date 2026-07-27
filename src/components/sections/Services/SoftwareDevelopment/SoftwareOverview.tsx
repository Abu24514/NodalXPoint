"use client";
import FeatureShowcase from "@/components/common/FeatureShowcase";
import { FiTerminal,  FiCpu } from "react-icons/fi";
export default function SoftwareOverview() {
  return (
   <FeatureShowcase
      title="Built for scale with"
      titleHighlight="modern engineering."
      description="We build robust backends and dynamic frontends..."
      tags={[
        { text: "Cloud Native", icon: FiTerminal },
        { text: "Microservices", icon: FiCpu }
      ]}
      images={{
        primarySrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80",
        secondarySrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80",
      }}
      floatingStat={{ label: "System Status", value: "99.99% Uptime" }}
    />
  );
}