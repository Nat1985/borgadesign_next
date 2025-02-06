import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '../../components/PageContainer'
import Image from 'next/image'
import SlideWrapper from '../../components/pagesSections/SlideEntryWrapper'
import OpacityEntryWrapper from '../../components/pagesSections/OpacityEntryWrapper'
import NewGrid from '../../components/pagesSections/NewGrid'
import Footer from '../../components/footer/Footer'
import { getDictionary } from '@/app/locales/getDictionary'

function Histoire({ params }) {
    const { lng } = params;
    const t = getDictionary(lng);
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
                <h2>{t.History.title}</h2>
            </div>

            <SlideWrapper>
                <p>
                    {t.History.first}
                </p>
            </SlideWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/histoire/history1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideWrapper fromDx>
                <p>
                    {t.History.second}
                </p>
            </SlideWrapper>

            <SlideWrapper>
                <p>
                    {t.History.third}
                </p>
            </SlideWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/histoire/history2.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideWrapper fromDx>
                <p>
                {t.History.forth}
                </p>
            </SlideWrapper>

            <SlideWrapper>
                <p>
                {t.History.fifth}
                </p>
            </SlideWrapper>

            <SlideWrapper fromDx>
                <p>
                {t.History.sixth}
                </p>
            </SlideWrapper>

            <OpacityEntryWrapper>
                <NewGrid array={imagesArray} />
            </OpacityEntryWrapper >

            <Footer params={params} />
        </PageContainer>
    )
}

export default Histoire
Histoire