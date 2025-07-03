import '@/tokens/index.scss';
import '@/styles/index.scss';

import type { Metadata } from 'next';

import cn from 'classnames';

import { Column, Flex, Header } from '@/components';
import { font } from '@/resources';

import { ThemeProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'Match Watch',
  description: 'Match Watch',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      className={cn(
        font.primary.variable,
        font.secondary.variable,
        font.tertiary.variable
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  const root = document.documentElement;
                  
                  root.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <ThemeProvider>
        <Column
          style={{ minHeight: '100vh' }}
          as="body"
          fillWidth
          margin="0"
          padding="0"
          background="neutral-strong"
        >
          <Header />
          <Flex
            zIndex={0}
            fillWidth
            flex={1}
            paddingY="l"
            paddingX="l"
            horizontal="center"
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              {children}
            </Flex>
          </Flex>
        </Column>
      </ThemeProvider>
    </Flex>
  );
}
