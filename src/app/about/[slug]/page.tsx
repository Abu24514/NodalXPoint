import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import LeadershipHero from "@/components/sections/Leadership/LeadershipHero";
import TeamGrid from "@/components/sections/Leadership/TeamGrid";
import OurStoryHero from "@/components/sections/About/OurStoryHero";
import OurStory from "@/components/sections/About/OurStory";
import Values from "@/components/sections/About/Values";
import JoinCTA from "@/components/sections/About/JoinCTA";

const PAGES = {
  leadership: {
    title: "Leadership | nodalXpoint",
    description: "Meet the people behind nodalXpoint.",
    Content: () => (
      <>
        <LeadershipHero />
        <TeamGrid />
        <JoinCTA />
      </>
    ),
  },
  "our-story": {
    title: "Our Story | nodalXpoint",
    description: "Know who we are and what we build.",
    Content: () => (
      <>
        <OurStoryHero />
        <OurStory />
        <Values />
        <JoinCTA />
      </>
    ),
  },
} as const;

type Slug = keyof typeof PAGES;

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = PAGES[slug as Slug];
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function AboutSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = PAGES[slug as Slug];

  if (!page) return notFound();

  const { Content } = page;

  return (
    <main className="bg-canvas">
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
}