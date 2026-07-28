"use client";

import ProcessTimeline from "@/components/common/ProcessTimeline";
import {HProcess } from "@/data/process";
export default function Process() {
  return (
    <ProcessTimeline
      steps={HProcess}
      badge="How We Work"
      title="Seven steps, one connected line from kickoff to launch."
      bgColor="bg-canvas"
    />
  );
}