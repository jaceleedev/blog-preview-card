import styles from './Content.module.css';

export type ContentProps = {
  category: string;
  date: string;
  title: string;
  description: string;
};

function Content({ category, date, title, description }: ContentProps) {
  return (
    <div className={styles.content}>
      <span className={styles.content__category}>{category}</span>
      <time className={styles.content__date} dateTime="2023-12-21">
        Published {date}
      </time>
      <h1 className={styles.content__title}>{title}</h1>
      <p className={styles.content__description}>{description}</p>
    </div>
  );
}

export default Content;
