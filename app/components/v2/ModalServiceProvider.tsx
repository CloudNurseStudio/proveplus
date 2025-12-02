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
        ? 'max-w-[90vw] sm:max-w-[667px] max-h-[90vh] overflow-y-auto'
        : 'max-w-[90vw] sm:max-w-3xl max-h-[90vh] overflow-y-auto';

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
  thumbnailSrc,
  videoUrl,
}: VideoModalPayload) {
  return (
    <>
      {videoUrl ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            src={videoUrl}
            title="Video testimonial"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={thumbnailSrc}
            alt="Video testimonial"
            fill
            sizes="(max-width: 768px) 90vw, 640px"
            className="object-cover"
          />
        </div>
      )}
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
    <div className="flex h-full w-full flex-col overflow-y-auto">
      <div className="flex flex-1 items-center justify-center p-3 sm:p-6 lg:p-10">
        <div className="flex w-full max-w-[1100px] flex-col items-center gap-6 rounded-[48px] bg-gradient-to-br from-[#f4f6ff] via-[#dfe6ff] to-[#b9c9ff] p-6 text-center shadow-[0_25px_80px_rgba(68,86,166,0.25)] sm:gap-7 sm:p-10 lg:gap-10 lg:p-14">
          <DialogHeader className="w-full space-y-2 text-center sm:text-center">
            <DialogTitle className="text-[clamp(2rem,4vw,3.25rem)] font-semibold text-prove-main">
              {title}
            </DialogTitle>
            {subtitle && (
              <DialogDescription className="text-center text-lg text-prove-primary sm:text-center">
                {subtitle}
              </DialogDescription>
            )}
          </DialogHeader>

          <div className="relative w-full max-w-[520px] flex-1">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[520px] overflow-hidden rounded-[32px] bg-white/70 p-4 shadow-[0_12px_40px_rgba(68,86,166,0.15)]">
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 520px"
                className="object-contain"
              />
            </div>
          </div>

          {description && (
            <p className="max-w-3xl text-center text-base leading-relaxed text-prove-primary sm:text-lg">
              {description}
            </p>
          )}
        </div>
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


