import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '@/app/components/PageContainer'
import SlideEntryWrapper from '@/app/components/pagesSections/SlideEntryWrapper'
import Image from 'next/image'
import OpacityEntryWrapper from '@/app/components/pagesSections/OpacityEntryWrapper'
import ImageCrowd from '@/app/components/pagesSections/ImageCrowd'

function SolsEtMurs() {
    const imagesArray = [
        "/images/pages/sols-et-murs/1.jpg",
        "/images/pages/sols-et-murs/2.jpg",
        "/images/pages/sols-et-murs/3.jpg",
        "/images/pages/sols-et-murs/4.jpg",
        "/images/pages/sols-et-murs/5.jpg",
        "/images/pages/sols-et-murs/6.jpg"
    ];
    return (
        <PageContainer>
            <SmoothModal time={1000} />
            <h2 className="h2-over-image">Sols et Murs</h2>

            <OpacityEntryWrapper>
                <Image src="/images/pages/sols-et-murs/page1.jpg" width={300} height={300} layout="responsive" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Borga Design réalise des sols et revêtements en marbre, granit et pierres naturelles pour un large
                    éventail d'applications. Nous créons des sols intérieurs et extérieurs, des revêtements, des escaliers,
                    des seuils et appuis de fenêtre pour des projets publics et privés tels que des banques, des églises,
                    des hôpitaux et des habitations de luxe. Nous offrons un service « clé en main », suivant toutes les
                    étapes, du choix des matériaux à la pose, sans stress pour le client.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/sols-et-murs/page2.jpg" width={300} height={300} layout="responsive" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper fromDx>
                <p>
                    Notre équipe d'experts est spécialisée dans la pose de sols complexes tels que la coupe sur mesure,
                    la pose en livre ouvert, modulgranite et opus romain. Les matériaux sont sélectionnés dans les
                    meilleures carrières du monde pour garantir un résultat final impeccable. Nous collaborons avec des
                    architectes et des designers pour choisir les solutions les plus adaptées, avec une main-d'œuvre
                    qualifiée qui sait mettre en valeur les nuances naturelles des pierres.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <ImageCrowd urlImagesArray={imagesArray} />
            </OpacityEntryWrapper >
        </PageContainer>
    )
}

export default SolsEtMurs