import { IconType } from "react-icons";

export type Tool = {
  name: string;
  icon: IconType;
};

export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export type Benefit = {
  title: string;
  desc: string;
  icon: IconType;
};

export type QASubService = {
  title: string;
  tagline: string;
  badge: string;
  description: string;
  overview: string;
  whoItsFor: string[];
  capabilities: string[];
  process: ProcessStep[];
  tools: Tool[];
  benefits: Benefit[];
};

export type QASubServiceSlug = "manual-testing" | "automation-testing" | "api-testing";