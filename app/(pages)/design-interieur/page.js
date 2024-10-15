import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '@/app/components/PageContainer'
import OpacityEntryWrapper from '@/app/components/pagesSections/OpacityEntryWrapper'
import SlideEntryWrapper from '@/app/components/pagesSections/SlideEntryWrapper'
import Image from 'next/image'
import NewGrid from '@/app/components/pagesSections/NewGrid'
import DoubleImage from '@/app/components/pagesSections/DoubleImage'
import Link from 'next/link'
import Footer from '@/app/components/footer/Footer'

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
            <div className="w-full post-image">
                <h2 className="h2-over-image">Design d’Intérieur</h2>
            </div>

            <OpacityEntryWrapper>
                <Image src="/images/pages/design-interieur/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
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
                <Image src="/images/pages/design-interieur/page2.jpg" width={300} height={300} layout="responsive" className="post-image" />
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
                <NewGrid array={imagesArray} />
                <DoubleImage image1="/images/pages/design-interieur/page3.jpg" image2="/images/pages/design-interieur/page4.png" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <div className="w-full flex justify-center mt-8">
                    <Link href="https://atelierplusmontecarlo.com"><h3>Atelier Plus Montecarlo</h3></Link>
                </div>
            </SlideEntryWrapper>

            <Footer />

        </PageContainer>
    )
}

export default DesignDInterieur
