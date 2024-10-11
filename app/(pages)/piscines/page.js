import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '@/app/components/PageContainer'
import OpacityEntryWrapper from '@/app/components/pagesSections/OpacityEntryWrapper'
import SlideEntryWrapper from '@/app/components/pagesSections/SlideEntryWrapper'
import Image from 'next/image'
import ImageCrowd from '@/app/components/pagesSections/ImageCrowd'

function Piscines() {
    const imagesArray = [
        "/images/pages/piscines/1.jpg",
        "/images/pages/piscines/2.jpg",
        "/images/pages/piscines/3.jpg",
        "/images/pages/piscines/4.jpg",
        "/images/pages/piscines/5.jpg",
        "/images/pages/piscines/6.jpg"
    ]
    return (
        <PageContainer isDark>
            <SmoothModal time={1000} />
            <h2 className="h2-over-image">Piscines</h2>

            <OpacityEntryWrapper>
            <Image src="/images/pages/piscines/page1.jpg" width={300} height={300} layout="responsive" />

            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Nous sommes distributeurs officiels de la société française Magiline, spécialiste des piscines
                    modernes et intelligentes. Nos piscines sont réputées pour leur qualité de construction, leur facilité
                    d'entretien et une vaste gamme d'accessoires. Nous offrons un service complet de conception et de
                    réalisation de piscines de luxe, parfaitement intégrées à l'environnement environnant, tant pour les
                    résidences privées que pour les hôtels et les espaces publics.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
            <Image src="/images/pages/piscines/page2.jpg" width={300} height={300} layout="responsive" />

            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    La filtration brevetée des piscines Magiline vous offre une facilité et une qualité d'entretien
                    incomparables. Tout est pensé pour réduire la consommation d'électricité, d'eau et de produits de
                    nettoyage. Une piscine autoportante, sans poteaux de soutien ni renforts, pour une longévité
                    garantie. Grâce à cette technologie, la réalisation est simple et rapide.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <ImageCrowd urlImagesArray={imagesArray} />
            </OpacityEntryWrapper>

        </PageContainer>
    )
}

export default Piscines
Piscines