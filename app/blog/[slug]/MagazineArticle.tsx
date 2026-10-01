'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from '../../components/v2/LocaleProvider';
import { type BlogPost } from '../../lib/blog-data';
import './magazine.css';

interface MagazineArticleProps {
  post: BlogPost;
}

// Split "Question? Answer" / "Topic: Detail" headlines into a two-tone pair.
function splitHeadline(title: string): [string, string | null] {
  const match = title.match(/^(.+?[?:])\s+(.+)$/);
  return match ? [match[1], match[2]] : [title, null];
}

export function MagazineArticle({ post }: MagazineArticleProps) {
  const { locale, t } = useLocale();
  const isTh = locale === 'th';

  const title = isTh && post.title_th ? post.title_th : post.title;
  const standfirst = isTh && post.excerpt_th ? post.excerpt_th : post.excerpt;
  const kicker = (isTh && post.kicker_th ? post.kicker_th : post.kicker) ?? post.category;
  const date = isTh && post.date_th ? post.date_th : post.date;
  const readTime = isTh && post.readTime_th ? post.readTime_th : post.readTime;
  const content = isTh && post.content_th ? post.content_th : post.content;
  const backLabel = (t as any).blog?.backToBlog ?? 'Back to Blog';
  const byLabel = (t as any).blog?.byAuthor ?? 'By';
  const [headline, dek] = splitHeadline(title);
  const coverJpg = post.image.replace(/\.webp$/, '.jpg');

  return (
    <main className="w-full pt-24 sm:pt-28 pb-20">
      <header className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#4456a6] font-bold hover:text-[#5d6fcd] transition-colors px-4 py-2 rounded-full bg-[#f5f7ff] hover:bg-[#eff2ff]"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          {backLabel}
        </Link>

        <div className="mt-5 grid overflow-hidden rounded-[32px] bg-gradient-to-br from-[#eef2ff] via-[#f5f7ff] to-[#e3f4fd] lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            className="order-2 lg:order-1 flex flex-col justify-center px-6 py-8 sm:p-10 lg:p-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className={
                isTh
                  ? 'text-sm font-bold text-[#5d6fcd]'
                  : 'text-xs font-bold uppercase tracking-[0.12em] text-[#5d6fcd]'
              }
            >
              {kicker}
            </p>
            <h1 className="mt-4 text-[clamp(2.1rem,5vw,3.5rem)] font-bold leading-[1.12] text-[#4554a4]">
              {headline}
              {dek && (
                <span className="mt-3 block text-[0.6em] font-semibold leading-[1.3] text-[#6678d6]">{dek}</span>
              )}
            </h1>
            <div className="mt-6 h-1 w-14 rounded-full bg-[#5d6fcd]" aria-hidden="true" />
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#475467]">{standfirst}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#667085]">
              <span className="w-full sm:w-auto font-semibold text-[#1d2939]">
                {byLabel} {post.author}
              </span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>{date}</span>
              <span aria-hidden="true">·</span>
              <span>{readTime}</span>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 relative aspect-[1955/1533] lg:aspect-auto lg:min-h-[560px] bg-[#cfe9f6]"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <picture>
              <source srcSet={post.image} type="image/webp" />
              <img src={coverJpg} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            </picture>
          </motion.div>
        </div>
      </header>

      <motion.article
        lang={isTh ? 'th' : 'en'}
        className="mag-body mt-12 sm:mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <footer className="mt-14 px-4 sm:px-8">
        <div className="mx-auto flex max-w-[40rem] flex-wrap items-center justify-between gap-4 border-t border-[#eaecf0] pt-6">
          <ul className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-[#d0d5dd] px-3 py-1 text-xs font-medium text-[#667085]">
                {tag}
              </li>
            ))}
          </ul>
          <Link href="/blog" className="text-sm font-bold text-[#5d6fcd] hover:text-[#4a5bb5] transition-colors">
            {backLabel}
          </Link>
        </div>
      </footer>
    </main>
  );
}
