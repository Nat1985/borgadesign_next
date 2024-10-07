import React from 'react'
import TwoColumsPage from '../components/TwoColumsPage'
import Image from 'next/image'
import TextSlideAnimationContainer from '../components/TextSlideAnimationContainer'
import dynamic from 'next/dynamic'
import TextSerialSildeAnimationContainer from '../components/TextSerialSildeAnimationContainer'

const ImageAnimationContainer = dynamic(() => import('../components/ImageAnimationContainer'), { ssr: false })
function BorgaDesign() {
    return (
        <TwoColumsPage isDark>
            {/* Testo */}
            <div className='flex-1 p-8'>
                <TextSerialSildeAnimationContainer from="sx">
                    <h1 className='serial'>Borga Design</h1>
                    <div className='serial'>
                        <p>
                            Borga Marmi, "La Passion Italienne Pour La Pierre", est active à Sanremo depuis 1891. <b>Il s’agit en effet de l'année où Domenico Borga, né à Nice en 1864</b>, et arrière-arrière-grand-père des propriétaires actuels, ouvrit son premier atelier de marbre à Sanremo, sur les traces de son père <b>Carlo Giuseppe, déjà présent sur la Côte d'Azur depuis 1834</b>, année où il arriva de Barge (TO) comme tailleur de pierre apprécié, afin de participer activement à la création de plusieurs œuvres en pierre et marbre dont le <b>Musée Océanographique de Monte-Carlo et Villa Ormond à Sanremo</b>.
                        </p>
                        <p>
                            <b>Domenico Borga</b>, lui-même tailleur de pierre doué, participa à la restauration de la <b>Cathédrale de San Siro en 1901</b>, en particulier à la reconstruction de certaines parties en pierre de la rosace érodée par le temps.
                        </p>
                    </div>
                    <div className='serial'>
                        <p>
                            Depuis, le nom Borga est lié à la tradition du marbre avec foi et dévouement immuables, à tel point que plusieurs œuvres en marbre fin, fabriquées à la main par Domenico Borga et son fils Domenico, son homonyme, sont encore clairement visibles dans toute leur splendeur au Cimetière Monumental de Sanremo.
                        </p>
                        <p>
                            Ce n'est qu'en 1964 que la société devient une entreprise de taille moyenne, sous la direction du Dr Antonio Borga qui réalise des travaux d’agrandissement pour le laboratoire de production, les espaces d'exposition et qui achète des machines de pointe pour intensifier la production de transformation du marbre et granit, toujours exécutée avec passion et grand soin.
                        </p>
                        <p>
                            Et nous voici arrivé dans le présent, quand le talent et l’amour pour le marbre unit au goût d'Anna pour le design et à l'esprit d'entreprise de Stefano tendent à renforcer la structure sociale de l'entreprise. Le riche patrimoine de connaissances et d'expériences dans la transformation du marbre s'est transmis intact au fil du temps, allié à une passion pour la mise en valeur de la beauté naturelle de ce matériau.
                        </p>
                    </div>

                </TextSerialSildeAnimationContainer>
            </div>
            {/* Foto */}
            <div className='flex-1'>
                <ImageAnimationContainer>
                    <Image src="/images/pages/borga-design/1.jpg" width={64} height={64} layout='responsive' />
                </ImageAnimationContainer>
            </div>
        </TwoColumsPage>
    )
}

export default BorgaDesign
