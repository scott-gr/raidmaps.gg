'use client';

import Link from 'next/link';
import styles from './header.module.css';
import {useParams} from 'next/navigation';

export default function Header() {
  const params = useParams();
  const raid = params.raid;
  const encounter = params.encounter;

  const mainTitle = (
    <Link className={styles.titleFont} href="/">
      RaidMaps.gg
    </Link>
  );
  const raidTitle = (
    <Link className={styles.raidFont} href={'/' + raid} alt={raid}>
      {raid}
    </Link>
  );

  const encounterTitle = (
    <span >
      {encounter}
    </span>
  );

  return (
    <h1>
      {mainTitle} {raid && raidTitle} {encounter && encounterTitle}
    </h1>
  );
}
