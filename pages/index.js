import Link from 'next/link';
import Layout from '../components/layout/Layout';
import styles from './home.module.css'

export default function Home() {
  return (
    <Layout title="RaidMaps.gg" description={'Destiny 2 raid encounter maps'}>
      <main className={styles.}>
        <Link href="/root_of_nightmares">Root of Nightmares</Link>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Link href="/kings_fall">King's Fall</Link>
        <Link href="/vow_of_the_disciple">Vow of the Disciple</Link>
        <Link href="/deep_stone_crypt">Deep Stone Crypt</Link>
        <Link href="/garden_of_salvation">Garden of Salvation</Link>
        <Link href="/last_wish">Last Wish</Link>
        <Link href="/vault_of_glass">Vault of Glass</Link>
      </main>
    </Layout>
  );
}
