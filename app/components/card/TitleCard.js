import styles from "./card.module.css";
import Link from "next/link";

export default function TitleCard({ text, link, raidstyle }) {
  return (
    <div className={`${styles.titleCard} ${raidstyle}`}>
      <Link href={link}>
        {/* <Image src={img} alt={text + ' image'} /> */}
        <p>{text}</p>
      </Link>
    </div>
  );
}
