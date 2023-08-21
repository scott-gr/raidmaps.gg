import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {

  const mainTitle = (
    <Link className={styles.titleFont} href="/">
      RaidMaps.gg
    </Link>
  )
  return (
    <h1>
      {mainTitle}
    </h1>
  )

}