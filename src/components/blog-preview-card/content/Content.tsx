import styles from './Content.module.css';

type ContentProps = {
  category: string;
  date: string;
  title: string;
  description: string;
};

function Content({ category, date, title, description }: ContentProps) {
  return (
    <div className={styles.content}>
      <span className={styles.content__category}>{category}</span>
      <time className={styles.content__date} dateTime={date}>
        Published {date}
      </time>
      <h2 className={styles.content__title}>{title}</h2>
      <p className={styles.content__description}>{description}</p>
    </div>
  );
}

export default Content;
