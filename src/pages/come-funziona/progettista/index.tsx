import { initApollo } from '@/lib/apollo';
import GET_EXPLENATION_COMPONENTS_BY_TITLE from '@/lib/apollo/dato_CMS/queries/getExplenationComponentsByTitle';
import React, { FC } from 'react'
import ExplenationComponentElement, { ExplenationComponentElementInterface } from '../../../../components/molecules/ExplenationComponentElement';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import ExplenationCard from '../../../../components/molecules/ExplenationCard';
import FormComponent from '../../../../components/molecules/FormComponent';
import StartComponent from '../../../../components/molecules/StartComponent';
import NonHaiTrovatoQuelloCheCercavi from '../../../../components/molecules/NonHaiTrovatoQuelloCheCercavi';
import FadeInWhenVisible from '../../../../components/atoms/FadeInWhenVisible';
import DocumentsComponent from '../../../../components/molecules/DocumentsComponent';
import BoxWidth from '../../../../components/atoms/BoxWidth';

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const apolloClient = initApollo();



    const explenation_Progettista = await apolloClient.query({
        query: GET_EXPLENATION_COMPONENTS_BY_TITLE,
        context: {
            clientName: 'DATO_CMS_LINK',
        },
        variables: {
            title: 'Explenation_Progettista'
        }
    });

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            explenation_Progettista: explenation_Progettista?.data?.explenationComponentElement.explenationComponent
        },
    }
}

const index: FC<{ explenation_Progettista: ExplenationComponentElementInterface[] }> = ({ explenation_Progettista }) => {

    return (
        <>

            <Image
                width={820}
                height={800}
                src={'https://www.datocms-assets.com/106122/1697277987-group-2.png'}
                alt='gru'
                className='hidden lg:flex absolute top-[100px] left-[80px] right-0 -z-10'
            >
            </Image>

            <StartComponent
                element={{
                    titolo: 'Realizza il tuo progetto con chi se ne intende davvero',
                    sottotitolo: 'Con Skimming trovi le imprese migliori e sei in pieno controllo di tutta la gara d’appalto',
                    immagineDesktop: 'https://www.datocms-assets.com/106122/1697271856-group-79-1.png',
                    imageDevice: 'https://www.datocms-assets.com/106122/1696856417-group-90-1.png',
                    buttonText: 'Iniziamo!'
                }}
            />
            {explenation_Progettista &&
                <BoxWidth
                    className='grid gap-[260px] lg:gap-[220px] '

                >

                    {explenation_Progettista.map((element: ExplenationComponentElementInterface, index: number) => <ExplenationComponentElement element={element} key={index} index={index} />)
                    }
                    <FormComponent
                        title='tutto inizia con una stretta di mano. scegli il vincitore'
                        subtitle='Seleziona l’impresa vincitrice e comincia i lavori'
                        buttonText='Crea una gara'
                        imageUrl='https://www.datocms-assets.com/106122/1695547167-group-63.png'
                    />

                </BoxWidth>
            }
            <DocumentsComponent className='mt-[300px] mb-[520px]' />
            <NonHaiTrovatoQuelloCheCercavi className='mb-[520px]' />


        </>

    )
}

export default index