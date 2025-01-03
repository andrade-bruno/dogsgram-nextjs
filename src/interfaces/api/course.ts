import { ID } from "./misc";

export interface Course {
	id: ID
	slug: string,
	nome: string,
	descricao: string,
	total_aulas: number,
	total_horas: number,
}