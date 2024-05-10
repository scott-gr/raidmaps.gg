import Image from 'next/image';
import styles from './map.module.css';
// import careTaker from 'app/api/Caretaker svg final2.svg';

const imgStyle = {
  objectFit: 'contain',
};

export default function Map({ src, alt }) {
  return (
    <div className={styles.mapContainer}>
      <Image
        formats={['image/svg']}
        priority
        src={src}
        alt={alt}
        fill
        unoptimized
        style={imgStyle}
      />
    </div>
  );
}
