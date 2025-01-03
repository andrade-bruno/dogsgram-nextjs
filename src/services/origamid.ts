import { Action, GetCourseBySlugResponse, ID, IOrigamidService } from "@/interfaces/api"
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

	async getCourseBySlug(slug: string): Promise<GetCourseBySlugResponse> {
		const response = await fetch(`${this.domain}/cursos/${slug}`)
		const course = await response.json() as GetCourseBySlugResponse
		return course
	}

	async getActions(): Promise<Action[]> {
		const response = await fetch(`${this.domain}/acoes`)
		return await response.json() as Action[]
	}

	async getActionByCode(code: string, options?: RequestInit): Promise<Action> {
		const response = await fetch(`${this.domain}/acoes/${code}`, options)
		return await response.json() as Action
	}
}