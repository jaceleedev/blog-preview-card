import styles from './Author.module.css';

type AuthorProps = {
  name: string;
  imagePath: string;
};

function Author({ name, imagePath }: AuthorProps) {
  return (
    <div className={styles.author}>
      <div
        className={styles.author__image}
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
        aria-label={`profile picture of ${name}`}
      />
      <p className={styles.author__name}>{name}</p>
    </div>
  );
}

export default Author;
