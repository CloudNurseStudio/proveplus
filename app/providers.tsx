'use client';

import type { ReactNode } from 'react';
import { LocaleProvider } from './components/v2/LocaleProvider';
import { ModalServiceProvider } from './components/v2/ModalServiceProvider';
import { PopupProvider } from './components/v2/PopupProvider';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <PopupProvider>
        <ModalServiceProvider>{children}</ModalServiceProvider>
      </PopupProvider>
    </LocaleProvider>
  );
}


