export default function DynamicRouteCounter({attr}: {attr: Array<any>}) {
	return (
		<>
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