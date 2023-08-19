import Link from 'next/link';
import styles from './header.module.css';
import { useContext } from 'react';
import { RaidContext } from '../RaidContext';

export default function Header({encounter}) {
  const raid = useContext(RaidContext);
  const mainTitle = (
    <Link className={styles.titleFont} href="/">
      RaidMaps.gg
    </Link>
  );

  if (raid && encounter ) {
    console.log(raid);
    let raidUnderscore = raid.toLowerCase().replace(/ /g, '_');
    let raidTitle = (
      <Link className={`${styles.raidFont} ${styles.linked}`} href={`/${raidUnderscore}`} alt={raid}>
        {raidUnderscore}
      </Link>
    );
    let encounterTitle = (
      <span className={styles.encounterFont} alt={encounter}>
        {encounter}
      </span>
    );

    return (
      <h1>
        {mainTitle} {' / '} {raidTitle} {' / '} {encounterTitle}{' '}
      </h1>
    );
  } else if (raid && !encounter) {
    let raidUnderscore = raid.replace(/ /g, '_');
    let raidTitle = <span className={styles.raidFont} alt={raid}>{raidUnderscore}</span>;
    return (
      <h1>
        {mainTitle}
        {' / '}
        {raidTitle}
      </h1>
    );
  } else {
    return <h1>{mainTitle}</h1>;
  }
}
