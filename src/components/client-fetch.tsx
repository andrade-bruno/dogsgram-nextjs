'use client'

import { Product } from "@/interfaces/api/product"
import OrigamidService from "@/services/origamid"
import React from "react"
import Products from "./products"

export default function ClientFetch() {
	const [products, setProducts] = React.useState<Product[]>([])

	React.useEffect(() => {
		async function fetchData() {
			const data = await OrigamidService.getProducts()
			setProducts(data)
		}
		fetchData()
	}, [])

	return (
		<>
			<p>Client Side Fetch Example</p>
			<b>This fetch method doesn't use cache. If you reload page, the component will refresh.</b>
			<Products products={products}/>
		</>
	)
}