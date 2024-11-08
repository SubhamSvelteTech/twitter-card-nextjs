import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: {
//     template: "%s",
//     default: "Title Main",
//   },
//   description: "qwerty qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty",
//   metadataBase: new URL("https://twitter-card-nextjs.vercel.app"),
//   twitter: {
//     card: "summary_large_image",
//     site: "twitter-card-nextjs.vercel.app",
//     creator: "Subh",
//     title: "qwerty ytrewq",
//     description: "Boost your Resume using AI and Land your Dream Job Today",
//     images: ["opengraph-image.png"],
//   },
//   openGraph: {
//     images: ["opengraph-image.png"],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>HomeIVF | Bringing Life Home</title>
        <meta
          name="description"
          content="HomeIVF is a platform that helps bring life home. Learn more about our services and how we can assist you."
        />
        <meta
          name="keywords"
          content="HomeIVF, IVF, fertility, fertility Family, Bringing Life Home, Home IVF Solutions, At-Home IVF Kits, Fertility Treatment at Home, IVF Success at Home, Home-Based Fertility Care, Family Fertility Plans, Personalized IVF Treatment, Family Planning with IVF, Affordable IVF at Home, Fertility Care Specialists, Conception at Home, Family Building with IVF, Home IVF Journey, Parenthood Dreams, Affordable Fertility Options, Empowering Fertility Choices, Home IVF Treatments, Affordable At-Home Fertility Solutions, Personalized Fertility Care at Home"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:image"
          content="https://twitter-card-nextjs.vercel.app/opengraph-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="twitter-card-nextjs.vercel.app" />
        <meta name="twitter:creator" content="Subh" />
        <meta name="twitter:title" content="qwerty ytrewq" />
        <meta
          name="twitter:description"
          content="Boost your Resume using AI and Land your Dream Job Today"
        />
        <meta
          name="twitter:image"
          content="https://twitter-card-nextjs.vercel.app/opengraph-image.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
