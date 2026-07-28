import FAQ from "@/components/common/FAQ";

const softwareQuestions = [
  { q: "What type of software does Nodal X Point develop?", a: "We build scalable web apps, mobile applications, enterprise SaaS platforms, and robust cloud architectures tailored to your exact business needs." },
  { q: "Do you create custom enterprise applications?", a: "Yes, we engineer highly secure and compliant enterprise solutions designed to automate workflows and scale globally." },
  { q: "Which technologies do you use?", a: "Our core stack revolves around Next.js, React, Node.js, Python, AWS, and Flutter, ensuring modern, fast, and future-proof products." },
  { q: "Do you provide maintenance support?", a: "Absolutely. We offer 24/7 monitoring, security patching, and iterative feature development post-launch." },
];
export default function SoftwareFaq(){
    return (
         <FAQ
                data={softwareQuestions } 
                badge="FAQ" 
                title="Frequently asked" 
                titleHighlight="questions." 
              />
    )
}