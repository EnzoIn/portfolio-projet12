import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
        <meta property="og:url" content="https://www.votre-site.com" />
        <meta property="og:image" content="/images/favicon.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enzo Ingraito · Portfolio" />
        <meta
          name="twitter:description"
          content="Enzo Ingraito, développeur web junior passionné par la création pour le web, récemment diplômé en intégration web, avide d'apprendre et de maîtriser de nouvelles technologies."
        />
        <meta name="twitter:image" content="/images/favicon.webp" />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Enzo Ingraito",
      "url": "https://www.votre-site.com",
      "description": "Développeur web junior passionné par la création pour le web, récemment diplômé en intégration web, avide d'apprendre et de maîtriser de nouvelles technologies.",
      "serviceType": "Développement Web",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Auray",
        "postalCode": "56400",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://github.com/EnzoIn",
        "https://www.linkedin.com/in/enzo-ingraito-8694692b3"
        "https://www.instagram.com/enzo_in/"
      ]
    }
  `}
        </script>

        <link rel="icon" href="/images/favicon.webp" sizes="any" />
      </head>
      <body>
        <SideBar social={true} />
        <SideBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
