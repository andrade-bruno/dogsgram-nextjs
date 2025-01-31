import { Product } from "@/interfaces/api/product";
import Link from "next/link";

interface ProductsProps {
	products: Product[]
}

export default function Products({products}: ProductsProps) {
	return (
		<ol>
			{products.map(item => (
				<Link href={`products/${item.id}`} key={item.id}>
					<li>{item.nome}</li>
				</Link>
			))}
		</ol>
	)
}