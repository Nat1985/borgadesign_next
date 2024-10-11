import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import OpacityEntryWrapper from '@/app/components/pagesSections/OpacityEntryWrapper'
import SlideEntryWrapper from '@/app/components/pagesSections/SlideEntryWrapper'
import PageContainer from '@/app/components/PageContainer'
import Image from 'next/image'
import ImageCrowd from '@/app/components/pagesSections/ImageCrowd'

function SallesDeBain() {
    const imagesArray= [
        "/images/pages/salles-du-bain/1.jpg",
        "/images/pages/salles-du-bain/2.jpg",
        "/images/pages/salles-du-bain/3.jpg",
        "/images/pages/salles-du-bain/4.jpg",
        "/images/pages/salles-du-bain/5.jpg",
        "/images/pages/salles-du-bain/6.jpg"
    ]
    return (
        <PageContainer isDark>
            <SmoothModal time={1000} />
            <h2 className="h2-over-image">Sals du Bain</h2>

            <OpacityEntryWrapper>
                <Image src="/images/pages/salles-du-bain/page1.jpg" width={300} height={300} layout="responsive" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Borga Design est un leader dans la réalisation de salles de bains de luxe. Avec plus d'un siècle
                    d'expérience, nous offrons des aménagements et des sols de salles de bains en marbre, granit et
                    matériaux composites. Nous collaborons avec les meilleures marques italiennes pour des solutions
                    complètes, de la conception à l'installation. Nous réalisons des lavabos, plans de travail et autres
                    éléments sur mesure, avec des finitions exclusives.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <div className="flex flex-col gap-4">
                    <Image src="/images/pages/salles-du-bain/page2.jpg" width={300} height={300} layout="responsive" />
                    <Image src="/images/pages/salles-du-bain/page3.jpg" width={300} height={300} layout="responsive" />
                </div>
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Dans notre showroom, vous trouverez une large gamme de meubles, mosaïques, sanitaires,
                    robinetteries et accessoires, pour créer la salle de bains de vos rêves. Chaque élément peut être
                    personnalisé pour créer un environnement unique et raffiné.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <ImageCrowd urlImagesArray={imagesArray} />
            </OpacityEntryWrapper>

        </PageContainer>

    )
}

export default SallesDeBain
