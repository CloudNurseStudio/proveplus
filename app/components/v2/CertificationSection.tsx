'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';
import { Arrow } from './Arrow';
import { useModalService } from './ModalServiceProvider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/app/components/ui/carousel';

interface CertificateCardProps {
  imageSrc: string;
  imageSrcWebp?: string;
  title: string;
  subtitle?: string;
  onSelect: () => void;
}

function CertificateCard({
  imageSrc,
  imageSrcWebp,
  title,
  subtitle,
  onSelect,
}: CertificateCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="bg-prove-grey w-[200px] sm:w-[220px] md:w-[234px] h-[250px] sm:h-[270px] md:h-[293px] rounded-2xl sm:rounded-3xl relative flex flex-col overflow-hidden transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-prove-main flex-shrink-0"
    >
      {/* Certificate Image */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-5 md:p-6">
        <picture>
           {imageSrcWebp && <source srcSet={imageSrcWebp} type="image/webp" />}
           <img
            src={imageSrc}
            alt={title}
            width={140}
            height={195}
            className="object-contain w-[100px] sm:w-[120px] md:w-[140px] h-auto"
           />
        </picture>
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-b-2xl sm:rounded-b-3xl px-3 sm:px-4 py-2 sm:py-3 min-h-[48px] sm:min-h-[54px] flex flex-col items-start justify-center">
        <p className="text-sm sm:text-base font-medium text-prove-main leading-tight sm:leading-5">
          {title}
        </p>
        {subtitle && (
          <p className="text-xs leading-tight sm:leading-4 text-prove-main">
            {subtitle}
          </p>
        )}
      </div>
    </button>
  );
}

function CarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  if (!canScrollPrev && !canScrollNext) return null;

  return (
    <div className="flex gap-4 sm:gap-5 md:gap-[21px] items-center">
      <Arrow
        direction="right"
        onClick={scrollNext}
        className={!canScrollNext ? 'opacity-50 cursor-not-allowed' : ''}
      />
      <Arrow
        direction="left"
        onClick={scrollPrev}
        className={!canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''}
      />
    </div>
  );
}

export function CertificationSection() {
  const { t } = useLocale();
  const { openCertificateModal } = useModalService();

  const certificates = [
    {
      imageSrc: '/images/certifications/cert-sb5.jpg',
      imageSrcWebp: '/images/certifications/cert-sb5.webp',
      title: t.certifications.sb5.title,
      subtitle: t.certifications.sb5.subtitle,
      description: t.certifications.sb5.description,
    },
    {
      imageSrc: '/images/certifications/cert-gmp.jpg',
      imageSrcWebp: '/images/certifications/cert-gmp.webp',
      title: t.certifications.gmp.title,
      subtitle: t.certifications.gmp.subtitle,
      description: t.certifications.gmp.description,
    },
    {
      imageSrc: '/images/certifications/cert-iso-9001.jpg',
      imageSrcWebp: '/images/certifications/cert-iso-9001.webp',
      title: t.certifications.iso9001.title,
      description: t.certifications.iso9001.description,
    },
    {
      imageSrc: '/images/certifications/cert-iso-22000.jpg',
      imageSrcWebp: '/images/certifications/cert-iso-22000.webp',
      title: t.certifications.iso22000.title,
      description: t.certifications.iso22000.description,
    },
    {
      imageSrc: '/images/certifications/cert-haccp.jpg',
      imageSrcWebp: '/images/certifications/cert-haccp.webp',
      title: t.certifications.haccp.title,
      subtitle: t.certifications.haccp.subtitle,
      description: t.certifications.haccp.description,
    },
    {
      imageSrc: '/images/certifications/cert-nsf.jpg',
      imageSrcWebp: '/images/certifications/cert-nsf.webp',
      title: t.certifications.nsf.title,
      subtitle: t.certifications.nsf.subtitle,
      description: t.certifications.nsf.description,
    },
  ];

  return (
    <section className="w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-12 md:py-16 flex flex-col gap-8 sm:gap-12 md:gap-16 justify-center">
      <div className="w-full px-4 sm:px-6 md:px-9 py-4 sm:py-6 flex flex-col gap-6 sm:gap-9 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center relative w-full"
        >
          <h2 className="text-[clamp(2.5rem,7vw,4rem)] font-medium text-prove-main text-center flex items-center justify-center">
            {t.certifications.title1}
          </h2>
          <div className="relative w-full max-w-[388px] flex items-center justify-center">
            <p className="text-[clamp(1.75rem,5vw,3rem)] font-medium text-prove-primary text-center z-10">
              {t.certifications.title2}
            </p>
          </div>
        </motion.div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: false,
            slidesToScroll: 1,
          }}
          className="w-full max-w-6xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CarouselContent className="-ml-4 sm:-ml-5 md:-ml-[21px]">
              {certificates.map((cert) => (
                <CarouselItem
                  key={cert.title}
                  className="pl-4 sm:pl-5 md:pl-[21px] basis-auto"
                >
                  <CertificateCard
                    imageSrc={cert.imageSrc}
                    imageSrcWebp={cert.imageSrcWebp}
                    title={cert.title}
                    subtitle={cert.subtitle}
                    onSelect={() =>
                      openCertificateModal({
                        title: cert.title,
                        subtitle: cert.subtitle,
                        imageSrc: cert.imageSrc,
                        description:
                          cert.description ?? t.certifications.modalDescription,
                      })
                    }
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="mt-6 flex justify-center">
            <CarouselControls />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

