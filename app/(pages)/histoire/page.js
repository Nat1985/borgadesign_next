import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '@/app/components/PageContainer'
import Image from 'next/image'
import SlideWrapper from '@/app/components/pagesSections/SlideEntryWrapper'
import OpacityEntryWrapper from '@/app/components/pagesSections/OpacityEntryWrapper'
import NewGrid from '@/app/components/pagesSections/NewGrid'

function Histoire() {
    const imagesArray = [
        "/images/pages/histoire/1.jpg",
        "/images/pages/histoire/2.jpg",
        "/images/pages/histoire/3.jpg",
        "/images/pages/histoire/4.jpg",
        "/images/pages/histoire/5.jpg",
        "/images/pages/histoire/6.jpg"
    ];
    return (
        <PageContainer isDark>
            <SmoothModal time={1000} />
            <div className="w-full post-image">
                <h2>Histoire</h2>
            </div>

            <SlideWrapper>
                <p>
                    Borga Marmi, « La Passion Italienne pour la Pierre », est active à Sanremo depuis 1891. Cette
                    année-là, Domenico Borga, né à Nice en 1864, arrière-arrière-grand-père des propriétaires actuels,
                    ouvrit son premier atelier de marbre à Sanremo, suivant les traces de son père Carlo Giuseppe,
                    présent sur la Côte d'Azur depuis 1834 en tant que tailleur de pierre reconnu. Domenico a contribué
                    à la réalisation d'œuvres emblématiques en pierre et en marbre, telles que le Musée
                    Océanographique de Monte-Carlo et la Villa Ormond à Sanremo.
                </p>
            </SlideWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/histoire/history1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideWrapper fromDx>
                <p>
                    Tailleur de pierre talentueux, Domenico Borga a également participé à la restauration de la
                    Cathédrale de San Siro en 1901. Depuis lors, le nom Borga est synonyme de tradition marbrière,
                    avec une dévotion et une passion qui continuent de vivre à travers les générations. De nombreuses
                    œuvres réalisées à la main par Domenico et ses successeurs sont encore visibles aujourd'hui au
                    Cimetière Monumental de Sanremo.
                </p>
            </SlideWrapper>

            <SlideWrapper>
                <p>
                    En 1964, sous la direction du Dr. Antonio Borga, l'entreprise a évolué en une PME avec
                    l'agrandissement de l'atelier, des espaces d'exposition et l'acquisition de machines avancées pour le
                    travail du marbre et du granit, tout en conservant un soin artisanal méticuleux.
                </p>
            </SlideWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/histoire/history2.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideWrapper fromDx>
                <p>
                    Aujourd'hui, grâce au talent pour le marbre et au goût pour le design d'Anna, combinés à l'esprit
                    entrepreneurial de Stefano, la tradition s'est modernisée. Le savoir-faire artisanal dans le travail de
                    la pierre s'est transmis intact, accompagné de la passion pour mettre en valeur la beauté naturelle de
                    chaque matériau.
                </p>
            </SlideWrapper>

            <SlideWrapper>
                <p>
                    Notre atelier à Sanremo offre un service professionnel et polyvalent, avec une main-d'œuvre
                    hautement qualifiée et des machines de pointe, prêtes à réaliser tout type de projet avec la plus
                    grande précision et qualité.
                </p>
            </SlideWrapper>

            <SlideWrapper fromDx>
                <p>
                    Notre showroom de plus de 800 m² est un lieu d'inspiration, avec un vaste choix de sols en
                    céramique, parquet et pierres naturelles, idéaux pour tout type d'environnement, du simple au
                    luxueux, situé Via Armea 135, à Sanremo.
                </p>
            </SlideWrapper>

            <OpacityEntryWrapper>
                <NewGrid array={imagesArray} />
            </OpacityEntryWrapper >
        </PageContainer>
    )
}

export default Histoire
Histoire