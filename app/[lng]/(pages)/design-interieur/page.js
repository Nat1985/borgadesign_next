import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '../../components/PageContainer'
import OpacityEntryWrapper from '../../components/pagesSections/OpacityEntryWrapper'
import SlideEntryWrapper from '../../components/pagesSections/SlideEntryWrapper'
import Image from 'next/image'
import NewGrid from '../../components/pagesSections/NewGrid'
import DoubleImage from '../../components/pagesSections/DoubleImage'
import Link from 'next/link'
import Footer from '../../components/footer/Footer'
import { getDictionary } from '@/app/locales/getDictionary'

function DesignDInterieur({ params }) {
    const { lng } = params;
    const t = getDictionary(lng);
    const imagesArray = [
        "/images/pages/design-interieur/1.jpg",
        "/images/pages/design-interieur/2.jpg",
        "/images/pages/design-interieur/3.png",
        "/images/pages/design-interieur/4.jpg",
        "/images/pages/design-interieur/5.jpg",
        "/images/pages/design-interieur/6.jpg"
    ];
    return (
        <PageContainer>
            <SmoothModal time={1000} />
            <div className="w-full post-image">
                <h2 className="h2-over-image">{t.InteriorDesign.title}</h2>
            </div>

            <OpacityEntryWrapper>
                <Image src="/images/pages/design-interieur/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.InteriorDesign.first}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/design-interieur/page2.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.InteriorDesign.second}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <NewGrid array={imagesArray} />
                <DoubleImage image1="/images/pages/design-interieur/page3.jpg" image2="/images/pages/design-interieur/page4.png" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <div className="w-full flex justify-center mt-8">
                    <Link href="https://atelierplusmontecarlo.com"><h3 className='underline'>Atelier Plus Montecarlo</h3></Link>
                </div>
            </SlideEntryWrapper>

            <Footer params={params} />

        </PageContainer>
    )
}

export default DesignDInterieur
