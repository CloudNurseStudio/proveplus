'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationBar } from '../../components/v2/NavigationBar';
import { FooterNav } from '../../components/v2/FooterNav';
import { blogPosts } from '../../lib/blog-data';
import { motion } from 'framer-motion';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <div className="fixed top-2 sm:top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-2 sm:px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <NavigationBar />
        </div>
      </div>

      <main className="w-full max-w-4xl mx-auto pt-32 pb-16 px-6 sm:px-8">
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4456a6] font-bold hover:text-[#5d6fcd] transition-colors px-5 py-2.5 rounded-full bg-[#f5f7ff] hover:bg-[#eff2ff]"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header 
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 text-sm text-gray-500 font-medium mb-4">
            <span className="bg-[#f0f4f8] px-3 py-1 rounded-full">{post.tags[0]}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-fc-orbit font-medium text-3xl sm:text-4xl md:text-5xl text-[#4456a6] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-3">
            <div className="text-left">
              <p className="font-bold text-gray-900 text-sm">{post.author}</p>
              <p className="text-gray-500 text-xs">Author</p>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div 
          className="relative w-full aspect-video rounded-[32px] overflow-hidden mb-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
           <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg'; 
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.article 
          className="prose prose-lg prose-blue max-w-none 
            prose-headings:font-fc-orbit prose-headings:text-[#4456a6] 
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-strong:text-[#4456a6]
            prose-li:text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </main>

      {/* Footer */}
      <footer className="w-full mt-auto">
        <FooterNav />
      </footer>
    </div>
  );
}

