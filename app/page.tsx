import { Metadata } from 'next'; // if using TypeScript
 
export const metadata: Metadata = {
  openGraph: {
    title: 'Hi there!',
    description: 'Using opengraph in nextjs',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://library.elementor.com/illustrator-portfolio/wp-content/uploads/sites/85/2020/06/faces-pic1.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://res.cloudinary.com/omaha-code/w_1280,c_fill/omaha-code-cdn/2018/12/The-Open-Graph-Protocol-Guide.jpg',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
 
export default function Page() {
  return (
    <div>
      <h1>Next.js</h1>
      <p>The React Framework for the Web</p>
    </div>
  );
}