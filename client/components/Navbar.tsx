"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState<boolean>(true);

  useEffect(() => {
    const heroEl = document.querySelector(
      'section[aria-label="Featured product"]'
    );
    const scrollRoot = document.querySelector("main");

    if (!heroEl) {
      setIsHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        root: (scrollRoot as Element) ?? null,
        threshold: 0.35,
      }
    );

    observer.observe(heroEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const logoColorClass = isHeroVisible
    ? "text-brand-primary-700"
    : "text-white";

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[343px]">
      <div
        className={
          "flex justify-between items-center rounded-[60px] px-6 py-4 h-[72px] transition-colors duration-300 " +
          (isHeroVisible
            ? "bg-white/30 backdrop-blur-[20px] border border-white"
            : "bg-brand-primary-700 backdrop-blur-[20px] text-white border border-white/30")
        }
      >
        <div className="flex-shrink-0">
          <a href="/" aria-label="Home" className="inline-block">
            <svg
              width="106"
              height="30"
              viewBox="0 0 106 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={logoColorClass + " relative top-[2px]"}
            >
              <g clipPath="url(#clip0_logo)">
                <path
                  d="M4.89422 20.7196V30.0001H0V3.88352H4.89422V5.47389C4.97466 5.5683 5.98936 4.68844 6.1764 4.57261C11.875 1.03662 18.6678 6.02283 19.0535 12.2957C19.5468 20.3128 11.6163 25.8265 4.89325 20.7206L4.89422 20.7196ZM5.86724 9.49848C3.34648 12.1264 4.70232 17.6839 8.66519 18.0674C15.8398 18.7614 15.771 7.2852 8.54598 8.13976C7.65533 8.24487 6.48556 8.85318 5.86724 9.49848Z"
                  fill="currentColor"
                />
                <path
                  d="M90.9373 14.7532L77.4458 14.8885C78.4837 19.1633 84.2298 19.5691 86.9037 16.6132L89.7385 19.4796C86.7225 23.4575 80.2117 23.5743 76.3458 20.8286C69.7962 16.1782 71.8547 5.58866 79.6457 3.76859C86.7448 2.11009 92.2631 7.66665 90.9373 14.7532ZM86.3086 11.1744C85.7107 6.20573 78.3568 6.61646 77.4458 11.1744H86.3086Z"
                  fill="currentColor"
                />
                <path
                  d="M43.5045 3.5252C56.8933 2.35919 58.1251 21.9235 45.0503 22.706C32.3622 23.4662 30.8299 4.62795 43.5045 3.5252ZM43.7662 8.16297C38.305 8.79854 38.3118 17.6702 44.1277 18.0663C50.9844 18.5335 50.9767 7.32496 43.7662 8.16297Z"
                  fill="currentColor"
                />
                <path
                  d="M58.7827 3.88354L63.2147 15.5515L67.8443 3.88354H73.069L64.807 22.3207L61.3617 22.1796L53.3594 3.88354H58.7827Z"
                  fill="currentColor"
                />
                <path
                  d="M100.821 1.70911V3.91364C100.821 4.85774 101.583 5.62275 102.523 5.62275H104.298C105.238 5.62275 106 6.38776 106 7.33186V7.48175C106 8.42585 105.238 9.19086 104.298 9.19086H102.523C101.583 9.19086 100.821 9.95588 100.821 10.9V13.1045C100.821 14.0486 100.059 14.8136 99.1192 14.8136H98.9622C98.0221 14.8136 97.2604 14.0486 97.2604 13.1045V10.9C97.2604 9.95588 96.4986 9.19086 95.5585 9.19086H93.6755C92.7354 9.19086 91.9736 8.42585 91.9736 7.48175V7.33186C91.9736 6.38776 92.7354 5.62275 93.6755 5.62275H95.5585C96.4986 5.62275 97.2604 4.85774 97.2604 3.91364V1.70911C97.2604 0.765013 98.0221 0 98.9622 0H99.1192C100.059 0 100.821 0.765013 100.821 1.70911Z"
                  fill="currentColor"
                />
                <path
                  d="M26.3502 3.88342V5.47379C28.525 2.96462 33.2428 2.66679 35.3207 5.40858L32.2369 8.91635C30.7008 7.43012 27.6944 7.82528 26.7631 9.79815C26.6807 9.97237 26.3502 10.8688 26.3502 10.9758V22.3109H21.3232V3.88342H26.3502Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_logo">
                  <rect width="106" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        <a
          href="/#where-to-buy"
          className={
            "flex items-center gap-1.5 px-4 py-1 rounded-full text-base font-bold leading-6 transition-colors duration-200 text-outfit " +
            (isHeroVisible
              ? "bg-brand-primary-700 text-white hover:opacity-90"
              : "bg-white text-brand-primary-700 hover:bg-white/90")
          }
        >
          Shop now
          <span className="flex items-center justify-center w-5 h-5">
            <ArrowRight
              className={
                "w-4 h-4 " +
                (isHeroVisible ? "text-white" : "text-brand-primary-700")
              }
            />
          </span>
        </a>
      </div>
    </nav>
  );
}


