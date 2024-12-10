import { Product } from "@/interfaces/product"

export default async function ServerFetch() {
	const response = await fetch('http://api.origamid.online/produtos')
	const data = await response.json() as Product[]
	return (
		<>
			<p>Server Fetch Side Example</p>
			<ol>
				{data.map(item => (
					<li key={item.id}>{item.nome}</li>
				))}
			</ol>
		</>
	)
}