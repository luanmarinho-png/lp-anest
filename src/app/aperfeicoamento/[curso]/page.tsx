import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GetCta, ProductShell } from "@/components/apple/chrome";
import { CourseCatalog } from "@/components/course-catalog";
import { COURSES } from "@/lib/courses";

/** Uma URL por curso, para campanhas apontarem direto para ele. */
export function generateStaticParams() {
  return COURSES.filter((course) => course.detail).map((course) => ({
    curso: course.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/aperfeicoamento/[curso]">): Promise<Metadata> {
  const { curso } = await params;
  const course = COURSES.find((item) => item.id === curso);
  if (!course) return {};

  return {
    title: course.name,
    description: course.tagline,
    alternates: { canonical: `/aperfeicoamento/${course.id}` },
  };
}

export default async function Page({
  params,
}: PageProps<"/aperfeicoamento/[curso]">) {
  const { curso } = await params;
  const course = COURSES.find((item) => item.id === curso);
  if (!course?.detail) notFound();

  return (
    <ProductShell theme="craft">
      <CourseCatalog
        courses={COURSES}
        openId={course.id}
        title="Todos os cursos de aperfeiçoamento"
        lead="O Hands On é o caminho completo: o conteúdo online mais dois dias escaneando em modelo vivo."
      />

      <GetCta
        title="Quer saber qual curso resolve o seu caso?"
        body="Fala com a nossa equipe e conta o que você quer destravar na sala. A gente indica por onde começar."
      />
    </ProductShell>
  );
}
