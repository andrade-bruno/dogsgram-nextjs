import OrigamidService from "@/services/origamid";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default async function Page() {
  const data = await new OrigamidService().getAnimals();

  return (
    <main>
      <h2>Animals</h2>
      <br />
      <div className={styles.animals}>
        {data.map((i, index, _array) => {
          return (
            <Link key={i.id} href={`/animals/${i.nome}/`}>
              <div>
                <p>{i.nome}</p>
                <Image
                  src={i.imagem}
                  alt={i.descricao}
                  height={200}
                  width={200}
                  sizes="(max-width: 600px) 100vw, 50vw"
                  priority={index < 2}
                />
              </div>
              <br />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
