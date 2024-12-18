import OrigamidService from "@/services/origamid"
import Products from "./products"

export default async function ServerFetch() {
	const products = await new OrigamidService().getProducts()

	return (
		<>
			<p>Server Fetch Side Example</p>
			<b>This fetch method use cache. If you reload page, the request won't be handled again.</b>
			<Products products={products}/>
		</>
	)
}