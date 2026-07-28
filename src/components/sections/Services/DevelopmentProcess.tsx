"use client";

import ProcessTimeline from "@/components/common/ProcessTimeline";
import { STEPS } from "@/data/process";

export default function DevelopmentProcess() {
  return (
    <ProcessTimeline
      steps={STEPS}
      badge="Our Process"
      title="A proven path from idea to production."
    />
  );
}
