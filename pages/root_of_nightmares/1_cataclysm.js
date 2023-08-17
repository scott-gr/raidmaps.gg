import Layout from '@/components/layout/Layout';
import Header from '@/components/header/Header';
import MapImage from '@/components/mapImage/MapImage';
// import CataclysmMap from '../../assets/maps/root_of_nightmares/cataclysm.webp';

export default function Cataclysm() {
  return (
    <Layout title="Cataclysm Encounter Map" description={'Destiny 2 raid encounter maps'}>
      <Header raid="Root_of_Nightmares" raidLink='/root_of_nightmares' encounter="cataclysm" />
      {/* <MapImage src={CataclysmMap} alt='Cataclysm Encounter Map' /> */}
    </Layout>
  );
}
