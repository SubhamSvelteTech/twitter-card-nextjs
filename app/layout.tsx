import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi there!",
  description: "Using opengraph in nextjs",
  openGraph: {
    images: [
      {
        url: "https://library.elementor.com/illustrator-portfolio/wp-content/uploads/sites/85/2020/06/faces-pic1.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/omaha-code/w_1280,c_fill/omaha-code-cdn/2018/12/The-Open-Graph-Protocol-Guide.jpg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
