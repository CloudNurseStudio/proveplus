'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';

const popupImageSrc = '/images/popup.jpg';

export function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (isImageLoaded) {
      setIsOpen(true);
    }
  }, [isImageLoaded]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const preload = new window.Image();

    const handleLoad = () => {
      setIsImageLoaded(true);
    };

    preload.src = popupImageSrc;

    if (preload.complete) {
      handleLoad();
      return;
    }

    preload.addEventListener('load', handleLoad);

    return () => {
      preload.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] p-0 bg-transparent border-none shadow-none max-w-[90vw] [&>button]:text-white [&>button]:bg-black/20 [&>button]:hover:bg-black/40 [&>button]:rounded-full [&>button]:p-1">
        <DialogTitle className="sr-only">Special Offer</DialogTitle>
        <div className="relative w-full flex items-center justify-center">
          <Image
            src={popupImageSrc}
            alt="Special Offer Popup"
            width={800}
            height={800}
            className="w-full h-auto object-contain rounded-lg"
            priority
            onLoadingComplete={() => setIsImageLoaded(true)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

