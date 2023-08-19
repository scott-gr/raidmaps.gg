import Layout from '@/components/layout/Layout';
import Header from '@/components/header/Header';
import {RaidContext} from '../RaidContext';

export default function EncounterPage({raid, encounter, children}) {
  return (
    <RaidContext.Provider value={raid}>
      <Layout title={encounter + 'encounter map'} description={'Destiny 2 raid encounter maps'}>
        <Header encounter={encounter} />
        {children}
      </Layout>
    </RaidContext.Provider>
  );
}
