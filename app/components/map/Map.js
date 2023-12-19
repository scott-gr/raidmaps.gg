import Image from 'next/image';
import styles from './map.module.css';

const imgStyle = {
  objectFit: 'contain',
}

export default function Map({src, alt}) {
  return (
    <div className={styles.mapContainer}>
      <Image src={src} alt={alt} fill style={imgStyle}/>
    </div>
  );
}
