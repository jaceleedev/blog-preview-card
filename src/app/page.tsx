import BlogPreviewCard from '@/components/blog-preview-card/BlogPreviewCard';
import Thumbnail from '@/components/blog-preview-card/thumbnail/Thumbnail';
import Content from '@/components/blog-preview-card/content/Content';
import Author from '@/components/blog-preview-card/author/Author';

export default function Home() {
  return (
    <main>
      <BlogPreviewCard>
        <Thumbnail
          imagePath="/images/illustration-article.svg"
          alt="thumbnail"
        />
        <Content
          category="Learning"
          date="21 Dec 2023"
          title="HTML & CSS foundations"
          description="These languages are the backbone of every website, defining structure, content, and presentation."
        />
        <Author imagePath="/images/image-avatar.webp" name="Greg Hooper" />
      </BlogPreviewCard>
    </main>
  );
}
