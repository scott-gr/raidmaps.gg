import NameList from '@/app/components/nameList/NameList';
import styles from './page.module.css';
import TitleCard from '@/app/components/card/TitleCard';
import raids from '@/app/api/raids.json';


export const metadata = {
  title: {
    template: '%s | RaidMaps.gg',
    default: 'RaidMaps.gg',
  },
  description: 'Simple raid maps for Destiny 2. Easy to share with your LFG fireteam.',
  author: 'Fargabarga',
  openGraph: {
    title: 'RaidMaps.gg',
    description: 'Simple raid maps for Destiny 2. Easy to share with your LFG fireteam.',
    type: 'website',
    url: 'https://raidmaps.gg',
    siteName: 'RaidMaps.gg',
    locale: 'en_US',
    image: '../assets/logos/raidmaps-logo.png',
  },
};

export default function Home() {
  const raidList = raids.raids.map(raid => {
    return <TitleCard key={raid.id} text={raid.name} link={raid.link} raidstyle={styles[raid.style]}></TitleCard>;
  });

  return (
    <>
      <NameList>{raidList}</NameList>
    </>
  );
}
