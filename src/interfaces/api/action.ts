import { ID } from "../misc";

export interface Action {
	id: ID;
	preco_anterior: number;
	preco: number;
	simbolo: string;
	nome: string;
	descricao: string;
	vendas: number;
	atualizada: Date;
}