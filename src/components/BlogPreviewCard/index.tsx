import Author, { AuthorProps } from './author';
import styles from './index.module.css';
import Content, { ContentProps } from './content';
import Thumbnail, { ThumbnailProps } from './thumbnail';

type BlogPreviewCardProps = ThumbnailProps & ContentProps & AuthorProps;

function BlogPreviewCard({
  thumbnailImage,
  category,
  date,
  title,
  description,
  authorImage,
  authorName,
}: BlogPreviewCardProps) {
  return (
    <article
      className={styles['blog-preview-card']}
      aria-label="blog-preview-card"
    >
      <Thumbnail thumbnailImage={thumbnailImage} />
      <Content
        category={category}
        date={date}
        title={title}
        description={description}
      />
      <Author authorImage={authorImage} authorName={authorName} />
    </article>
  );
}

export default BlogPreviewCard;
