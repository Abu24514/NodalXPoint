"use client";

import FeatureShowcase from "@/components/common/FeatureShowcase";

export default function SoftwareOverview() {
  return (
   <FeatureShowcase
      title="Built for scale with"
      titleHighlight="modern engineering."
      description="We leverage production-tested frameworks, distributed systems, and modern observability tools to build resilient, high-performance software tailored to your business."
      tags={[
        { text: "Cloud Native", icon: "FiCloud" }, 
        { text: "Microservices", icon: "FiCpu" },
        { text: "Modern Stack", icon: "FiCode" }
      ]}
      images={{
        primarySrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80",
        secondarySrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80",
      }}
      floatingStat={{ label: "System Status", value: "99.99% Uptime" }}
    />
  );
}