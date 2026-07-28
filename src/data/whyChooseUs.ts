import {
  FiUsers,
  FiRefreshCw,
  FiMessageCircle,
  FiTrendingUp,
} from "react-icons/fi";
import { ReasonItem } from "@/types/service";

export const REASONS: ReasonItem[] = [
  {
    icon: FiUsers,
    title: "Experienced Engineers",
    desc: "A senior-led team that has shipped production software across industries.",
  },
  {
    icon: FiRefreshCw,
    title: "Agile Development",
    desc: "Short, reviewable sprints so you see progress every week, not every quarter.",
  },
  {
    icon: FiMessageCircle,
    title: "Transparent Communication",
    desc: "Direct access to your team, clear timelines, no black-box updates.",
  },
  {
    icon: FiTrendingUp,
    title: "Long-Term Partnership",
    desc: "We stay on past launch — maintenance, scaling, and the next feature.",
  },
];
