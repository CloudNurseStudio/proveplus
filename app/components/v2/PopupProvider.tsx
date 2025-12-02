'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface PopupContextValue {
  hasShownPopup: boolean;
  markPopupAsShown: () => void;
}

const PopupContext = createContext<PopupContextValue | null>(null);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [hasShownPopup, setHasShownPopup] = useState(false);

  const markPopupAsShown = () => {
    setHasShownPopup(true);
  };

  return (
    <PopupContext.Provider value={{ hasShownPopup, markPopupAsShown }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopupControl() {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopupControl must be used within PopupProvider');
  }
  return context;
}

