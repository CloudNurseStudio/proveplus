'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';
import { Arrow } from './Arrow';

interface CertificateCardProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
}

function CertificateCard({ imageSrc, title, subtitle }: CertificateCardProps) {
  return (
    <button className="bg-prove-grey w-[234px] h-[293px] rounded-3xl relative flex flex-col overflow-hidden hover:scale-105 transition-transform">
      {/* Certificate Image */}
      <div className="relative flex-1 flex items-center justify-center p-6">
        <Image
          src={imageSrc}
          alt={title}
          width={140}
          height={195}
          className="object-contain"
        />
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-b-3xl px-4 py-3 h-[54px] flex flex-col items-start justify-center">
        <p className="text-base font-medium text-prove-main leading-5">
          {title}
        </p>
        {subtitle && (
          <p className="text-xs leading-4 text-prove-main">
            {subtitle}
          </p>
        )}
      </div>
    </button>
  );
}

export function CertificationSection() {
  const { t } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      imageSrc: '/images/certifications/cert-sb5.png',
      title: t.certifications.sb5.title,
      subtitle: t.certifications.sb5.subtitle,
    },
    {
      imageSrc: '/images/certifications/cert-gmp.png',
      title: t.certifications.gmp.title,
      subtitle: t.certifications.gmp.subtitle,
    },
    {
      imageSrc: '/images/certifications/cert-iso-9001.png',
      title: t.certifications.iso9001,
    },
    {
      imageSrc: '/images/certifications/cert-iso-22000.png',
      title: t.certifications.iso22000,
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full h-screen px-20 py-6 flex flex-col gap-16 justify-center">
      <div className="w-full px-9 py-6 flex flex-col gap-9 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center relative w-full"
        >
          <h2 className="text-[64px] font-medium text-prove-main text-center h-[71px] flex items-center justify-center">
            {t.certifications.title1}
          </h2>
          <div className="relative w-[388px] h-[104px] flex items-center justify-center">
            <p className="text-[48px] font-medium text-prove-primary text-center z-10">
              {t.certifications.title2}
            </p>
            {/* <div className="absolute left-[149px] top-[9px] w-[198px] h-[102px]">
              <Image
                src="/images/hero/image-45-decoration.png"
                alt=""
                fill
                className="object-cover"
              />
            </div> */}
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-[21px] items-center"
        >
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              imageSrc={cert.imageSrc}
              title={cert.title}
              subtitle={cert.subtitle}
            />
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex gap-[21px] items-center">
          <Arrow direction="left" onClick={handlePrevious} />
          <Arrow direction="right" onClick={handleNext} />
        </div>
      </div>
    </section>
  );
}

