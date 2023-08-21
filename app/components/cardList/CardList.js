import styles from './cardList.module.css';

export default function CardList({children}) {
  return <div className={styles.container}>{children}</div>;
}
