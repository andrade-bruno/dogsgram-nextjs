import { ID } from "./misc";

export interface Product {
	id: ID,
	nome: string,
	preco: number,
	descricao: string,
	estoque: number,
	importado: number,
}