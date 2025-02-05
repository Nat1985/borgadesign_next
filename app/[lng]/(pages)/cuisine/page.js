import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import SlideEntryWrapper from '../../components/pagesSections/SlideEntryWrapper'
import OpacityEntryWrapper from '../../components/pagesSections/OpacityEntryWrapper'
import Image from 'next/image'
import PageContainer from '../../components/PageContainer'
import NewGrid from '../../components/pagesSections/NewGrid'
import Footer from '../../components/footer/Footer'
import { getDictionary } from '@/app/locales/getDictionary'

function Cuisines({ params }) {
    const { lng } = params;
    const t = getDictionary(lng);
    const imagesArray = [
        "/images/pages/cuisines/1.jpg",
        "/images/pages/cuisines/2.jpg",
        "/images/pages/cuisines/3.jpg",
        "/images/pages/cuisines/4.jpg",
        "/images/pages/cuisines/5.jpg",
        "/images/pages/cuisines/6.jpg"
    ]
    return (
        <PageContainer>
            <SmoothModal time={1000} />
            <div className="w-full post-image">
                <h2 className="h2-over-image">{t.Kitchen.title}</h2>
            </div>

            <OpacityEntryWrapper>
                <Image src="/images/pages/cuisines/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>
            <SlideEntryWrapper>

                <p>{t.Kitchen.first}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/cuisines/page2.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.Kitchen.second}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <NewGrid array={imagesArray} />
            </OpacityEntryWrapper>


            <Footer />
        </PageContainer>
    )
}

export default Cuisines
