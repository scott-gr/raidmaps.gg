import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({text, link, img}) {
  return (
    <div className={styles.card}>
      <Link href={link}>
        <Image src={img} alt={text} />
        <p>{text}</p>
      </Link>
    </div>
  );
}