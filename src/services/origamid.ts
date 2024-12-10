import { Course } from "@/interfaces/course"
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

	static async getCourses(): Promise<Course[]> {
		const response = await fetch(`https://api.origamid.online/cursos`)
		const courses = await response.json() as Course[]
		return courses
	}

	static async getCourseById(id: number | string): Promise<Course> {
		const response = await fetch(`https://api.origamid.online/cursos/${String(id)}`)
		const course = await response.json() as Course
		return course
	}
}