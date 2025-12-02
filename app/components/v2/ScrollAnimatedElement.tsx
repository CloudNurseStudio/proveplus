'use client';

import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  MotionValue,
} from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import {
  MICRO_IMAGE_ANCHOR_ID,
  MICRO_SECTION_ID,
} from './MicroProbioticSection';

type ScrollPhase = 'hero' | 'micro';

export function ScrollAnimatedElement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<ScrollPhase>('hero');
  const [microSection, setMicroSection] = useState<HTMLElement | null>(null);
  const [microAnchor, setMicroAnchor] = useState<HTMLElement | null>(null);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const springConfig = useMemo(
    () => ({
      stiffness: 100,
      damping: 20,
      mass: 0.6,
    }),
    []
  );

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const heroXRange = useMemo(() => {
    const width = viewport.width || 1200;
    return [
      width * 0.1, // lean on hero box
      width * 0.18,
      width * 0.45,
      width * 0.62, // near micro section
    ];
  }, [viewport.width]);

  const heroYRange = useMemo(() => {
    const height = viewport.height || 800;
    return [
      height * 0.3,
      height * 0.32,
      height * 0.38,
      height * 0.42,
    ];
  }, [viewport.height]);

  const heroRotateRange = [-18, -8, 4, 8];
  const heroScaleRange = [1, 1.03, 1.05, 1.02];

  const rawHeroX = useTransform(scrollYProgress, [0, 0.35, 0.6, 0.85], heroXRange);
  const rawHeroY = useTransform(scrollYProgress, [0, 0.35, 0.6, 0.85], heroYRange);
  const rawHeroRotate = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 0.95],
    heroRotateRange
  );
  const rawHeroScale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 0.95],
    heroScaleRange
  );

  const heroX = useSpring(rawHeroX as MotionValue<number>, springConfig);
  const heroY = useSpring(rawHeroY as MotionValue<number>, springConfig);
  const heroRotate = useSpring(rawHeroRotate as MotionValue<number>, springConfig);
  const heroScale = useSpring(rawHeroScale as MotionValue<number>, springConfig);

  useEffect(() => {
    const node = document.getElementById(MICRO_SECTION_ID);
    const anchorNode = document.getElementById(MICRO_IMAGE_ANCHOR_ID);

    if (!node) {
      return;
    }

    setMicroSection(node);
    setMicroAnchor(anchorNode);
    let sectionTop = node.getBoundingClientRect().top + window.scrollY;

    const updateSectionTop = () => {
      sectionTop = node.getBoundingClientRect().top + window.scrollY;
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight || 1;
      const triggerPoint = sectionTop - windowHeight * 0.35;
      const nextPhase: ScrollPhase =
        window.scrollY >= triggerPoint ? 'micro' : 'hero';
      setPhase((prev) => (prev === nextPhase ? prev : nextPhase));
    };

    const handleResize = () => {
      updateSectionTop();
      handleScroll();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const stickyElement = useMemo(() => {
    const portalTarget = microAnchor ?? microSection;
    if (!portalTarget || phase !== 'micro') {
      return null;
    }

    return createPortal(
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-28 h-[340px] sm:w-32 sm:h-[380px] lg:w-40 lg:h-[440px] lg:-translate-y-2">
          <picture className="absolute inset-0 w-full h-full">
            <source srcSet="/images/sachet.webp" type="image/webp" />
            <img
                src="/images/sachet.jpg"
                alt="Prove+ Sachet"
                className="object-contain w-full h-full"
            />
          </picture>
        </div>
      </motion.div>,
      portalTarget
    );
  }, [microAnchor, microSection, phase]);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      {phase === 'hero' && (
        <motion.div
          style={{
            x: heroX,
            y: heroY,
            rotate: heroRotate,
            scale: heroScale,
            transformOrigin: '50% 100%',
          }}
          className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
        >
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="relative w-64 h-[440px] sm:w-72 sm:h-[500px] lg:w-80 lg:h-[560px]">
              <picture className="absolute inset-0 w-full h-full">
                <source srcSet="/images/sachet.webp" type="image/webp" />
                <img
                    src="/images/sachet.jpg"
                    alt="Prove+ Sachet"
                    className="object-contain w-full h-full"
                />
              </picture>
            </div>
          </div>
        </motion.div>
      )}

      {stickyElement}
    </>
  );
}

