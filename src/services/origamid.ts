import { ID, IOrigamidService } from "@/interfaces/api"
import { Course } from "@/interfaces/api/course"
import { Product } from "@/interfaces/api/product"

export default class OrigamidService implements IOrigamidService {
	domain = 'https://api.origamid.online'

	constructor() {}

	async getProducts(): Promise<Product[]> {
		const response = await fetch(`${this.domain}/produtos`)
		const products = await response.json() as Product[]
		return products
	}

	async getProductById(id: ID): Promise<Product> {
		const response = await fetch(`${this.domain}/produtos/${String(id)}`)
		const product = await response.json() as Product
		return product
	}

	async getCourses(): Promise<Course[]> {
		const response = await fetch(`${this.domain}/cursos`)
		const courses = await response.json() as Course[]
		return courses
	}

	async getCourseById(id: ID): Promise<Course> {
		const response = await fetch(`${this.domain}/cursos/${String(id)}`)
		const course = await response.json() as Course
		return course
	}
}