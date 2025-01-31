import OrigamidService from "@/services/origamid";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; // https://nextjs.org/docs/messages/sync-dynamic-apis
  const product = await new OrigamidService().getProductById(id);
  const { nome, descricao, estoque: qtdEstoque, importado, preco } = product;

  return (
    <div>
      <h2>{nome}</h2>
      <br />
      <p>{descricao}</p>
      <p>{qtdEstoque ? `${qtdEstoque} em estoque` : "Produto indisponível"}</p>
      <p>{importado ? "Produto importado" : "Produto nacional"}</p>
      <p>R$ {preco.toFixed(2)}</p>
    </div>
  );
}
