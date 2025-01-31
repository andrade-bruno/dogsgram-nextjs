import OrigamidService from "@/services/origamid"
import Link from "next/link"

export default async function CoursesPage() {
	const courses = await new OrigamidService().getCourses()

	return (
		<>
			<h2>Courses</h2>
			<br/>
			<p>Here you can access a Course using dynamic slugs</p>
			<ol>
				{courses.map(course => {
					course.nome.charAt(0).toUpperCase()

					return (
						<Link
							key={course.id}
							href={`/courses/${course.slug}/`}
						>
							<li>{course.nome}</li>
						</Link>
					)
				})}
			</ol>
		</>
	)
}