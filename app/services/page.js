import React from 'react'
import OneColumPage from '../components/OneColumPage'
import TextSerialSildeAnimationContainer from '../components/TextSerialSildeAnimationContainer'
import ImageAnimationContainer from '../components/ImageAnimationContainer'
import Image from 'next/image'
import TextSlideAnimationContainer from '../components/TextSlideAnimationContainer'
import DoubleSection from '../components/DoubleSection'

function Services() {
    return (
        <div className='flex flex-col mt-[116px]'>

            {/* 1 */}
            <div className='w-full flex flex-col md:flex-row p-8'>
                <div className='flex-1 p-0 md:p-16 flex md:items-center'>
                    <TextSlideAnimationContainer from="sx" delay={0}>
                        <h2>Travaux en marbre et pierres</h2>
                        <p>Borga Design possède 150 ans d’expérience dans le traitement et l’installation de marbre, de granit et de pierres naturelles: pour ce et grâce à notre connaissance du produit et de ses caractéristiques, nous pouvons réaliser tous vos souhaits. Venez découvrir ce que nous pouvons créer pour vous!</p>
                    </TextSlideAnimationContainer>
                </div>
                <div className='flex-1 overflow-hidden'>
                    <ImageAnimationContainer>
                        <img src="/images/pages/services/1.jpg" className='w-full h-full object-cover' />
                    </ImageAnimationContainer>
                </div>
            </div>

            {/* 2 */}
            <div className='w-full flex flex-col md:flex-row-reverse p-8'>
                <div className='flex-1 p-0 md:p-16 flex md:items-center'>
                    <TextSlideAnimationContainer from="dx" delay={0}>
                        <h2>Céramique et Meubles de Salle de Bain</h2>
                        <p>Notre salle d’exposition est ouverte aux professionnels, entreprises de construction et aux particuliers qui sont à la recherche des meilleurs matériaux pour leurs projets, des plus simples aux plus ambitieux. Notre salle de plus de 800 m2 est notre vitrine qui vous permet de découvrir les sols et revêtements en céramique, meubles de salle de bains, mosaïques, parquet et plus encore. Découvrez ici tous nos produits!</p>
                    </TextSlideAnimationContainer>
                </div>
                <div className='flex-1 overflow-hidden'>
                    <ImageAnimationContainer>
                        <img src="/images/pages/services/2.jpg" className='w-full h-full object-cover' />
                    </ImageAnimationContainer>
                </div>
            </div>

            {/* 2 */}
            <div className='w-full flex flex-col md:flex-row p-8'>
                <div className='flex-1 p-0 md:p-16 flex md:items-center'>
                    <TextSlideAnimationContainer from="sx" delay={0}>
                        <h2>Construction et Vente de Piscines</h2>
                        <p>Borga Design est le distributeur officiel de la société française Magiline, spécialiste de la création de piscines intelligentes et modernes. Par conséquent, nos points forts sont la facilité et la qualité de l'entretien, ainsi qu'une large gamme d'accessoires pour répondre à tous vos souhaits.</p>
                    </TextSlideAnimationContainer>
                </div>
                <div className='flex-1 overflow-hidden'>
                    <ImageAnimationContainer>
                        <img src="/images/pages/services/3.jpg" className='w-full h-full object-cover' />
                    </ImageAnimationContainer>
                </div>
            </div>
        </div>



    )
}

export default Services
