import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeIVF | Bringing Life Home",
  description:
    "HomeIVF is a platform that helps bring life home. Learn more about our services and how we can assist you.",
  keywords:
    "HomeIVF, IVF, fertility, fertility Family, Bringing Life Home, Home IVF Solutions, At-Home IVF Kits, Fertility Treatment at Home, IVF Success at Home, Home-Based Fertility Care, Family Fertility Plans, Personalized IVF Treatment, Family Planning with IVF, Affordable IVF at Home, Fertility Care Specialists, Conception at Home, Family Building with IVF, Home IVF Journey, Parenthood Dreams, Affordable Fertility Options, Empowering Fertility Choices, Home IVF Treatments, Affordable At-Home Fertility Solutions, Personalized Fertility Care at Home",
  openGraph: {
    url: "http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html",
    type: "article",
    title: "When Great Minds Don’t Think Alike",
    description: "How much does culture influence creative thinking?",
    images: [
      {
        url: "http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Article image",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1.0",
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
