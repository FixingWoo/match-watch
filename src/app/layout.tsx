import '@/tokens/index.scss';
import '@/styles/index.scss';

import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import cn from 'classnames';

import { Column, Flex, Header } from '@/components';
import { font } from '@/resources';

export const metadata: Metadata = {
  title: 'Match Watch',
  description: 'Match Watch',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'dark';

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
      data-theme={theme}
    >
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
    </Flex>
  );
}
