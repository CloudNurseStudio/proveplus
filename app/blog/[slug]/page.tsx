import { notFound } from 'next/navigation';
import { blogPosts } from '../../lib/blog-data';
import { BlogPostPageClient } from './BlogPostPageClient';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPageClient post={post} />;
}

