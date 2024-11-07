import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Title Main",
  },
  description: "qwerty qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty",
  metadataBase: new URL("https://homeivf.in"),
  twitter: {
    card: "summary_large_image",
    site: "homeivf.in",
    creator: "Subh",
    title: "qwerty ytrewq",
    description: "Boost your Resume using AI and Land your Dream Job Today",
    images: ["opengraph-image.png"],
  },
  openGraph: {
    images: ["opengraph-image.png"],
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
