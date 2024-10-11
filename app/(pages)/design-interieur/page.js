import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '@/app/components/PageContainer'
import OpacityEntryWrapper from '@/app/components/pagesSections/OpacityEntryWrapper'
import SlideEntryWrapper from '@/app/components/pagesSections/SlideEntryWrapper'
import Image from 'next/image'
import ImageCrowd from '@/app/components/pagesSections/ImageCrowd'

function DesignDInterieur() {
    const imagesArray = [
        "/images/pages/design-interieur/1.jpg",
        "/images/pages/design-interieur/2.jpg",
        "/images/pages/design-interieur/3.png",
        "/images/pages/design-interieur/4.jpg",
        "/images/pages/design-interieur/5.jpg",
        "/images/pages/design-interieur/6.jpg"
    ];
    return (
        <PageContainer>
            <SmoothModal time={1000} />
            <h2>Design d’Intérieur</h2>

            <OpacityEntryWrapper>
                <Image src="/images/pages/design-interieur/page1.jpg" width={300} height={300} layout="responsive" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Borga Design est fier de présenter Atelier Plus Montecarlo, notre spin-off dédié exclusivement au
                    design d’intérieurs en marbre. Située au cœur de Monte-Carlo, cette nouvelle entité est née pour
                    répondre aux besoins les plus sophistiqués d'une clientèle internationale. Atelier Plus Montecarlo se
                    consacre à la conception et à la réalisation d’intérieurs luxueux, avec un accent particulier sur les
                    revêtements, sols, plans de cuisine et de salle de bain en marbre raffiné.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/design-interieur/page2.jpg" width={300} height={300} layout="responsive" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Grâce à notre expérience de plusieurs décennies et à la collaboration avec les meilleurs architectes
                    et designers du secteur, Atelier Plus Montecarlo propose des solutions sur mesure pour des projets
                    résidentiels et commerciaux haut de gamme, alliant savoir-faire artisanal italien et innovation
                    technologique. L'excellence des matériaux, combinée à un service personnalisé, fait de chaque
                    projet une œuvre unique et inimitable.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <div className="flex flex-col gap-4 mt-4">
                    <Image src="/images/pages/design-interieur/page3.jpg" width={300} height={300} layout="responsive" />
                    <Image src="/images/pages/design-interieur/page4.png" width={300} height={300} layout="responsive" />
                </div>
            </OpacityEntryWrapper>

            <ImageCrowd urlImagesArray={imagesArray} />

        </PageContainer>
    )
}

export default DesignDInterieur
