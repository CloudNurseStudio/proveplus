'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { usePopupControl } from './PopupProvider';

const popupImageSrc = '/images/popup.jpg';

export function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { hasShownPopup, markPopupAsShown } = usePopupControl();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Check if popup was already shown during this navigation session
    if (hasShownPopup) {
      return; // Don't show popup again
    }

    if (isImageLoaded) {
      setIsOpen(true);
      // Mark popup as shown
      markPopupAsShown();
    }
  }, [isImageLoaded, hasShownPopup, markPopupAsShown]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Check if popup was already shown before loading image
    if (hasShownPopup) {
      return; // Don't even preload if already shown
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
  }, [hasShownPopup]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] sm:max-w-[600px] p-0 bg-transparent border-none shadow-none overflow-hidden [&>button]:text-white [&>button]:bg-black/20 [&>button]:hover:bg-black/40 [&>button]:rounded-full [&>button]:p-1">
        <DialogTitle className="sr-only">Special Offer</DialogTitle>
        <div className="relative w-full max-h-[85vh] flex items-center justify-center overflow-auto">
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

