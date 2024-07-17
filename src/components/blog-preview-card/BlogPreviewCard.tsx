import { ReactNode } from 'react';
import styles from './BlogPreviewCard.module.css';

type BlogPreviewCardProps = {
  children: ReactNode;
};

function BlogPreviewCard({ children }: BlogPreviewCardProps) {
  return (
    <article
      className={styles['blog-preview-card']}
      aria-label="blog-preview-card"
    >
      {children}
    </article>
  );
}

export default BlogPreviewCard;
