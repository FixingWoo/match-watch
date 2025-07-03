import { Metadata as NextMetadata } from 'next';

interface IProps {
  title: string;
  description: string;
}

export function generateMetadata({ title, description }: IProps): NextMetadata {
  return {
    title,
    description,
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export const Meta = {
  generate: generateMetadata,
};

export default Meta;
