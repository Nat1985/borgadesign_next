import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import OpacityEntryWrapper from '../../components/pagesSections/OpacityEntryWrapper'
import SlideEntryWrapper from '../../components/pagesSections/SlideEntryWrapper'
import PageContainer from '../../components/PageContainer'
import Image from 'next/image'
import NewGrid from '../../components/pagesSections/NewGrid'
import QuadrupleImage from '../../components/pagesSections/QuadrupleImage'
import Footer from '../../components/footer/Footer'
import { getDictionary } from '@/app/locales/getDictionary'

function SallesDeBain({ params }) {
    const { lng } = params;
    const t = getDictionary(lng);
    const imagesArray = [
        "/images/pages/salles-du-bain/1.jpg",
        "/images/pages/salles-du-bain/2.jpg",
        "/images/pages/salles-du-bain/3.jpg",
        "/images/pages/salles-du-bain/4.jpg",
        "/images/pages/salles-du-bain/5.jpg",
        "/images/pages/salles-du-bain/6.jpg"
    ]
    return (
        <PageContainer isDark>
            <SmoothModal time={1000} />
            <div className="w-full post-image">
                <h2 className="h2-over-image">{t.Bathroom.title}</h2>
            </div>

            <OpacityEntryWrapper>
                <Image src="/images/pages/salles-du-bain/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.Bathroom.first}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/salles-du-bain/page2.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <div className="mt-16">
                <OpacityEntryWrapper>
                    <QuadrupleImage image1="/images/pages/salles-du-bain/page3.jpg" image2="/images/pages/salles-du-bain/page4.jpg" image3="/images/pages/salles-du-bain/page5.jpg" image4="/images/pages/salles-du-bain/page6.jpg" />
                </OpacityEntryWrapper>
            </div>

            <SlideEntryWrapper>
                <p>{t.Bathroom.second}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <NewGrid array={imagesArray} />
            </OpacityEntryWrapper>

            <Footer />
        </PageContainer>

    )
}

export default SallesDeBain
