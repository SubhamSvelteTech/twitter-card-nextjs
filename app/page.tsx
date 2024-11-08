import type { Metadata } from "next";

// Metadata configuration
// export const metadata: Metadata = {
//   title: "Next.js App | Comprehensive Metadata",
//   description:
//     "This is an example of how to configure metadata in a Next.js app using the App Router.",
//   keywords: [
//     "Next.js",
//     "Metadata",
//     "SEO",
//     "Open Graph",
//     "Twitter Cards",
//     "Web Development",
//   ],
//   metadataBase: new URL("https://twitter-card-nextjs.vercel.app"),
//   openGraph: {
//     type: "website",
//     url: "https://twitter-card-nextjs.vercel.app",
//     title: "Next.js App | Comprehensive Metadata",
//     description:
//       "Explore the capabilities of Next.js App Router with SEO, Open Graph, and Twitter metadata.",
//     images: [
//       {
//         url: "https://twitter-card-nextjs.vercel.app/opengraph-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Next.js App Example Open Graph Image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@exampleTwitterHandle",
//     creator: "@creatorTwitterHandle",
//     title: "Next.js App | Comprehensive Metadata",
//     description:
//       "Explore the capabilities of Next.js App Router with SEO, Open Graph, and Twitter metadata.",
//     images: ["https://twitter-card-nextjs.vercel.app/opengraph-image.png"],
//   },
//   alternates: {
//     canonical: "https://twitter-card-nextjs.vercel.app",
//     languages: {
//       "en-US": "https://twitter-card-nextjs.vercel.app/en-US",
//       "fr-FR": "https://twitter-card-nextjs.vercel.app/fr-FR",
//     },
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     noimageindex: false,
//   },
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//   },
//   themeColor: "#ffffff",
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://twitter-card-nextjs.vercel.app"),
  openGraph: {
    images: "/opengraph-image.png",
  },
};

const HomePage = () => {
  return (
    <main>
      <h1>Welcome to the Next.js Metadata Example</h1>
      <p>Check out how metadata works in Next.js App Router!</p>
    </main>
  );
};

export default HomePage;

// import { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: {
// //     template: "%s",
// //     default: "Title Main",
// //   },
// //   description: "qwerty qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty",
// //   metadataBase: new URL("https://twitter-card-nextjs.vercel.app"),
// //   twitter: {
// //     site: "twitter-card-nextjs.vercel.app",
// //     images: ["opengraph-image.png"],
// //   },
// //   openGraph: {
// //     images: ["opengraph-image.png"],
// //   },
// // };

// export const metadata: Metadata = {
//   title: "HomeIVF | Bringing Life Home",
//   description:
//     "HomeIVF is a platform that helps bring life home. Learn more about our services and how we can assist you.",
//   keywords:
//     "HomeIVF, IVF, fertility, fertility Family, Bringing Life Home, Home IVF Solutions, At-Home IVF Kits, Fertility Treatment at Home, IVF Success at Home, Home-Based Fertility Care, Family Fertility Plans, Personalized IVF Treatment, Family Planning with IVF, Affordable IVF at Home, Fertility Care Specialists, Conception at Home, Family Building with IVF, Home IVF Journey, Parenthood Dreams, Affordable Fertility Options, Empowering Fertility Choices, Home IVF Treatments, Affordable At-Home Fertility Solutions, Personalized Fertility Care at Home",

//   metadataBase: new URL("https://twitter-card-nextjs.vercel.app"),
//   twitter: {
//     images: ["https://twitter-card-nextjs.vercel.app/opengraph-image.png"],
//   },
//   openGraph: {
//     type: "website",
//     url: "https://twitter-card-nextjs.vercel.app",
//     images: [
//       {
//         url: "https://twitter-card-nextjs.vercel.app/opengraph-image.png",
//         width: 1200,
//         height: 630,
//         alt: "HomeIVF - Bringing Life Home",
//       },
//     ],
//   },
// };

// export default function Page() {
//   return (
//     <>
//       <h1>Homemememem page</h1>
//       <p>Basic Web</p>
//     </>
//   );
// }
