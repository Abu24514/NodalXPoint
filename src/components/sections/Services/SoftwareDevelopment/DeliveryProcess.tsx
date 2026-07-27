import ProcessTimeline from "@/components/common/ProcessTimeline";
import {
  FiSearch,
  FiClipboard,
  FiPenTool,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiRefreshCw,
} from "react-icons/fi";

const PROCESS = [
  { step: "01", title: "Requirement Discovery", icon: FiSearch, desc: "Understanding business goals and project scope." },
  { step: "02", title: "UI/UX Design", icon: FiPenTool, desc: "Creating modern interfaces and prototypes." },
  { step: "03", title: "Architecture Planning", icon: FiClipboard, desc: "Designing scalable software architecture." },
  { step: "04", title: "Development", icon: FiCode, desc: "Building secure and optimized applications." },
  { step: "05", title: "Testing & QA", icon: FiCheckCircle, desc: "Ensuring performance, security, and reliability." },
  { step: "06", title: "Deployment", icon: FiUploadCloud, desc: "Launching applications on cloud infrastructure." },
  { step: "07", title: "Maintenance", icon: FiRefreshCw, desc: "Continuous improvements and monitoring." },
];

export default function DeliveryProcess() {
  return (
    <div>
      <ProcessTimeline
        steps={PROCESS}
        badge="Our Process"
        title="A proven path from idea to production."
      />
    </div>
  );
}