// import { Metadata } from "next";

import siteMetadata from "@/config/site-metadata";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "HomeIVF | Bringing Life Home",
//   description:
//     "HomeIVF is a platform that helps bring life home. Learn more about our services and how we can assist you.",
//   keywords:
//     "HomeIVF, IVF, fertility, fertility Family, Bringing Life Home, Home IVF Solutions, At-Home IVF Kits, Fertility Treatment at Home, IVF Success at Home, Home-Based Fertility Care, Family Fertility Plans, Personalized IVF Treatment, Family Planning with IVF, Affordable IVF at Home, Fertility Care Specialists, Conception at Home, Family Building with IVF, Home IVF Journey, Parenthood Dreams, Affordable Fertility Options, Empowering Fertility Choices, Home IVF Treatments, Affordable At-Home Fertility Solutions, Personalized Fertility Care at Home",
//   openGraph: {
//     title: "HI there",
//     description: "Descr",
//     url: "https://google.com",
//     siteName: "HomeIVFG",
//     images: [
//       {
//         url: "https://res.cloudinary.com/omaha-code/w_1280,c_fill/omaha-code-cdn/2018/12/The-Open-Graph-Protocol-Guide.jpg",
//         width: 800,
//         height: 600,
//         alt: "HomeIVF",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "HomeIVF",
//     description: "Descr",
//     images: [
//       {
//         url: "https://res.cloudinary.com/omaha-code/w_1280,c_fill/omaha-code-cdn/2018/12/The-Open-Graph-Protocol-Guide.jpg",
//         width: 800,
//         height: 600,
//         alt: "HomeIVF",
//       },
//     ],
//   },
// };

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? siteMetadata.siteUrl
  ),
  description: siteMetadata.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "James Shopland",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [
    {
      name: "James Shopland",
      url: "https://jamesshopland.com.com",
    },
  ],
  creator: "James Shopland",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        url: `/og.jpg`,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [`/og.png`],
    creator: "@jollyshopland",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

export default function Page() {
  return (
    <>
      <h1>Homemememem page</h1>
      <p>Basic Web</p>
    </>
  );
}
