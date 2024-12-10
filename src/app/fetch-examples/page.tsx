import ClientFetch from "@/components/client-fetch";
import ServerFetch from "@/components/server-fetch";

export default function FetchExamplesPage() {
	return (
		<main>
			<ServerFetch />
			<ClientFetch />
		</main>
	)
}