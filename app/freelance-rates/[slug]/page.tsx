import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EditorialPage from "../../components/EditorialPage";
import { getProfession, professionEntries } from "../../content/seo";

export const dynamicParams = false;
export function generateStaticParams() { return professionEntries.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getProfession(slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.description, alternates: { canonical: `/freelance-rates/${slug}` }, openGraph: { type: "article", title: entry.title, description: entry.description } };
}

export default async function ProfessionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getProfession(slug);
  if (!entry) notFound();
  return <EditorialPage entry={entry} category="Profession rate guide" />;
}
