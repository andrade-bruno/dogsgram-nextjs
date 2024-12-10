interface CoursePageProps {
	params: {
		attr: string[]
	}
}

export default async function CoursePage({params}: CoursePageProps) {
	const { attr } = await params
	
	return (
		<>
			<h2>Course</h2>
			<br/>
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