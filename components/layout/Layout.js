import styles from './layout.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../header/Header';

export default function Layout({children, title, raidLink, encounter, description,}) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
