import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomeIVF | Bringing Life Home",
  description:
    "HomeIVF is a platform that helps bring life home. Learn more about our services and how we can assist you.",
  keywords:
    "HomeIVF, IVF, fertility, fertility Family, Bringing Life Home, Home IVF Solutions, At-Home IVF Kits, Fertility Treatment at Home, IVF Success at Home, Home-Based Fertility Care, Family Fertility Plans, Personalized IVF Treatment, Family Planning with IVF, Affordable IVF at Home, Fertility Care Specialists, Conception at Home, Family Building with IVF, Home IVF Journey, Parenthood Dreams, Affordable Fertility Options, Empowering Fertility Choices, Home IVF Treatments, Affordable At-Home Fertility Solutions, Personalized Fertility Care at Home",
  openGraph: {
    title: "HI there",
    description:
      "Descr",
    url: "https://google.com",
    siteName: "HomeIVFG",
    images: [
      {
        url: "https://res.cloudinary.com/omaha-code/w_1280,c_fill/omaha-code-cdn/2018/12/The-Open-Graph-Protocol-Guide.jpg",
        width: 800,
        height: 600,
        alt: "HomeIVF",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function Page() {
  return (
    <>
      <h1>Lol Next.js</h1>
      <p>Lol The React Framework for the Web</p>
    </>
  );
}
