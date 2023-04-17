import Link from 'next/link';
import styles from './header.module.css';

export default function Header({raid, raidLink, encounter}) {
  const mainTitle = (
    <Link className={styles.titleFont} href="/">
      RaidMaps.gg
    </Link>
  );

  if (raid && encounter) {
    const raidTitle = <Link className={styles.raidFont} href={raidLink}>{raid}</Link>;

    return (
      <h1>
        {mainTitle} {' / '} {raidTitle} {' / '} {encounter}{' '}
      </h1>
    );
  } else if (raid && !encounter) {
    return (
      <h1>
        {mainTitle}
        {' / '}
        {raid}
      </h1>
    );
  } else {
    return <h1>{mainTitle}</h1>;
  }
}
