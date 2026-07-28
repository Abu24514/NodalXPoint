import FeatureShowcase from "@/components/common/FeatureShowcase";

export default function TechnologyOverview() {
  return (
   <FeatureShowcase
      title="Powered by cutting-edge"
      titleHighlight="Technology Stack."
      description="We utilize a robust and modern technology stack to engineer fast, secure, and highly scalable digital solutions. From resilient backend architectures to interactive frontend experiences, our tools are chosen for maximum performance and reliability."
      tags={[
        { text: "Frontend Architecture", icon: "FiLayout" }, 
        { text: "Scalable Backends", icon: "FiServer" },
        { text: "Secure Databases", icon: "FiDatabase" }
      ]}
      images={{
        primarySrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      }}
      floatingStat={{ label: "Architecture", value: "100% Scalable" }}
    />
  );
}