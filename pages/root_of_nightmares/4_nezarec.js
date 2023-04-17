import Layout from '@/components/layout/Layout';
import Header from '@/components/header/Header';

export default function Cataclysm() {
  return (
    <Layout title="Nezarec Encounter Map" description={'Destiny 2 raid encounter maps'}>
      <Header raid="Root of Nightmares" raidLink="/root_of_nightmares" encounter="Nezarec" />
    </Layout>
  );
}
