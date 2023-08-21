import CardList from '@/app/components/cardList/CardList';
import styles from './page.module.css';
import TitleCard from '@/app/components/card/TitleCard';
import raids from '@/app/api/raids.json';

export default function Home() {
  const raidList = raids.raids.map(raid => {
    return <TitleCard key={raid.id} text={raid.name} link={raid.link} raidstyle={styles[raid.style]}></TitleCard>;
  });

  return (
    <>
      <CardList>{raidList}</CardList>
    </>
  );
}
