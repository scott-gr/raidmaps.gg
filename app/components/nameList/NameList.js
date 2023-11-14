import styles from './nameList.module.css';

export default function NameList({children}) {
  return <div className={styles.container}>{children}</div>;
}
