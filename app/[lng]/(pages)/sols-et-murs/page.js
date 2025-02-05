import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '../../components/PageContainer'
import SlideEntryWrapper from '../../components/pagesSections/SlideEntryWrapper'
import Image from 'next/image'
import OpacityEntryWrapper from '../../components/pagesSections/OpacityEntryWrapper'
import NewGrid from '../../components/pagesSections/NewGrid'
import Footer from '../../components/footer/Footer'
import { getDictionary } from '@/app/locales/getDictionary'

function SolsEtMurs({ params }) {
    const { lng } = params;
    const t = getDictionary(lng);
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
            <div className="w-full post-image">
                <h2 className="h2-over-image">{t.FloorAndWalls.title}</h2>
            </div>


            <OpacityEntryWrapper>
                <Image src="/images/pages/sols-et-murs/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.FloorAndWalls.first}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/sols-et-murs/page2.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper fromDx>
                <p>{t.FloorAndWalls.second}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <NewGrid array={imagesArray} />
            </OpacityEntryWrapper >

            <Footer />
        </PageContainer>
    )
}

export default SolsEtMurs