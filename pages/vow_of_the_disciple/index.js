import Card from '@/components/card/Card';
import CardList from '@/components/cardList/CardList';
import Layout from '@/components/layout/Layout';
import Header from '@/components/header/Header';

export default function VowOfTheDisciple() {
  return (
    <Layout title="Vow of the Disciple" description={'Destiny 2 raid encounter maps'}>
      <Header raid="Vow_of_the_Disciple" />
      <CardList>
        {/* <Card text="1. Cataclysm" link="/root_of_nightmares/1_cataclysm"></Card>
        <Card text="2. Scission" link="/root_of_nightmares/2_scission"></Card>
        <Card text="3. Macrocosm" link="/root_of_nightmares/3_macrocosm"></Card>
        <Card text="4. Nezarec" link="/root_of_nightmares/4_nezarec"></Card> */}
      </CardList>
    </Layout>
  );
}
