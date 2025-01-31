import { ID } from "@/interfaces";
import {
  Action,
  Animal,
  GetCourseBySlugResponse,
  IOrigamidService,
  LoginDTO,
  LoginResponse,
} from "@/interfaces/api";
import { Course } from "@/interfaces/api/course";
import { Product } from "@/interfaces/api/product";

export default class OrigamidService implements IOrigamidService {
  domain = "https://api.origamid.online";

  constructor() {}

  async login(data: LoginDTO): Promise<LoginResponse> {
    const response = await fetch(`${this.domain}/conta/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) return await response.json();

    throw new Error("Could not fetch login credentials");
  }

  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${this.domain}/produtos`);
    const products = (await response.json()) as Product[];
    return products;
  }

  async getProductById(id: ID): Promise<Product> {
    const response = await fetch(`${this.domain}/produtos/${String(id)}`);
    const product = (await response.json()) as Product;
    return product;
  }

  async getCourses(): Promise<Course[]> {
    const response = await fetch(`${this.domain}/cursos`);
    const courses = (await response.json()) as Course[];
    return courses;
  }

  async getCourseBySlug(slug: string): Promise<GetCourseBySlugResponse> {
    const response = await fetch(`${this.domain}/cursos/${slug}`);
    const course = (await response.json()) as GetCourseBySlugResponse;
    return course;
  }

  async getActions(): Promise<Action[]> {
    const response = await fetch(`${this.domain}/acoes`);
    return (await response.json()) as Action[];
  }

  async getActionByCode(code: string, options?: RequestInit): Promise<Action> {
    const response = await fetch(`${this.domain}/acoes/${code}`, options);
    return (await response.json()) as Action;
  }

  async getAnimals(): Promise<Animal[]> {
    const response = await fetch(`${this.domain}/animais`, {
      cache: "no-store",
    });
    return (await response.json()) as Animal[];
  }
}
