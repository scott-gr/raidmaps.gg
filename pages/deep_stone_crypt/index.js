import Card from '@/components/card/Card';
import CardList from '@/components/cardList/CardList';
import Layout from '@/components/layout/Layout';
import Header from '@/components/header/Header';

export default function DeepStoneCrypt() {
  return (
    <Layout title="Deep Stone Crypt" description={'Destiny 2 raid encounter maps'}>
      <Header raid="Deep_Stone_Crypt" />
      <CardList>
        {/* <Card text="1. Cataclysm" link="/root_of_nightmares/1_cataclysm"></Card>
        <Card text="2. Scission" link="/root_of_nightmares/2_scission"></Card>
        <Card text="3. Macrocosm" link="/root_of_nightmares/3_macrocosm"></Card>
        <Card text="4. Nezarec" link="/root_of_nightmares/4_nezarec"></Card> */}
      </CardList>
    </Layout>
  );
}
