import { MainButton } from "./components/buttons";
import FullModal from "./components/FullModal";
import HeroSection from "./components/homeSections/HeroSection";
import SlideSection from "./components/homeSections/SlideSection";
import Loader from "./components/Loader";
import SmoothModal from "./components/SmoothModal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen pt-[116px]">
      <SmoothModal time={1000} />
      <div className="w-full flex flex-col">
        {/* Histoire */}
        < HeroSection
          title="BORGA DESIGN"
          text="Tradition et Savoir-Faire Artisanal depuis 1891"
          image='/images/hero/histoire/1.jpg'
          link="/histoire"
          delay={1}
          buttonText="Découvrez notre histoire"
        />

        

        {/* Sols et Murs */}
        <SlideSection
          title="SOLS ET MURS"
          text="Revêtements en marbre, granit et pierres naturelles"
          imagesArray={[
            '/images/hero/sols-et-murs/1.jpg',
            '/images/hero/sols-et-murs/2.jpg',
            '/images/hero/sols-et-murs/3.jpg'
          ]}
          link="/sols-et-murs"
          delay={1.3}
          buttonText="En savoir plus sur nous"
        />

        {/* Salles de Bain */}
        <SlideSection
          title="SALLES DE BAIN"
          text="Leader dans la réalisation de salles de bains de luxe"
          imagesArray={[
            '/images/hero/salles-de-bain/1.jpg',
            '/images/hero/salles-de-bain/2.jpg',
            '/images/hero/salles-de-bain/3.jpg'
          ]}
          link="/salles-de-bain"
          delay={1.6}
          buttonText="En savoir plus sur nous"
        />

        {/* Cuisines */}
        <SlideSection
          title="CUSINES"
          text="Réalisation de cuisines sur mesure en marbre"
          imagesArray={[
            '/images/hero/cuisines/1.jpg',
            '/images/hero/cuisines/2.jpg',
            '/images/hero/cuisines/3.jpg'
          ]}
          link="/cuisines"
          delay={1.9}
          buttonText="En savoir plus sur nous"
        />

        {/* Piscines */}
        <SlideSection
          title="PISCINES"
          text="Distributeurs officiels de Magiline"
          imagesArray={[
            '/images/hero/piscines/1.jpg',
            '/images/hero/piscines/2.jpg',
            '/images/hero/piscines/3.jpg'
          ]}
          link="/piscines"
          delay={1.2}
          buttonText="En savoir plus sur nous"
        />

        {/* Matériaux et Finitions */}
        <SlideSection
          title="MATÉRIAUX ET FINITIONS"
          text="Sélection de matériaux de haute qualité"
          imagesArray={[
            '/images/hero/materiaux-et-finitions/1.jpg',
            '/images/hero/materiaux-et-finitions/2.jpg',
            '/images/hero/materiaux-et-finitions/3.jpg'
          ]}
          link="/materiaux-et-finitions"
          delay={1.5}
          buttonText="En savoir plus sur nous"
        />

        {/* Réalisations */}
        <SlideSection
          title="RÉALISATION"
          text="Atelier à Sanremo, avec une main-d’œuvre hautement qualifiée et des machines à la pointe de la technologie"
          imagesArray={[
            '/images/hero/realisations/1.jpg',
            '/images/hero/realisations/2.jpg',
            '/images/hero/realisations/3.jpg'
          ]}
          link="/realisations"
          delay={1.5}
          buttonText="En savoir plus sur nous"
        />

        {/* Design d’Intérieur */}
        <SlideSection
          title="DESIGN D’INTÉRIEUR"
          text="Atelier Plus Montecarlo: Design d’Intérieurs en Marbre"
          imagesArray={[
            '/images/hero/design-interieur/2.jpg',
            '/images/hero/design-interieur/2.jpg',
            '/images/hero/design-interieur/3.jpg'
          ]}
          link="/design-interieur"
          delay={1.8}
          buttonText="En savoir plus sur nous"
        />
      </div>
    </main>
  );
}
