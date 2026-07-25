"use client";

import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGo,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiKubernetes,
  SiGooglecloud,
  SiNginx,
  SiAngular,
  SiHtml5,
  SiCss,
  SiPhp,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiJira,
  SiPostman,
} from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";
const STACK = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: RiJavaLine },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "Go", icon: SiGo },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    category: "Database & Cache",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Nginx", icon: SiNginx },
    ],
  },
  {
    category: "Tools & Version Control",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Bitbucket", icon: SiBitbucket },
      { name: "Jira", icon: SiJira },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export default function TechnologyStack() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 space-y-14">
        
        <SectionHeader 
          badge="Enterprise Tech Stack"
          title="Built for scale with "
           titleHighlight="modern engineering."
          subtitle="We leverage production-tested frameworks, distributed systems, and modern observability tools to build resilient software."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {STACK.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6"
            >
              <span className="absolute left-0 top-0 h-0.5 w-full origin-left scale-x-0 bg-node transition-transform duration-300 group-hover:scale-x-100" />

              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-body">
                {group.category}
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {group.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    title={tech.name}
                    className="flex aspect-square w-full items-center justify-center rounded-xl border border-line bg-canvas text-muted-ink transition-all duration-300 hover:border-node/40 hover:bg-node/5 hover:text-node"
                  >
                    <tech.icon size={22} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}