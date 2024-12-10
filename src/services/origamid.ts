import { Product } from "@/interfaces/product"

export default class OrigamidService {
	constructor() {}

	static async getProducts(): Promise<Product[]> {
		const response = await fetch('https://api.origamid.online/produtos')
		const data = await response.json() as Product[]
		return data
	}
}