'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function ScrollAnimatedElement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress to different positions across sections
  // 0 = top of page, 1 = bottom of page
  const x = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    800,  // Hero section - right side
    900,  // Product features - more right
    900,  // Benefits - center-right
    400,  // Certifications - far right
    200,  // Testimonials - center
    100,  // Footer - back to right
  ]);

  const y = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    350,  // Start near top
    300,  // Move down
    500,  // Continue down
    700,  // Further down
    900,  // Near bottom sections
    1100, // At footer
  ]);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [10, 10, 10], [0.8, 1.2, 0.8]);

  return (
    <>
      {/* Reference container to track scroll */}
      <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
      
      {/* Animated sachet element */}
      <motion.div
        style={{
          x,
          y,
          rotate,
          scale,
        }}
        className="fixed top-0 left-0 w-96 h-[640px] z-50 pointer-events-none"
      >
        <Image
          src="/images/sachet.png"
          alt="Prove+ Sachet"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </>
  );
}

