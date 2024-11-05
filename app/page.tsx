import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'When Great Minds Don’t Think Alike',
  description: 'How much does culture influence creative thinking?',
  openGraph: {
    url: 'http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html',
    type: 'article',
    title: 'When Great Minds Don’t Think Alike',
    description: 'How much does culture influence creative thinking?',
    images: [
      {
        url: 'http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'Article image',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function HomePage() {
  return (
    <main>
      <h1>When Great Minds Don’t Think Alike</h1>
    </main>
  );
}