import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YOUR_TWITTER_USERNAME" />
        <meta name="twitter:title" content="TITLE_FOR_YOUR_PAGE" />
        <meta name="twitter:description" content="DESCRIPTION_FOR_YOUR_PAGE" />
        <meta name="twitter:image" content="https://res.cloudinary.com/omaha-code/w_1280,c_fill/omaha-code-cdn/2018/12/The-Open-Graph-Protocol-Guide.jpg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
