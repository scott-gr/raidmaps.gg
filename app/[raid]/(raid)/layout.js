import NameList from '../../components/nameList/NameList';

export default function RaidLayout({children}) {
  return (
    <>
      <NameList>{children}</NameList>
    </>
  );
}
