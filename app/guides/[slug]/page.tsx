import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EditorialPage from "../../components/EditorialPage";
import { getGuide, guideEntries } from "../../content/seo";

export const dynamicParams = false;
export function generateStaticParams() { return guideEntries.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGuide(slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.description, alternates: { canonical: `/guides/${slug}` }, openGraph: { type: "article", title: entry.title, description: entry.description } };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getGuide(slug);
  if (!entry) notFound();
  return <EditorialPage entry={entry} category="Freelance pricing guide" />;
}
