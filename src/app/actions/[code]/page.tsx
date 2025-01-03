import OrigamidService from "@/services/origamid"

interface PageProps {
	params: {
		code: string
	}
}

export default async function ProductPage({ params }: PageProps) {
	const { code } = await params // https://nextjs.org/docs/messages/sync-dynamic-apis

	const period = 10
	const data = await new OrigamidService().getActionByCode(code, {
		next: {
			revalidate: period, // Seconds
		}
	})
	const { nome, atualizada } = data

	return (
		<div>
			<h2>{nome}</h2>
			
			<br/>
			<p>This .html static file is regenerated each {period} second(s).</p>
			<p>Once you refresh, server's gonna trigger a new bundle for that .html file, and you'll see the cached version in browser. The most recent is gonna be in .cache folder. </p>
			<p>So, if you reload the page before the revalidation period once more, you'll se the latest .html file</p>

			<br/>
			<p>Lastest fetch at {atualizada.toLocaleString('pt-BR')}</p>
		</div>
	)
}