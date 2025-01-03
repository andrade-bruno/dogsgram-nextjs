import { ID } from "./misc"

export type Action = {
	id: ID;
	preco_anterior: number;
	preco: number;
	simbolo: string;
	nome: string;
	descricao: string;
	vendas: number;
	atualizada: Date;
}