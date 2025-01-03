import { ID } from "./misc";

export interface Lesson {
	id: ID;
	slug: string;
	nome: string;
	descricao: string;
	curso_id: number;
	tempo: number;
	ordem: number;
}