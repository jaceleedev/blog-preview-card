import BlogPreviewCard from '@/components/blog-preview-card/BlogPreviewCard';

export default function Home() {
  return (
    <main>
      <BlogPreviewCard
        thumbnailImage="/images/illustration-article.svg"
        category="Learning"
        date="21 Dec 2023"
        title="HTML & CSS foundations"
        description="These languages are the backbone of every website, defining structure, content, and presentation."
        authorImage="/images/image-avatar.webp"
        authorName="Greg Hooper"
      />
    </main>
  );
}
