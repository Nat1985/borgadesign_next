import localFont from "next/font/local";
import "../globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Montserrat } from '@next/font/google';
import CookieBanner from "./components/CookieBanner";
import { getDictionary } from "../locales/getDictionary";

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
      </head>
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
