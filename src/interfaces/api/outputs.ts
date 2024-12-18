import { Course } from "./course"
import { Lesson } from "./lesson"
import { ID } from "./misc"
import { Product } from "./product"

export interface IOrigamidService {
	getProducts: () => Promise<Product[]>
	getProductById: (id: ID) => Promise<Product>
	getCourses: () => Promise<Course[]>
	getCourseBySlug: (slug: string) => Promise<GetCourseBySlugResponse>
}

export interface GetCourseBySlugResponse extends Course {
	aulas: Lesson[]
}
