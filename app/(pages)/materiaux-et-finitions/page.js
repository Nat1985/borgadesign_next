import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '@/app/components/PageContainer'
import OpacityEntryWrapper from '@/app/components/pagesSections/OpacityEntryWrapper'
import SlideSection from '@/app/components/homeSections/SlideSection'
import Image from 'next/image'
import SlideEntryWrapper from '@/app/components/pagesSections/SlideEntryWrapper'
import NewGrid from '@/app/components/pagesSections/NewGrid'

function MateriauxEdFinitions() {
    const imagesArray = [
        "/images/pages/materiaux-et-finitions/1.jpg",
        "/images/pages/materiaux-et-finitions/2.jpg",
        "/images/pages/materiaux-et-finitions/3.jpg",
        "/images/pages/materiaux-et-finitions/4.jpg",
        "/images/pages/materiaux-et-finitions/5.jpg",
        "/images/pages/materiaux-et-finitions/6.jpg"
    ]
    return (
        <PageContainer>
            <SmoothModal time={1000} />
            <div className="w-full post-image">
                <h2 className="h2-over-image">Matériaux et Finitions</h2>
            </div>

            <OpacityEntryWrapper>
                <Image src="/images/pages/materiaux-et-finitions/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Borga Design offre une sélection de matériaux de haute qualité, incluant:
                </p>
                <ul className="post-image ul-disc pl-8 pb-8">
                    <li>Marbre</li>
                    <li>Granit</li>
                    <li>Travertin</li>
                    <li>Onyx</li>
                    <li>Ardoise</li>
                    <li>Woodstone</li>
                    <li>Corian</li>
                    <li>Quartz reconstitué</li>
                    <li>Pierres semi-précieuses</li>
                    <li>Natura Collection</li>
                    <li>Texture Collection</li>
                    <li>Shellstone</li>
                    <li>Matériaux pour sols extérieurs</li>
                </ul>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/materiaux-et-finitions/page2.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Les finitions disponibles incluent:
                </p>
                <ul className="post-image ul-disc pl-8 pb-8">
                    <li>Finition Oxydée : Une surface irrégulière qui met en valeur les veines naturelles de la pierre.</li>
                    <li>Finition Vieillie : Confère un aspect antique à la pierre, la rendant hydrofuge et oléofuge.</li>
                    <li>Finition Naturelle : Parfaite pour les ardoises et porphyres, elle maintient l'aspect brut de la pierre.</li>
                    <li>Finition Bouchardée : Crée des surfaces irrégulières et rustiques.</li>
                    <li>Finition Flammée : Utilisée principalement sur les granits, elle crée une surface rugueuse et</li>
                    <li>résistante.</li>
                    <li>Finition Rayée / Égrisée : Donne un effet rayé adapté au marbre et grès.</li>
                    <li>Finition Hydro : Un jet d'eau réglable pour créer une texture douce.</li>
                    <li>Polissage : Un polissage qui accentue la couleur et la brillance de la pierre. Nous proposons</li>
                    <li>également des traitements de brossage, de polissage et anti-taches, pour valoriser chaque projet avec</li>
                    <li>des solutions uniques et personnalisées.</li>
                </ul>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <NewGrid array={imagesArray} />
            </OpacityEntryWrapper>

        </PageContainer>

    )
}

export default MateriauxEdFinitions
