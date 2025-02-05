import { getDictionary } from "../locales/getDictionary";
import { MainButton } from "./components/buttons";
import Footer from "./components/footer/Footer";
import FullModal from "./components/FullModal";
import HeroSection from "./components/homeSections/HeroSection";
import SlideSection from "./components/homeSections/SlideSection";
import Loader from "./components/Loader";
import SmoothModal from "./components/SmoothModal";
import Image from "next/image";

export default function Home({ params }) {
  const { lng } = params;
  const t = getDictionary(lng);
  return (
    <main className="h-screen pt-[116px]">
      <SmoothModal time={1000} />
      <div className="w-full flex flex-col">
        {/* Histoire */}
        < HeroSection
          title={t.Homepage.history.title}
          text={t.Homepage.history.text}
          image='/images/hero/histoire/1.jpg'
          link="/histoire"
          delay={1}
          buttonText={t.Homepage.history.buttonText}
        />

        {/* Sols et Murs */}
        <SlideSection
          title={t.Homepage.floorAndWalls.title}
          text={t.Homepage.floorAndWalls.text}
          imagesArray={[
            '/images/hero/sols-et-murs/1.jpg',
            '/images/hero/sols-et-murs/2.jpg',
            '/images/hero/sols-et-murs/3.jpg'
          ]}
          link="/sols-et-murs"
          delay={1.3}
          buttonText={t.Homepage.floorAndWalls.buttonText}
        />

        {/* Salles de Bain */}
        <SlideSection
          title={t.Homepage.bathroom.title}
          text={t.Homepage.bathroom.text}
          imagesArray={[
            '/images/hero/salles-de-bain/1.jpg',
            '/images/hero/salles-de-bain/2.jpg',
            '/images/hero/salles-de-bain/3.jpg'
          ]}
          link="/salle-de-bain"
          delay={1.6}
          buttonText={t.Homepage.bathroom.buttonText}
        />

        {/* Cuisines */}
        <SlideSection
          title={t.Homepage.kitchen.title}
          text={t.Homepage.kitchen.text}
          imagesArray={[
            '/images/hero/cuisines/1.jpg',
            '/images/hero/cuisines/2.jpg',
            '/images/hero/cuisines/3.jpg'
          ]}
          link="/cuisines"
          delay={1.9}
          buttonText={t.Homepage.kitchen.buttonText}
        />

        {/* Piscines */}
        <SlideSection
          title={t.Homepage.swimmingPools.title}
          text={t.Homepage.swimmingPools.text}
          imagesArray={[
            '/images/hero/piscines/1.jpg',
            '/images/hero/piscines/2.jpg',
            '/images/hero/piscines/3.jpg'
          ]}
          link="/piscines"
          delay={1.2}
          buttonText={t.Homepage.swimmingPools.buttonText}
        />

        {/* Matériaux et Finitions */}
        <SlideSection
          title={t.Homepage.materialsAndFinisches.title}
          text={t.Homepage.materialsAndFinisches.text}
          imagesArray={[
            '/images/hero/materiaux-et-finitions/1.jpg',
            '/images/hero/materiaux-et-finitions/2.jpg',
            '/images/hero/materiaux-et-finitions/3.jpg'
          ]}
          link="/materiaux-et-finitions"
          delay={1.5}
          buttonText={t.Homepage.materialsAndFinisches.buttonText}
        />

        {/* Réalisations */}
        <HeroSection
          title={t.Homepage.projects.title}
          text={t.Homepage.projects.text}
          image='/images/hero/realisations/1.jpg'
          link="/realisations"
          delay={1.5}
          buttonText={t.Homepage.projects.buttonText}
        />

        {/* Design d’Intérieur */}
        <SlideSection
          title={t.Homepage.interiorDesign.title}
          text={t.Homepage.interiorDesign.text}
          imagesArray={[
            '/images/hero/design-interieur/1.jpg',
            '/images/hero/design-interieur/2.jpg',
            '/images/hero/design-interieur/3.jpg'
          ]}
          link="/design-interieur"
          delay={1.8}
          buttonText={t.Homepage.interiorDesign.buttonText}
        />

        <Footer params={params} />
      </div>
    </main>
  );
}
