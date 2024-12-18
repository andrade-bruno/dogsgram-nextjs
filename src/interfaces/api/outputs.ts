import { Course } from "./course"
import { ID } from "./misc"
import { Product } from "./product"

export interface IOrigamidService {
	getProducts: () => Promise<Product[]>
	getProductById: (id: ID) => Promise<Product>
	getCourses: () => Promise<Course[]>
	getCourseById: (id: ID) => Promise<Course>
}