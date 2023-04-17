import Link from 'next/link';
import Layout from '../components/layout/Layout';
import CardList from '@/components/cardList/CardList';
import styles from './home.module.css'
import Card from '@/components/card/Card';

export default function Home() {
  return (
    <Layout title="RaidMaps.gg" description={'Destiny 2 raid encounter maps'}>
      <CardList>
          <Card text='Root of Nightmares' link='/root_of_nightmares' ></Card>
          <Card text='Kings Fall' link='/kings_fall' ></Card>
          <Card text='Vow of the Disciple' link='/vow_of_the_disciple' ></Card>
          <Card text='Deep Stone Crypt' link='/deep_stone_crypt' ></Card>
          <Card text='Garden of Salvation' link='/garden_of_salvation' ></Card>
          <Card text='Last Wish' link='/last_wish' ></Card>
          <Card text='Vault of Glass' link='/vault_of_glass' ></Card>
      </CardList>
    </Layout>
  );
}
