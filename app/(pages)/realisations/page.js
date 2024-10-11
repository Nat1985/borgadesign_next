import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '@/app/components/PageContainer'
import SlideEntryWrapper from '@/app/components/pagesSections/SlideEntryWrapper'
import OpacityEntryWrapper from '@/app/components/pagesSections/OpacityEntryWrapper'
import Image from 'next/image'

function Realisations() {
    const imagesArray = [
        "/images/pages/realisations/1.jpg",
        "/images/pages/realisations/2.jpg",
        "/images/pages/realisations/3.jpg",
        "/images/pages/realisations/4.jpg",
        "/images/pages/realisations/5.jpg",
        "/images/pages/realisations/6.jpg"
    ];
    return (
        <PageContainer isDark>
            <SmoothModal time={1000} />

            <OpacityEntryWrapper>
                <Image src="/images/pages/realisations/page1.jpg" width={300} height={300} layout="responsive" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Borga Design a une vaste expérience dans la réalisation d'œuvres en marbre et en pierre naturelle.
                    Parmi nos projets les plus prestigieux, on retrouve:
                </p>    
                <ul className="text-ul">
                    <li>Balustrades</li>
                    <li>Colonnes</li>
                    <li>Fontaines</li>
                    <li>Mosaïques</li>
                    <li>Parquet</li>
                    <li>Pierres semi-précieuses</li>
                    <li>Plans de travail et murs rétroéclairés</li>
                    <li>Escaliers</li>
                    <li>Yachting</li>
                </ul>
                <p>
                    Chaque œuvre est réalisée avec soin et précision, pour créer des éléments décoratifs et fonctionnels
                    d'une beauté exceptionnelle.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <div className="flex flex-col gap-4">
                <Image src="/images/pages/realisations/page2.jpg" width={300} height={300} layout="responsive" />
                <Image src="/images/pages/realisations/page3.jpg" width={300} height={300} layout="responsive" />
                <Image src="/images/pages/realisations/page4.jpg" width={300} height={300} layout="responsive" />
                </div>

            </OpacityEntryWrapper>


        </PageContainer>
    )
}

export default Realisations
