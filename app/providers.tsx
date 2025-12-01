'use client';

import type { ReactNode } from 'react';
import { LocaleProvider } from './components/v2/LocaleProvider';
import { ModalServiceProvider } from './components/v2/ModalServiceProvider';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <ModalServiceProvider>{children}</ModalServiceProvider>
    </LocaleProvider>
  );
}


