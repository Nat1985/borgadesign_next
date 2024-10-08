import Hero from "./components/homeSections/Hero";

export default function Home() {
  return (
    <main className="h-screen md:pt-[116px]">
      {/* Histoire */}
      <Hero
        title="Une expérience séculaire dans le monde du travail du Marbre, du Granit et des Pierres Naturelles."
        text=""
        imagesArray={[
          '/images/hero/histoire/1.jpg',
          '/images/hero/histoire/2.jpg',
          '/images/hero/histoire/3.jpg'
        ]}
        link="/histoire"
        delay={1}
      />

      {/* Sols et Murs */}
      <Hero
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
      <Hero
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
      <Hero
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
    </main>
  );
}
