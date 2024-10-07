import React from 'react'
import MainPage from '../components/TwoColumsPage'
import Image from 'next/image'
import TextSlideAnimationContainer from '../components/TextSlideAnimationContainer'
import dynamic from 'next/dynamic'
import OneColumPage from '../components/OneColumPage'

const ImageAnimationContainer = dynamic(() => import('../components/ImageAnimationContainer'), { ssr: false })
function Histoire() {
    return (
        <OneColumPage >
            <div className='p-8'>
                <TextSlideAnimationContainer from="dx" delay={0}>
                    <h1>Histoire</h1>
                    <p>
                        Borga Design: pur talent italien.
                    </p>
                    <p>
                        Borga Design S.R.L. de Borga Anna et Stefano poursuit la tradition familiale qui débute dans le lointain 1834, quand le trisaïeul Borga Domenico originaire de Barge (Cuneo) débarque en Côte D’Azur comme tailleur de pierre pour contribuer au travail et à la pose de marbre au Musée Océanographique de Monte-Carlo puis ensuite à la Villa Ormond de Sanremo.
                    </p>
                </TextSlideAnimationContainer>
            </div>
            <ImageAnimationContainer>
                <Image src="/images/pages/histoire/1.jpg" width={64} height={64} layout='responsive' />
            </ImageAnimationContainer>
            <div className='p-8'>
                <TextSlideAnimationContainer from="sx" delay={0}>
                    <h3>
                        La société Borga Design s’établit à Sanremo en 1891 au siège actuel.
                    </h3>
                    <p>
                        Elle a toujours exercé l’activité de travail du marbre, de la pierre et du granit, nationaux et étrangers, à un niveau artisanal, aussi bien dans le domaine de l’art funéraire que dans celui du bâtiment et de l’ameublement. Elle réalise revêtements, planchers, plans de travail pour salle de bain et cuisine, escaliers et tout ce qui implique l’utilisation de marbres, granits et matériaux en pierre. Les travaux sont principalement de nature artisanale, suivis pendant tout le processus par une main d’œuvre spécialisée, qui prête une attention particulière aux détails et aux exigences de la clientèle.
                    </p>
                    <p>
                        Notre laboratoire, situé Via Armea 135 à Sanremo, permet d’offrir à nos clients un service rapide et polyvalent, en mesure de satisfaire toutes les exigences de fourniture de façon professionnelle et efficace, grâce à une main d’œuvre hautement qualifiée qui travaille avec nous depuis plusieurs années.
                    </p>
                    <p>
                        De plus, nous disposons d’équipements modernes et de pointe, qui nous permettent d’intervenir sur n’importe quel type de travail, tout en garantissant des fournitures à règle d’art.
                    </p>
                    <h3>Marbrerie Borga Design est une société à gestion familiale, active à Sanremo depuis 1865</h3>
                    <p>
                        C’est cette année-là précisément que Borga, trisaïeul des propriétaires actuels, ouvrit à Sanremo son premier atelier pour le travail du marbre, suivant ainsi les traces de son père tailleur de marbre, actif en Côte d’Azur et sur la Riviera dei Fiori déjà pendant la seconde moitié du XIXe siècle. Avec une dizaine d’ouvriers et jeunes apprentis, il a ainsi jeté les bases de ce qui est encore aujourd’hui une entreprise solide liée aux valeurs familiales et à la passion pour le marbre et la sculpture.
                    </p>
                    <p>
                        Aujourd’hui encore, Anna et Stefano Borga, chacun avec ses propres compétences, travaillent pour le succès et le progrès de l’entreprise, cherchant toujours à obtenir un produit de qualité. Le riche patrimoine de connaissances et d’expériences dans le travail du marbre s’est transmis intact au fil du temps, allié à la passion de mettre en valeur toute la beauté naturelle de ce matériau.
                    </p>
                </TextSlideAnimationContainer>
            </div>
            <div>
                <ImageAnimationContainer>
                    <Image src="/images/pages/histoire/2.jpg" width={64} height={64} layout='responsive' />
                </ImageAnimationContainer>
            </div>
        </OneColumPage >
    )
}

export default Histoire
