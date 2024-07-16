import BlogPreviewCard from '@/components/blog-preview-card/BlogPreviewCard';
import Thumbnail from '@/components/blog-preview-card/thumbnail/Thumbnail';

export default function Home() {
  return (
    <main>
      <BlogPreviewCard>
        <Thumbnail
          imagePath="/images/illustration-article.svg"
          alt="thumbnail"
        />
      </BlogPreviewCard>
    </main>
  );
}
