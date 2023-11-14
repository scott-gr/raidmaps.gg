import styles from './card.module.css';
import Link from 'next/link';

export default function Card({text, link}) {
  return (
    <div className={styles.card}>
      <Link href={link}>
        {/* <Image src={img} alt={text + ' image'} /> */}
        <p>{text}</p>
      </Link>
    </div>
  );
}
