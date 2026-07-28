import { IconType } from "react-icons";

export type ServiceCardData = {
  title: string;
  slug: string;
  badge: string;
  desc: string;
  icon: IconType;
  features: [string, string, string, string];
};

export type FeatureItem = {
  icon: IconType;
  title: string;
  desc: string;
};

export type IndustryItem = {
  icon: IconType;
  title: string;
  desc: string;
};

export type ReasonItem = {
  icon: IconType;
  title: string;
  desc: string;
};

export type StatItem = {
  icon: IconType;
  value: string;
  label: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  icon: IconType;
  desc: string;
};

export type TechStackGroup = {
  category: string;
  items: { name: string; icon: IconType }[];
};
