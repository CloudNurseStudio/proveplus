'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationBar } from '../components/v2/NavigationBar';
import { FooterNav } from '../components/v2/FooterNav';
import { useLocale } from '../components/v2/LocaleProvider';
import { blogPosts, BlogPost } from '../lib/blog-data';
import { cn } from '../lib/utils';

const BlogCard = ({ post, index, locale, blogT }: { post: BlogPost; index: number; locale: string; blogT: any }) => {
  const title = locale === 'th' && post.title_th ? post.title_th : post.title;
  const excerpt = locale === 'th' && post.excerpt_th ? post.excerpt_th : post.excerpt;
  const date = locale === 'th' && post.date_th ? post.date_th : post.date;
  const readTime = locale === 'th' && post.readTime_th ? post.readTime_th : post.readTime;
  const readArticleLabel = blogT?.readArticle ?? 'Read Article';
  const byLabel = blogT?.byAuthor ?? 'By';

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <motion.div
        className="group relative h-full flex flex-col bg-[rgba(255,255,255,0.5)] backdrop-blur-sm rounded-[24px] overflow-hidden border border-white/40 transition-all duration-300"
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)' }}
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          <Image
            src={post.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.endsWith('.webp')) {
                target.src = target.src.replace('.webp', '.jpg');
              }
            }}
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
             <span className="px-3 py-1 text-xs font-bold text-white bg-[#5d6fcd] backdrop-blur-md rounded-full shadow-sm">
                {post.category}
              </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 font-medium">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          <h3 className="font-fc-orbit text-xl sm:text-2xl text-[#4456a6] mb-3 line-clamp-2 group-hover:text-[#5d6fcd] transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
            {excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <span className="font-outfit font-bold text-sm text-[#5d6fcd] uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              {readArticleLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <span className="text-xs text-gray-400 font-medium">
              {byLabel} {post.author}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { locale, t } = useLocale();
  const blogT = (t as any).blog;

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter posts
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white from-[4.238%] via-[#fef0ca] via-[47.881%] to-[#8fdafa]">
      {/* Navigation */}
      <div className="fixed top-2 sm:top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-2 sm:px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <NavigationBar />
        </div>
      </div>

      <main className="w-full max-w-7xl mx-auto pt-32 pb-16 px-6 sm:px-8">
        {/* Header */}
        <section className="mb-12 text-center">
          <motion.h1
            className="font-fc-orbit font-medium text-4xl sm:text-5xl md:text-6xl text-[#5d6fcd] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {blogT?.title ?? 'Latest Updates'}
          </motion.h1>
          <motion.p
            className="font-outfit text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {blogT?.subtitle ?? 'Explore insights about probiotics, gut health, and wellness science.'}
          </motion.p>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-[#5d6fcd] text-white shadow-lg scale-105"
                    : "bg-white/60 text-gray-600 hover:bg-white hover:shadow-md"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} locale={locale} blogT={blogT} />
            ))}
          </AnimatePresence>
        </section>
        
        {filteredPosts.length === 0 && (
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-gray-500 font-medium"
             >
                 {blogT?.noArticles ?? 'No articles found in this category.'}
             </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto">
        <FooterNav />
      </footer>
    </div>
  );
}
