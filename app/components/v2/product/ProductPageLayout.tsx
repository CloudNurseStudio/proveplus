'use client';

import { ReactNode } from 'react';
import { NavigationBar } from '../NavigationBar';
import { FooterNav } from '../FooterNav';

interface ProductPageLayoutProps {
  children: ReactNode;
}

export function ProductPageLayout({ children }: ProductPageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white from-[4.238%] via-[#fef0ca] via-[47.881%] to-[#8fdafa]">
      <div className="fixed top-2 sm:top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-2 sm:px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <NavigationBar />
        </div>
      </div>

      <main className="flex flex-col gap-6 sm:gap-10 pt-24 sm:pt-28 md:pt-32 pb-12">
        {children}
      </main>

      <footer className="w-full mt-8 sm:mt-12 md:mt-16">
        <FooterNav />
      </footer>
    </div>
  );
}

