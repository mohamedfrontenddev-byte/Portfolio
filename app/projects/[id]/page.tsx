import { notFound } from 'next/navigation';
import ProjectDetailView from '@/components/ProjectDetailView';
import { projects } from '@/data/projects';

// Pre-build a static page for every project id (required for `output: 'export'`).
export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectId = Number(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
