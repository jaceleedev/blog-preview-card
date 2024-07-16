import Image from 'next/image';
import styles from './Thumbnail.module.css';

type ThumbnailProps = {
  imagePath: string;
  alt: string;
};

function Thumbnail({ imagePath, alt }: ThumbnailProps) {
  return (
    <figure className={styles.thumbnail}>
      <Image
        className={styles.thumbnail__image}
        src={imagePath}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
      <figcaption>{alt}</figcaption>
    </figure>
  );
}

export default Thumbnail;
