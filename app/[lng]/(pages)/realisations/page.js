import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '../../components/PageContainer'
import SlideEntryWrapper from '../../components/pagesSections/SlideEntryWrapper'
import OpacityEntryWrapper from '../../components/pagesSections/OpacityEntryWrapper'
import Image from 'next/image'
import DoubleImage from '../../components/pagesSections/DoubleImage'
import Footer from '../../components/footer/Footer'

function Realisations() {
    const imagesArray = [
        "/images/pages/realisations/page2.jpg",
        "/images/pages/realisations/page3.jpg"
    ];
    return (
        <PageContainer isDark>
            <SmoothModal time={1000} />
            <div className="w-full post-image">
                <h2 className="h2-over-image">Réalisations</h2>
            </div>

            <OpacityEntryWrapper>
                <Image src="/images/pages/realisations/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Borga Design a une vaste expérience dans la réalisation d'œuvres en marbre et en pierre naturelle.
                    Parmi nos projets les plus prestigieux, on retrouve:
                </p>
                <ul className="post-image ul-disc pl-8 pb-8">
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
                <DoubleImage image1={imagesArray[0]} image2={imagesArray[1]} />
            </OpacityEntryWrapper>

            <Footer />

        </PageContainer>
    )
}

export default Realisations
