import CardList from '@/components/cardList/CardList';
import Layout from '@/components/layout/Layout';
import Header from '@/components/header/Header';
import {RaidContext} from '../RaidContext';

export default function RaidPage({children, raid}) {
  return (
    <RaidContext.Provider value={raid}>
      <Layout title={raid + 'encounters'} description={'Destiny 2 raid encounter maps'}>
        <Header />
        <CardList>{children}</CardList>
      </Layout>
    </RaidContext.Provider>
  );
}
