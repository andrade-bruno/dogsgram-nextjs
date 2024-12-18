import { Course } from "@/interfaces/api/course"
import { Product } from "@/interfaces/api/product"

const domain = 'https://api.origamid.online'
	
export default class OrigamidService {
	constructor() {}

	static async getProducts(): Promise<Product[]> {
		const response = await fetch(`${domain}/produtos`)
		const products = await response.json() as Product[]
		return products
	}

	static async getProductById(id: number | string): Promise<Product> {
		const response = await fetch(`${domain}/produtos/${String(id)}`)
		const product = await response.json() as Product
		return product
	}

	static async getCourses(): Promise<Course[]> {
		const response = await fetch(`${domain}/cursos`)
		const courses = await response.json() as Course[]
		return courses
	}

	static async getCourseById(id: number | string): Promise<Course> {
		const response = await fetch(`${domain}/cursos/${String(id)}`)
		const course = await response.json() as Course
		return course
	}
}