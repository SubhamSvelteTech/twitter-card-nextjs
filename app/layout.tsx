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
        <title>Hello ooooo</title>
        <meta name="title" content="sysbh uhswksh ushuwkhskwj" />
        <meta name="description" content="617891 hswjgs hqwkqkjqkqjqkjqj" />
        <meta key="og:type" property="og:type" content={"website"} />
        <meta key="og:title" property="og:title" content="new ksksalkslsak" />
        <meta
          key="og:description"
          property="og:description"
          content={"yuqyi 87wgsjag hj"}
        />
        <meta key="og:url" property="og:url" content={"i902bnj sjhanbabns"} />
        <meta
          key="og:image"
          property="og:image"
          content={"78512suqsh  shwjhwsuwsush"}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content={process.env.SOCIAL_HANDLE} />
        <meta property="twitter:title" content={"9876543ertyui nmnm"} />
        <meta property="twitter:description" content={"jkjjkjkjkjkjkj "} />
        <meta property="twitter:image" content={"https://miro.medium.com/v2/resize:fit:720/format:webp/1*fp0WMBxsh1718LVFz3H9vw.png"} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
