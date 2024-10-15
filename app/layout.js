import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Montserrat } from '@next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
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
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="a1037e13-2a10-473a-805b-cd81a2a4b371" data-blockingmode="auto" type="text/javascript"></script>
      </head>
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
