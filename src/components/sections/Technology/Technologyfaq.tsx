import FAQ from "@/components/common/FAQ";
 const step = [
  {
    q: "What technologies do you specialize in?",
    a: "We specialize in modern technologies including React, Next.js, Node.js, Python, Java, PHP, .NET, React Native, Flutter, AWS, Azure, and AI-powered solutions.",
  },
  {
    q: "How do you choose the right technology stack?",
    a: "We recommend the best technology stack based on your business goals, project requirements, scalability, budget, and future growth.",
  },
  {
    q: "Do you provide full-stack development services?",
    a: "Yes. We offer end-to-end development, including frontend, backend, APIs, databases, cloud deployment, and ongoing support.",
  },
  {
    q: "Can you modernize existing or legacy applications?",
    a: "Absolutely. We upgrade legacy applications to modern, secure, and scalable technologies while minimizing downtime.",
  },
  {
    q: "How do you ensure security and scalability?",
    a: "We follow industry best practices, secure coding standards, cloud-ready architecture, and rigorous testing to deliver reliable and scalable solutions.",
  },
];
export default function TechnologyFaq(){
    return(
        <div>
            <FAQ
                  data={step}
                  badge="FAQ" 
                  title="Frequently asked" 
                  titleHighlight="questions." 
                />
        </div>
    )
}