import Layout from '../components/layout/Layout';
import CardList from '@/components/cardList/CardList';
import Header from '@/components/header/Header';
import styles from './home.module.css'
import TitleCard from '@/components/card/TitleCard';

export default function Home() {
  return (
    <Layout title="RaidMaps.gg" description={'Destiny 2 raid encounter maps'}>
      <Header />
      <CardList>
        <TitleCard text="[Redacted]" link="/redacted" raidstyle={styles.redacted}></TitleCard>
        <TitleCard text="Root of Nightmares" link="/root_of_nightmares" raidstyle={styles.ron}></TitleCard>
        <TitleCard text="Kings Fall" link="/kings_fall" raidstyle={styles.kf}></TitleCard>
        <TitleCard text="Vow of the Disciple" link="/vow_of_the_disciple" raidstyle={styles.votd}></TitleCard>
        <TitleCard text="Deep Stone Crypt" link="/deep_stone_crypt" raidstyle={styles.dsc}></TitleCard>
        <TitleCard text="Garden of Salvation" link="/garden_of_salvation" raidstyle={styles.gos}></TitleCard>
        <TitleCard text="Last Wish" link="/last_wish" raidstyle={styles.lw}></TitleCard>
        <TitleCard text="Vault of Glass" link="/vault_of_glass" raidstyle={styles.vog}></TitleCard>
      </CardList>
    </Layout>
  );
}
