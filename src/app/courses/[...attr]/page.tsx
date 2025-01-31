import DynamicRouteCounter from "@/components/dynamic-route-counter";
import OrigamidService from "@/services/origamid";
import Link from "next/link";

interface CoursePageProps {
  params: Promise<{
    attr: string[];
  }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { attr } = await params;

  const attributes = attr.length;

  const courseDescription = String(attr[0]);
  const { aulas, descricao } = await new OrigamidService().getCourseBySlug(
    courseDescription
  );

  if (attributes == 1) {
    return (
      <>
        <h2>"{descricao}" Course</h2>
        <hr />
        <DynamicRouteCounter attr={attr} />
        <p>Estas são as aulas de {descricao}</p>
        <ul>
          {aulas.map((aula) => {
            return (
              <li key={Math.random()}>
                <Link href={`/courses/${courseDescription}/${aula.slug}`}>
                  {aula.descricao}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    const { descricao, tempo } = aulas.find((aula) => aula.slug == attr[1])!;

    return (
      <>
        <h2>Lesson "{descricao}"</h2>
        <hr />
        <DynamicRouteCounter attr={attr} />
        <h3>Information</h3>
        <p>Duration: {tempo} min(s)</p>
      </>
    );
  }
}
