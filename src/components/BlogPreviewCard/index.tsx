import Author, { AuthorProps } from './author/Author';
import styles from './index.module.css';
import Content, { ContentProps } from './content/Content';
import Thumbnail, { ThumbnailProps } from './thumbnail/Thumbnail';

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
