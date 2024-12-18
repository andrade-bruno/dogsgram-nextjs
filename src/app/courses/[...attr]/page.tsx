import OrigamidService from "@/services/origamid"

interface CoursePageProps {
	params: {
		attr: string[]
	}
}

export default async function CoursePage({params}: CoursePageProps) {
	const { attr } = await params

	const slug = String(attr[0])
	const { aulas } = await new OrigamidService().getCourseBySlug(slug)
	
	return (
		<>
			<h2>Course</h2>
			<hr/>
			<p>This is a dynamic route with multiple params</p>
			<p>Received following <b>{attr.length}</b> item(s) in route params:</p>
			<ol>
				{attr.map(item => {
					return (
						<li key={Math.random()}>{item}</li>
					)
				})}
			</ol>
		</>
	)
}