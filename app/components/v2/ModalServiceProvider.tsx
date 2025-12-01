'use client';

import Image from 'next/image';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/client/components/ui/dialog';
import { cn } from '@/app/lib/utils';
import { ShopModalContent } from './ShopModalContent';

type VideoModalPayload = {
  customerName: string;
  customerTitle: string;
  thumbnailSrc: string;
  videoUrl?: string;
  description?: string;
  ctaUrl?: string;
  ctaLabel?: string;
};

type CertificateModalPayload = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  description?: string;
};

type EventModalPayload = {
  title: string;
  description: string;
  date: string;
  location: string;
  imageSrc: string;
  cta: string;
  ctaUrl?: string;
};

type ShopModalPayload = {
  heading: string;
};

type ModalState =
  | { type: 'video'; payload: VideoModalPayload }
  | { type: 'certificate'; payload: CertificateModalPayload }
  | { type: 'event'; payload: EventModalPayload }
  | { type: 'shop'; payload: ShopModalPayload }
  | null;

interface ModalServiceValue {
  openVideoModal: (payload: VideoModalPayload) => void;
  openCertificateModal: (payload: CertificateModalPayload) => void;
  openEventModal: (payload: EventModalPayload) => void;
  openShopModal: (payload: ShopModalPayload) => void;
  closeModal: () => void;
}

const ModalServiceContext = createContext<ModalServiceValue | null>(null);

export function ModalServiceProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<ModalState>(null);
  const [open, setOpen] = useState(false);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const openVideoModal = useCallback((payload: VideoModalPayload) => {
    setModalState({ type: 'video', payload });
    setOpen(true);
  }, []);

  const openCertificateModal = useCallback(
    (payload: CertificateModalPayload) => {
      setModalState({ type: 'certificate', payload });
      setOpen(true);
    },
    [],
  );

  const openEventModal = useCallback((payload: EventModalPayload) => {
    setModalState({ type: 'event', payload });
    setOpen(true);
  }, []);

  const openShopModal = useCallback((payload: ShopModalPayload) => {
    setModalState({ type: 'shop', payload });
    setOpen(true);
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setTimeout(() => setModalState(null), 200);
    }
  };

  const contextValue = useMemo(
    () => ({
      openVideoModal,
      openCertificateModal,
      openEventModal,
      openShopModal,
      closeModal,
    }),
    [closeModal, openCertificateModal, openEventModal, openShopModal, openVideoModal],
  );

  const modalSizeClass =
    modalState?.type === 'certificate'
      ? 'max-w-[90vw] max-h-[90vh] w-full h-full'
      : modalState?.type === 'shop'
        ? 'max-w-[667px] sm:max-w-[667px]'
        : 'max-w-3xl';

  return (
    <ModalServiceContext.Provider value={contextValue}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className={cn('bg-white/95 text-prove-primary', modalSizeClass)}
        >
          {modalState?.type === 'video' && (
            <VideoModal {...modalState.payload} />
          )}
          {modalState?.type === 'certificate' && (
            <CertificateModal {...modalState.payload} />
          )}
          {modalState?.type === 'event' && (
            <EventModal {...modalState.payload} />
          )}
          {modalState?.type === 'shop' && (
            <ShopModal {...modalState.payload} />
          )}
        </DialogContent>
      </Dialog>
    </ModalServiceContext.Provider>
  );
}

function VideoModal({
  customerName,
  customerTitle,
  thumbnailSrc,
  videoUrl,
  description,
  ctaUrl,
  ctaLabel,
}: VideoModalPayload) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl text-prove-main">
          {customerName}
        </DialogTitle>
        <DialogDescription className="text-base text-prove-primary">
          {customerTitle}
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4">
        {videoUrl ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <iframe
              src={videoUrl}
              title={customerName}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={thumbnailSrc}
              alt={customerName}
              fill
              sizes="(max-width: 768px) 90vw, 640px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}
        {description && (
          <p className="text-base leading-relaxed text-prove-primary">
            {description}
          </p>
        )}
        {ctaUrl && ctaLabel && (
          <a
            href={ctaUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-prove-main px-6 py-2 text-white transition hover:bg-prove-primary"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </>
  );
}

function CertificateModal({
  title,
  subtitle,
  imageSrc,
  description,
}: CertificateModalPayload) {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <DialogHeader className="flex-shrink-0">
        <DialogTitle className="text-2xl sm:text-3xl md:text-4xl text-prove-main">{title}</DialogTitle>
        {subtitle && (
          <DialogDescription className="text-base sm:text-lg md:text-xl text-prove-primary">
            {subtitle}
          </DialogDescription>
        )}
      </DialogHeader>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 items-center justify-center flex-1 py-6 sm:py-8">
        <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 400px, (max-width: 768px) 500px, (max-width: 1024px) 600px, 700px"
            className="object-contain"
          />
        </div>
        {description && (
          <div className="flex-1 max-w-2xl">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-prove-primary">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function EventModal({
  title,
  description,
  date,
  location,
  imageSrc,
  cta,
  ctaUrl,
}: EventModalPayload) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl sm:text-3xl text-prove-main">
          {title}
        </DialogTitle>
        <DialogDescription className="text-base text-prove-primary">
          {date} · {location}
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 90vw, 640px"
            className="object-cover"
          />
        </div>
        <p className="text-base leading-relaxed text-prove-primary">
          {description}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-sm text-prove-primary/80">
          <span className="font-semibold text-prove-main">{location}</span>
          <span aria-hidden="true">•</span>
          <span>{date}</span>
        </div>
        {ctaUrl ? (
          <a
            href={ctaUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-prove-main px-6 py-2 text-white transition hover:bg-prove-primary"
          >
            {cta}
          </a>
        ) : (
          <p className="text-sm text-prove-primary/70">{cta}</p>
        )}
      </div>
    </>
  );
}

function ShopModal({ heading }: ShopModalPayload) {
  return <ShopModalContent heading={heading} />;
}

export function useModalService() {
  const context = useContext(ModalServiceContext);
  if (!context) {
    throw new Error('useModalService must be used within ModalServiceProvider');
  }
  return context;
}


