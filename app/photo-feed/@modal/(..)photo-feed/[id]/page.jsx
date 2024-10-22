import Image from "next/image";
import wondersImages from "../../../wonders";
import Modal from "../../../../components/modal";
import styles from "./PhotoModal.module.css"; // Import the CSS file

export default function PhotoModal({ params: { id } }) {
  const photo = wondersImages.find((p) => p.id === id);

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className={styles["modal-image"]} // Use the custom CSS class
      />

      <div className={styles["modal-content"]}>
        <h2 className={styles["modal-title"]}>{photo.name}</h2>
        <h3 className={styles["modal-subtitle"]}>{photo.photographer}</h3>
        <h3 className={styles["modal-subtitle"]}>{photo.location}</h3>
      </div>
    </Modal>
  );
}

// Generate static params for dynamic route [id]
export async function generateStaticParams() {
  // Map over the wondersImages to return an array of id params
  return wondersImages.map((photo) => ({
    id: photo.id, // Pass the id for each photo
  }));
}
