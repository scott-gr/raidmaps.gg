import CardList from '../components/cardList/CardList';

export default function RaidLayout({children}) {
  return (
    <>
      <CardList>{children}</CardList>
    </>
  );
}
