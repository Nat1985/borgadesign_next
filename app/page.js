import Hero from "./components/Hero";
import DoubleSection from "./components/DoubleSection";

export default function Home() {
  return (
      <main className="h-screen md:pt-[116px]">
        <Hero />
        <DoubleSection />
      </main>
  );
}
