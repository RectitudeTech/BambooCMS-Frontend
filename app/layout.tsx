'use client';

import * as React from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { LocalizationProvider } from '../components/core/localization-provider';
import { ThemeProvider } from '../components/core/theme-provider/theme-provider';
import { UserProvider } from '../contexts/user-context';

const queryClient = new QueryClient();

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <LocalizationProvider>
            <UserProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </UserProvider>
          </LocalizationProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
