import { Product } from "@/interfaces/product"

export default class OrigamidService {
	constructor() {}

	static async getProducts(): Promise<Product[]> {
		const response = await fetch('https://api.origamid.online/produtos')
		const products = await response.json() as Product[]
		return products
	}

	static async getProductById(id: number | string): Promise<Product> {
		const response = await fetch(`https://api.origamid.online/produtos/${String(id)}`)
		const product = await response.json() as Product
		return product
	}
}