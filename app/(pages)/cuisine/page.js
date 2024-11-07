import React from 'react'
import SmoothModal from '../../components/SmoothModal'
import SlideEntryWrapper from '@/app/components/pagesSections/SlideEntryWrapper'
import OpacityEntryWrapper from '@/app/components/pagesSections/OpacityEntryWrapper'
import Image from 'next/image'
import PageContainer from '@/app/components/PageContainer'
import NewGrid from '@/app/components/pagesSections/NewGrid'
import Footer from '@/app/components/footer/Footer'

function Cuisines() {
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
                <h2 className="h2-over-image">Cuisine</h2>
            </div>


            <OpacityEntryWrapper>
                <Image src="/images/pages/cuisines/page1.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>
            <SlideEntryWrapper>

                <p>
                    Borga Design est spécialisée dans la conception et la réalisation de cuisines sur mesure en marbre,
                    granit, quartz et pierres semi-précieuses. Nos cuisines allient élégance et fonctionnalité, avec des
                    matériaux sélectionnés pour garantir beauté, résistance et longévité. Nous proposons des solutions
                    complètes incluant des plans de travail, des îlots centraux, des crédences et des revêtements, conçus
                    pour s'intégrer parfaitement au design de votre maison.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <Image src="/images/pages/cuisines/page2.jpg" width={300} height={300} layout="responsive" className="post-image" />
            </OpacityEntryWrapper>

            <SlideEntryWrapper>
                <p>
                    Chaque cuisine est personnalisée en fonction des besoins du client, avec des finitions raffinées et
                    des détails qui mettent en valeur la qualité des matériaux choisis. Nous collaborons avec des
                    architectes et des designers pour créer des cuisines uniques, qui représentent la parfaite union entre
                    l'artisanat italien et le design moderne. Grâce à notre expérience, nous sommes en mesure de
                    proposer des cuisines de luxe, conçues pour devenir le cœur de la maison, où beauté et
                    fonctionnalité se rencontrent.
                </p>
            </SlideEntryWrapper>

            <OpacityEntryWrapper>
                <NewGrid array={imagesArray} />
            </OpacityEntryWrapper>


            <Footer />
        </PageContainer>
    )
}

export default Cuisines
