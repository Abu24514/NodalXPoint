import ProcessTimeline from "@/components/common/ProcessTimeline";
import { work } from "@/data/process";

export default function DeliveryProcess() {
  return (
    <div>
      <ProcessTimeline
        steps={work}
        badge="Our Process"
        title="A proven path from idea to production."
      />
    </div>
  );
}