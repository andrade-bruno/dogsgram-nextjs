import Products from "@/components/products";
import OrigamidService from "@/services/origamid";

export default async function ProductsPage() {
	const products = await OrigamidService.getProducts()
	return (
		<main>
			<h2>Products</h2>
			<Products products={products}/>
		</main>
	)
}