import styles from './layout.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({children, title, description,}) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {title ==="RaidMaps.gg" ? <h1 className={styles.titleFont}>{title}</h1> : <h1><Link className={styles.titleFont} href='/'>RaidMaps.gg</Link>{' / ' + title}</h1>}
      {children}
    </div>
  );
}
