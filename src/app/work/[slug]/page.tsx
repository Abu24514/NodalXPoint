import { PROJECTS, getProjectBySlug } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    
   <>
   <Navbar/>
    <section className="relative w-full bg-canvas py-16 sm:py-24 ">
        
      <div className="mx-auto max-w-4xl px-6 mb-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-ink transition-colors hover:text-body"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-2xl border border-line sm:h-80">
          <div className={`absolute inset-0 bg-linear-to-br ${project.gradient}`} />
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="mt-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-ink">
            {project.tag}
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-body sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-ink">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-body"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-body px-6 py-3 text-sm font-semibold text-canvas transition-transform hover:scale-105"
          >
            View Live
            <FiArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <Footer/>
    </section>
    </>
  );
}