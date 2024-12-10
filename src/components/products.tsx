import { Product } from "@/interfaces/product";

interface ProductsProps {
	products: Product[]
}

export default function Products({products}: ProductsProps) {
	return (
		<ol>
			{products.map(item => (
				<li key={item.id}>{item.nome}</li>
			))}
		</ol>
	)
}