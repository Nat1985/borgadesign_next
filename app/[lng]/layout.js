import localFont from "next/font/local";
import "../globals.css";
import Navbar from "./components/navbar/Navbar";
import { Montserrat } from '@next/font/google';
import CookieBanner from "./components/CookieBanner";
import Script from "next/script";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})

export const metadata = {
  title: "Borga Design",
  description: "---",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <CookieBanner />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KB6JSM6P');
              `
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={montserrat.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KB6JSM6P"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
