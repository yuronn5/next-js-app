import Image from "next/image";
import wondersImages from "../wonders";
import styles from "./PhotoPage.module.css"; // Import the CSS file

export default function PhotoPage({ params: { id } }) {
  const photo = wondersImages.find((p) => p.id === id);

  return (
    <div className={styles.container}>
      <div className={styles['photo-wrapper']}>
        <div>
          <h1 className={styles['photo-title']}>{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className={styles['photo-image']}
        />
        <div className={styles['photo-details']}>
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}

// Generate static params for dynamic route [id]
export async function generateStaticParams() {
  // Map over the wondersImages array to return an array of id params
  return wondersImages.map((photo) => ({
    id: photo.id, // Pass the id for each photo
  }));
}
