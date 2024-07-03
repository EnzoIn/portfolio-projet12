import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MailSideBar from "./components/MailSideBar";
import SocialSideBar from "./components/SocialSideBar";
import "./globals.css";

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Enzo Ingraito",
    "url": "https://portfolio-enzo-ingraito.vercel.app/",
    "description": "Développeur web junior passionné par la création pour le web, récemment diplômé en intégration web, avide d'apprendre et de maîtriser de nouvelles technologies.",
    "serviceType": "Développement Web",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Auray",
      "postalCode": "56400",
      "addressCountry": "FR",
    },
    "sameAs": [
      "https://github.com/EnzoIn",
      "https://www.linkedin.com/in/enzo-ingraito-8694692b3",
      "https://www.instagram.com/enzo_in/",
    ],
  };


  return (
    <html
      lang="fr"
      className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <title>Enzo Ingraito · Portfolio</title>
        <meta
          name="description"
          content="Enzo Ingraito, développeur web junior passionné par la création pour le web, récemment diplômé en intégration web, avide d'apprendre et de maîtriser de nouvelles technologies."
        />
        <meta
          name="keywords"
          content="Enzo Ingraito, développeur web, intégrateur web, création web, portfolio"
        />
        <meta name="author" content="Enzo Ingraito" />
        <meta property="og:title" content="Enzo Ingraito · Portfolio" />
        <meta
          property="og:description"
          content="Enzo Ingraito, développeur web junior passionné par la création pour le web, récemment diplômé en intégration web, avide d'apprendre et de maîtriser de nouvelles technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-enzo-ingraito.vercel.app/" />
        <meta property="og:image" content="/images/favicon.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enzo Ingraito · Portfolio" />
        <meta
          name="twitter:description"
          content="Enzo Ingraito, développeur web junior passionné par la création pour le web, récemment diplômé en intégration web, avide d'apprendre et de maîtriser de nouvelles technologies."
        />
        <meta name="twitter:image" content="/images/favicon.webp" />

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

        <link rel="icon" href="/images/favicon.webp" sizes="any" />
      </head>
      <body className="box-content overflow-x-hidden">
        <SocialSideBar />
        <MailSideBar mail="enzo.ingraito@gmail.com" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
