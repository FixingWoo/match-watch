const routes = [
  {
    label: 'Leagues',
    href: '/leagues',
    display: true,
  },
  {
    label: 'International',
    href: '/international',
    display: true,
  },
  {
    label: 'Teams',
    href: '/teams',
    display: true,
  },
  {
    label: 'Matches',
    href: '/matches',
    display: true,
  },
  {
    label: 'Players',
    href: '/players',
    display: false,
  },
  {
    label: 'Stats',
    href: '/stats',
    display: false,
  },
  {
    label: 'News',
    href: '/news',
    display: false,
  },
  {
    label: 'About',
    href: '/about',
    display: false,
  },
];

import { Noto_Sans_KR } from 'next/font/google';

const primaryFont = Noto_Sans_KR({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
};

export { routes, font };
