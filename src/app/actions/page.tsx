import OrigamidService from "@/services/origamid";
import Link from "next/link";

export default async function ActionPage() {
	const actions = await new OrigamidService().getActions()

	return (
    <main>
      <h2>Actions</h2>
			<br/>
			<ol>
				{actions.map(action => {
					return (
						<Link
							key={action.id}
							href={`/actions/${action.simbolo}/`}
						>
							<li>{action.nome}</li>
						</Link>
					)
				})}
			</ol>       
    </main>
  );
}