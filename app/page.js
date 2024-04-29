import NameList from "@/app/components/nameList/NameList";
import styles from "./page.module.css";
import TitleCard from "@/app/components/card/TitleCard";
import raids from "@/app/api/raids.json";

export default function Home() {
  let showPantheon = true;

  let raidData = showPantheon ? raids.raids.slice(1) : raids.raids;

  const raidList = raidData.map((raid) => {
    return (
      <TitleCard
        key={raid.id}
        text={raid.name}
        link={raid.link}
        raidstyle={styles[raid.style]}
      ></TitleCard>
    );
  });

  return (
    <>
      {showPantheon ? (
        <TitleCard
          text="Pantheon"
          link="pantheon"
          raidstyle={styles.pan}
        ></TitleCard>
      ) : (
        ""
      )}
      <NameList>{raidList}</NameList>
    </>
  );
}
