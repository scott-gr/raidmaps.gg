import Image from 'next/image';
import styles from './mapImage.module.css';

export default function MapImage({src, alt}) {
  return (
    <div className={styles.mapContainer}>
      <Image
        fill
        sizes="(max-width: 425px) 100vw, 
              (max-width: 768px) 90vw,
              80vw"
        src={src}
        quality={85}
        alt={alt}
        placeholder="blur"
      />
    </div>
  );
}
