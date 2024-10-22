import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";
import styles from "./Home.module.css"; // Import the CSS file

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles["main-title"]}>
        New Wonders of the World
      </h1>
      <div className={styles.grid}>
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className={styles["grid-item"]}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
