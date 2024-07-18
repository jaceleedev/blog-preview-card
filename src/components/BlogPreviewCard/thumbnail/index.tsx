import Image from 'next/image';
import styles from './index.module.css';

export type ThumbnailProps = {
  thumbnailImage: string;
};

function Thumbnail({ thumbnailImage }: ThumbnailProps) {
  return (
    <figure className={styles.thumbnail}>
      <Image
        className={styles.thumbnail__image}
        src={thumbnailImage}
        alt={`blog preview card thumbnail`}
        fill={true}
        priority={true}
      />
      <figcaption className="sr-only">blog preview card thumbnail</figcaption>
    </figure>
  );
}

export default Thumbnail;
