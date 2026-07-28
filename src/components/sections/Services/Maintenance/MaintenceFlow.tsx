"use client";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import { Mflow } from "@/data/process";
export default function MaintenanceFlow() {
  return (
    <ProcessTimeline
      steps={Mflow}
      badge="Issue Resolution"
      title="How we handle every issue."
    />
  );
}