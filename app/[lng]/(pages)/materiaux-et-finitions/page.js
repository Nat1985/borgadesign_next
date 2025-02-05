import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '../../components/PageContainer'
import OpacityEntryWrapper from '../../components/pagesSections/OpacityEntryWrapper'
import SlideSection from '../../components/homeSections/SlideSection'
import Image from 'next/image'
import SlideEntryWrapper from '../../components/pagesSections/SlideEntryWrapper'
import NewGrid from '../../components/pagesSections/NewGrid'
import Footer from '../../components/footer/Footer'
import { getDictionary } from '@/app/locales/getDictionary'

function MateriauxEdFinitions({ params }) {
    const { lng } = params;
    const t = getDictionary(lng);
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
                <h2 className="h2-over-image">{t.MaterialsAndFinisches.title}</h2>
            </div>

            <OpacityEntryWrapper>
                <Image src="/images/pages/materiaux-et-finitions/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.MaterialsAndFinisches.first}</p>
                <ul className="post-image ul-disc pl-8 pb-8">
                {t.MaterialsAndFinisches.second?.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/materiaux-et-finitions/page2.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.MaterialsAndFinisches.third}</p>
                <ul className="post-image ul-disc pl-8 pb-8">
                    {t.MaterialsAndFinisches.fourth?.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <NewGrid array={imagesArray} />
            </OpacityEntryWrapper>

            <Footer />

        </PageContainer>

    )
}

export default MateriauxEdFinitions
