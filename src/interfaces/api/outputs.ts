
import { ID } from "../misc"
import { LoginResponse, Product, Course, Action, LoginDTO,  GetCourseBySlugResponse} from '@/interfaces/api'

export interface IOrigamidService {
	login(data: LoginDTO): Promise<LoginResponse>
	getProducts(): Promise<Product[]>
	getProductById: (id: ID) => Promise<Product>
	getCourses: () => Promise<Course[]>
	getCourseBySlug: (slug: string) => Promise<GetCourseBySlugResponse>
	getActions(): Promise<Action[]>
	getActionByCode(code: string, options?: RequestInit): Promise<Action>
}

