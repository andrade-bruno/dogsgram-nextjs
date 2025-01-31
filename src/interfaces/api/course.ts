import { ID } from "../misc";
import { Lesson } from "./lesson";

export interface Course {
	id: ID
	slug: string,
	nome: string,
	descricao: string,
	total_aulas: number,
	total_horas: number,
}

export interface GetCourseBySlugResponse extends Course {
	aulas: Lesson[]
}
