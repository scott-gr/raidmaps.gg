import Card from '@/components/card/Card';
import RaidPage from '@/components/raidPage/RaidPage';

export default function RootOfNightmares() {
  const raid = 'Root of Nightmares';
  const raidLink = '/root_of_nightmares';
  return (
    <RaidPage raid={raid}>
        <Card text="1. Cataclysm" link={raidLink + '/1_cataclysm'}></Card>
        <Card text="2. Scission" link={raidLink + '/2_scission'}></Card>
        <Card text="3. Macrocosm" link={raidLink + '/3_macrocosm'}></Card>
        <Card text="4. Nezarec" link={raidLink + '/4_nezarec'}></Card>
    </RaidPage>
  );
}
