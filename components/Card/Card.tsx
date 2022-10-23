/* eslint-disable @next/next/no-img-element */
import styles from "./Card.module.css";
import { useRouter } from "next/router";

interface Props {
  name: string;
  phone: string;
  email: string;
  image: { url: string; alt: string };
  id: string;
}

export function Card({ name, phone, email, image, id }: Props) {
  const router = useRouter();

  return (
    <div className={styles.card} onClick={() => router.push(`/cats/${id}`)}>
      <div className={styles["card-header"]}>
        <img src={image.url} alt={image.alt} className={styles["card-img"]} />
      </div>
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}
