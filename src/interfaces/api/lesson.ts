export interface Lesson {
	id: number;
	slug: string;
	nome: string;
	descricao: string;
	curso_id: number;
	tempo: number;
	ordem: number;
}