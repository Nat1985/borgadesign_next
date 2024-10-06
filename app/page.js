import Image from "next/image";
import Hero from "./components/Hero";
import DoubleSection from "./components/DoubleSection";
import Entreprise from "./entreprise/page";

export default function Home() {
  return (
      <main className="h-screen md:pt-[116px]">
        <Hero />
        <DoubleSection />
      </main>
  );
}
