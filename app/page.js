import FullModal from "./components/FullModal";
import SlideSection from "./components/homeSections/SlideSection";
import Loader from "./components/Loader";
import SmoothModal from "./components/SmoothModal";

export default function Home() {
  return (
    <main className="h-screen md:pt-[116px]">
      <SmoothModal time={1000}/>
        <div className="w-full flex flex-col">
          {/* Histoire */}
          < SlideSection
            title="Borga Design"
            text="Tradition et Savoir-Faire Artisanal depuis 1891"
            imagesArray={[
              '/images/hero/histoire/1.jpg',
              '/images/hero/histoire/2.jpg',
              '/images/hero/histoire/3.jpg'
            ]}
            link="/histoire"
            delay={1}
          />

          {/* Sols et Murs */}
          <SlideSection
            title="Sols et Murs"
            text="Revêtements en marbre, granit et pierres naturelles"
            imagesArray={[
              '/images/hero/sols-et-murs/1.jpg',
              '/images/hero/sols-et-murs/2.jpg',
              '/images/hero/sols-et-murs/3.jpg'
            ]}
            link="/sols-et-murs"
            delay={1.3}
          />

          {/* Salles de Bain */}
          <SlideSection
            title="Salles de Bain"
            text="Leader dans la réalisation de salles de bains de luxe"
            imagesArray={[
              '/images/hero/salles-de-bain/1.jpg',
              '/images/hero/salles-de-bain/2.jpg',
              '/images/hero/salles-de-bain/3.jpg'
            ]}
            link="/salles-de-bain"
            delay={1.6}
          />

          {/* Cuisines */}
          <SlideSection
            title="Cuisines"
            text="Réalisation de cuisines sur mesure en marbre"
            imagesArray={[
              '/images/hero/cuisines/1.jpg',
              '/images/hero/cuisines/2.jpg',
              '/images/hero/cuisines/3.jpg'
            ]}
            link="/cuisines"
            delay={1.9}
          />

          {/* Piscines */}
          <SlideSection
            title="Piscines"
            text="Distributeurs officiels de Magiline"
            imagesArray={[
              '/images/hero/piscines/1.jpg',
              '/images/hero/piscines/2.jpg',
              '/images/hero/piscines/3.jpg'
            ]}
            link="/piscines"
            delay={1.2}
          />

          {/* Matériaux et Finitions */}
          <SlideSection
            title="Matériaux et Finitions"
            text="Sélection de matériaux de haute qualité"
            imagesArray={[
              '/images/hero/materiaux-et-finitions/1.jpg',
              '/images/hero/materiaux-et-finitions/2.jpg',
              '/images/hero/materiaux-et-finitions/3.jpg'
            ]}
            link="/materiaux-et-finitions"
            delay={1.5}
          />

          {/* Réalisations */}
          <SlideSection
            title="Réalisations"
            text="Atelier à Sanremo, avec une main-d’œuvre hautement qualifiée et des machines à la pointe de la technologie"
            imagesArray={[
              '/images/hero/realisations/1.jpg',
              '/images/hero/realisations/2.jpg',
              '/images/hero/realisations/3.jpg'
            ]}
            link="/realisations"
            delay={1.5}
          />

          {/* Design d’Intérieur */}
          <SlideSection
            title="Design d’Intérieur"
            text="Atelier Plus Montecarlo: Design d’Intérieurs en Marbre"
            imagesArray={[
              '/images/hero/design-interieur/1.jpg',
              '/images/hero/design-interieur/2.jpg',
              '/images/hero/design-interieur/3.jpg'
            ]}
            link="/design-interieur"
            delay={1.8}
          />

          {/* Design d’Intérieur */}
          <SlideSection
            title="Design d’Intérieur"
            text="Atelier Plus Montecarlo: Design d’Intérieurs en Marbre"
            imagesArray={[
              '/images/hero/design-interieur/1.jpg',
              '/images/hero/design-interieur/2.jpg',
              '/images/hero/design-interieur/3.jpg'
            ]}
            link="/design-interieur"
            delay={1.8}
          />
        </div>
    </main>
  );
}
