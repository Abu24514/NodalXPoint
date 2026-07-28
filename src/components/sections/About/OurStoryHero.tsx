"use client";
import PageHero from "@/components/common/PageHero";
export default function OurStoryHero() {
  return (
    <PageHero
            defaultConfig={{
              badge: "Our Story",
              title: "EKnow who we are and what ",
              titleHighlight: "we build.",
              subtitle:
                " nodalXpoint started as a two-person web studio and grew into a full team that ships web, mobile, CRM, SEO, AI, and marketing work — without splitting it across five different vendors.",
              accentGlow: "var(--color-node)",
            }}
          />
  );
}