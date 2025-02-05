import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import PageContainer from '../../components/PageContainer'
import OpacityEntryWrapper from '../../components/pagesSections/OpacityEntryWrapper'
import SlideEntryWrapper from '../../components/pagesSections/SlideEntryWrapper'
import Image from 'next/image'
import DoubleImage from '../../components/pagesSections/DoubleImage'
import TripleImage from '../../components/pagesSections/TripleImage'
import Footer from '../../components/footer/Footer'
import { getDictionary } from '@/app/locales/getDictionary'
import Link from 'next/link'

function Piscines({ params }) {
    const { lng } = params;
    const t = getDictionary(lng);
    const imagesArray = [
        "/images/pages/piscines/1.jpg",
        "/images/pages/piscines/2.jpg",
        "/images/pages/piscines/3.png",
        "/images/pages/piscines/4.jpg",
        "/images/pages/piscines/5.jpg",
        "/images/pages/piscines/6.png",
        "/images/pages/piscines/new/10.png",
        "/images/pages/piscines/new/15.png",
        "/images/pages/piscines/new/26.png",
        "/images/pages/piscines/new/9.jpeg",
        "/images/pages/piscines/new/13.png",
        "/images/pages/piscines/new/8.jpeg",
        "/images/pages/piscines/new/25.jpg",
        "/images/pages/piscines/new/24.jpeg",
        "/images/pages/piscines/new/16.png",
        "/images/pages/piscines/new/27.png",
        "/images/pages/piscines/new/8.jpeg",
        "/images/pages/piscines/new/25.jpg",
        "/images/pages/piscines/new/23.jpeg",
        "/images/pages/piscines/new/20.jpeg",
        "/images/pages/piscines/new/22.jpeg",
        "/images/pages/piscines/new/7.jpeg",
        "/images/pages/piscines/new/19.jpeg",
    ]
    return (
        <PageContainer isDark>
            <SmoothModal time={1000} />
            <div className="w-full post-image">
                <h2 className="h2-over-image">{t.SwimmingPool.title}</h2>
            </div>

            <SlideEntryWrapper>
                <p>{t.SwimmingPool.first}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/piscines/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.SwimmingPool.second}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/piscines/page2.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.SwimmingPool.third}</p>
            </SlideEntryWrapper>

            <TripleImage image1={imagesArray[6]} image2={imagesArray[7]} image3={imagesArray[8]} />

            <SlideEntryWrapper>
                <p>{t.SwimmingPool.fourth}</p>
            </SlideEntryWrapper>

            <DoubleImage image1={imagesArray[9]} image2={imagesArray[10]} />

            <SlideEntryWrapper>
                <p>{t.SwimmingPool.fifth}</p>
            </SlideEntryWrapper>

            <TripleImage image1={imagesArray[11]} image2={imagesArray[22]} image3={imagesArray[13]} />

            <SlideEntryWrapper>
                <p>{t.SwimmingPool.sixth}</p>
            </SlideEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.SwimmingPool.seventh}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src={imagesArray[15]} width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>{t.SwimmingPool.eighth}</p>
            </SlideEntryWrapper>

            <DoubleImage image1={imagesArray[6]} image2={imagesArray[14]} />


            <SlideEntryWrapper>
                <p className='text-2xl'>{t.SwimmingPool.nineth}</p>
            </SlideEntryWrapper>
            <SlideEntryWrapper>
                <p>{t.SwimmingPool.tenth}</p>
            </SlideEntryWrapper>

            <TripleImage image1={imagesArray[16]} image2={imagesArray[17]} image3={imagesArray[18]} />

            <SlideEntryWrapper>
                <p>{t.SwimmingPool.eleventh}</p>
            </SlideEntryWrapper>
            <SlideEntryWrapper>
                <p className='text-2xl'>{t.SwimmingPool.twelfth}</p>
            </SlideEntryWrapper>
            <SlideEntryWrapper>
                <p>{t.SwimmingPool.thirteenth}</p>
            </SlideEntryWrapper>



            <SlideEntryWrapper>
                <p className='text-2xl'>{t.SwimmingPool.fourteenth}</p>
            </SlideEntryWrapper>
            <SlideEntryWrapper>
                <p>{t.SwimmingPool.fifteenth}</p>
            </SlideEntryWrapper>

            <DoubleImage image1={imagesArray[19]} image2={imagesArray[20]} />

            <SlideEntryWrapper>
                <p className='text-2xl'>{t.SwimmingPool.sixteenth}</p>
            </SlideEntryWrapper>
            <SlideEntryWrapper>
                <p>{t.SwimmingPool.seventeenth}</p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <DoubleImage image1={imagesArray[0]} image2={imagesArray[1]} />
                <TripleImage image1={imagesArray[3]} image2={imagesArray[4]} image3={imagesArray[5]} />
            </OpacityEntryWrapper>

            <OpacityEntryWrapper>
                <Image src={imagesArray[21]} width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <Link href="https://www.piscines-magiline.fr/pisciniste-magasin-piscines/borga-design/">
                <div className="mt-8">
                    <OpacityEntryWrapper>
                        <Image src={imagesArray[2]} width={300} height={300} layout="responsive" className="post-image" />
                    </OpacityEntryWrapper>
                </div>
            </Link>

            <Footer params={params} />

        </PageContainer>
    )
}

export default Piscines
Piscines