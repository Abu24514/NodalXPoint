"use client";


import FAQ from "@/components/common/FAQ"; 

const serviceQuestions = [
  {
    q: "What does your development process look like?",
    a: "We follow a structured seven-stage process — discovery, planning, UI/UX design, development, testing, deployment, and ongoing maintenance — with regular check-ins at every stage.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope. A focused MVP can take a few weeks, while a full enterprise platform typically runs several months. We share a concrete timeline after the discovery phase.",
  },
  {
    q: "How is pricing structured?",
    a: "We offer both fixed-scope pricing for well-defined projects and time-and-materials pricing for evolving ones. You get a detailed estimate before any work begins.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes — our maintenance service covers monitoring, security patching, dependency updates, and rapid bug fixes so your product stays healthy after launch.",
  },
  {
    q: "What technologies do you work with?",
    a: "Our core stack includes React, Next.js, TypeScript, and Tailwind CSS on the frontend, Node.js and Express on the backend, MongoDB and PostgreSQL for data, and AWS, Docker, and Vercel for infrastructure.",
  },
];

export default function ServiceFaq() {
  return (
    <div>
      <FAQ 
        data={serviceQuestions} 
        badge="FAQ" 
        title="Frequently asked" 
        titleHighlight="questions." 
      />
    </div>
  );
}