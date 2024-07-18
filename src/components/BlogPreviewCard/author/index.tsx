import Image from 'next/image';
import styles from './index.module.css';

export type AuthorProps = {
  authorImage: string;
  authorName: string;
};

function Author({ authorImage, authorName }: AuthorProps) {
  return (
    <figure className={styles.author}>
      <Image
        src={authorImage}
        alt={`profile picture of author ${authorName}`}
        width={32}
        height={32}
        priority={true}
        className={styles.author__image}
      />
      <figcaption className={styles.author__name}>{authorName}</figcaption>
    </figure>
  );
}

export default Author;
