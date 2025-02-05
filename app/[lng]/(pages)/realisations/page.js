import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '../../components/PageContainer'
import SlideEntryWrapper from '../../components/pagesSections/SlideEntryWrapper'
import OpacityEntryWrapper from '../../components/pagesSections/OpacityEntryWrapper'
import Image from 'next/image'
import DoubleImage from '../../components/pagesSections/DoubleImage'
import Footer from '../../components/footer/Footer'
import { getDictionary } from '@/app/locales/getDictionary'

function Realisations({ params }) {
    const { lng } = params;
    const t = getDictionary(lng);
    const imagesArray = [
        "/images/pages/realisations/page2.jpg",
        "/images/pages/realisations/page3.jpg"
    ];
    return (
        <PageContainer isDark>
            <SmoothModal time={1000} />
            <div className="w-full post-image">
                <h2 className="h2-over-image">{t.Projects.title}</h2>
            </div>

            <OpacityEntryWrapper>
                <Image src="/images/pages/realisations/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.Projects.first}</p>
                <ul className="post-image ul-disc pl-8 pb-8">
                    {t.Projects.second?.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
                <p>{t.Projects.third}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <DoubleImage image1={imagesArray[0]} image2={imagesArray[1]} />
            </OpacityEntryWrapper>

            <Footer />

        </PageContainer>
    )
}

export default Realisations
