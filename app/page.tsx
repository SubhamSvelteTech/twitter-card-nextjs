import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: {
//     template: "%s",
//     default: "Title Main",
//   },
//   description: "qwerty qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty",
//   metadataBase: new URL("https://twitter-card-nextjs.vercel.app"),
//   twitter: {
//     site: "twitter-card-nextjs.vercel.app",
//     images: ["opengraph-image.png"],
//   },
//   openGraph: {
//     images: ["opengraph-image.png"],
//   },
// };

export const metadata: Metadata = {
  title: "HomeIVF | Bringing Life Home",
  description:
    "HomeIVF is a platform that helps bring life home. Learn more about our services and how we can assist you.",
  keywords:
    "HomeIVF, IVF, fertility, fertility Family, Bringing Life Home, Home IVF Solutions, At-Home IVF Kits, Fertility Treatment at Home, IVF Success at Home, Home-Based Fertility Care, Family Fertility Plans, Personalized IVF Treatment, Family Planning with IVF, Affordable IVF at Home, Fertility Care Specialists, Conception at Home, Family Building with IVF, Home IVF Journey, Parenthood Dreams, Affordable Fertility Options, Empowering Fertility Choices, Home IVF Treatments, Affordable At-Home Fertility Solutions, Personalized Fertility Care at Home",

  metadataBase: new URL("https://twitter-card-nextjs.vercel.app"),
  twitter: {
    card: "summary_large_image",
    site: "@mongodb",  // Replace with your Twitter username
    creator: "@mongodb", // Replace with the content creator's Twitter username
    title: "HomeIVF | Bringing Life Home",
    description:
      "HomeIVF is a platform that helps bring life home. Learn more about our services and how we can assist you.",
    images: ["https://twitter-card-nextjs.vercel.app/opengraph-image.png"],
  },
  openGraph: {
    title: "HomeIVF | Bringing Life Home",
    description:
      "HomeIVF is a platform that helps bring life home. Learn more about our services and how we can assist you.",
    images: ["https://twitter-card-nextjs.vercel.app/opengraph-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <h1>Homemememem page</h1>
      <p>Basic Web</p>
    </>
  );
}
