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
import { TechStackGroup } from "@/types/service";

export const STACK: TechStackGroup[] = [
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
