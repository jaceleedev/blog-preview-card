import Image from 'next/image';
import styles from './Author.module.css';

type AuthorProps = {
  imagePath: string;
  name: string;
};

function Author({ imagePath, name }: AuthorProps) {
  return (
    <figure className={styles.author}>
      <Image
        src={imagePath}
        alt={`profile picture of author ${name}`}
        width={32}
        height={32}
        priority={true}
        className={styles.author__image}
      />
      <figcaption className={styles.author__name}>{name}</figcaption>
    </figure>
  );
}

export default Author;
