'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '../ui/dialog';
import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';

interface WorldMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WorldMapModal({ isOpen, onClose }: WorldMapModalProps) {
  const { t } = useLocale();
  const content = t.about.worldMapModal;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[1000px] p-0 bg-white border-none outline-none overflow-hidden">
        <DialogTitle className="sr-only">{content.title}</DialogTitle>
        
        <div className="relative w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Header */}
            <motion.div
              className="text-center mb-8 sm:mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-fc-orbit font-semibold text-2xl sm:text-3xl md:text-4xl text-[#4456a6]">
                {content.title}
              </h2>
            </motion.div>

            {/* World Map */}
            <motion.div
              className="relative w-full aspect-[16/9] mb-10 sm:mb-12 rounded-2xl overflow-hidden bg-[#f8fafc] shadow-sm border border-gray-100"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <picture>
                <source srcSet="/images/world-map.webp" type="image/webp" />
                <img
                  src="/images/world-map.jpg"
                  alt="World Map showing global presence"
                  className="w-full h-full object-contain"
                />
              </picture>
            </motion.div>

            {/* Countries Grid */}
            <motion.div
              className="mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-fc-orbit font-semibold text-xl sm:text-2xl text-[#4456a6] mb-6 text-center">
                {content.countries.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {content.countries.list.map((country: string, index: number) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 flex items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <p className="font-fc-orbit font-medium text-sm sm:text-base text-[#424242]">
                      {country}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-fc-orbit font-semibold text-xl sm:text-2xl text-[#4456a6] mb-6 text-center">
                {content.achievements.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {content.achievements.list.map((stat: string, index: number) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 flex items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <p className="font-fc-orbit font-semibold text-base sm:text-lg text-[#4456a6]">
                      {stat}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
