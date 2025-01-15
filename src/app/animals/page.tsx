import OrigamidService from "@/services/origamid";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const data = await new OrigamidService().getAnimals();

  return (
    <main>
      <h2>Animals</h2>
      <br />
      {data.map((i) => {
        return (
          <Link key={i.id} href={`/animals/${i.nome}/`}>
            <div>
              <p>{i.nome}</p>
              <Image
                src={i.imagem}
                alt={i.descricao}
                height={200}
                width={200}
                sizes="100vw"
              />
            </div>
            <br />
          </Link>
        );
      })}
    </main>
  );
}
