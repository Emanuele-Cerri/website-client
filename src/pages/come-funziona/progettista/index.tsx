import { initApollo } from '@/lib/apollo';
import GET_EXPLENATION_COMPONENTS_BY_TITLE from '@/lib/apollo/dato_CMS/queries/getExplenationComponentsByTitle';
import React, { FC } from 'react'
import ExplenationComponentElement, { ExplenationComponentElementInterface } from '../../../../components/molecules/ExplenationComponentElement';
import { Box, Button, Text } from '@chakra-ui/react';
import ExplenationCard from '../../../../components/molecules/ExplenationCard';
import FormComponent from '../../../../components/molecules/FormComponent';
import StartComponent from '../../../../components/molecules/StartComponent';
import NonHaiTrovatoQuelloCheCercavi from '../../../../components/molecules/NonHaiTrovatoQuelloCheCercavi';

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
            <StartComponent
                element={{
                    titolo: 'Realizza il tuo progetto con chi se ne intende davvero',
                    sottotitolo: 'Con Skimming trovi le imprese migliori e sei in pieno controllo di tutta la gara d’appalto',
                    immagineDesktop: 'https://www.datocms-assets.com/106122/1695905746-group-46.png',
                    imageDevice: 'https://www.datocms-assets.com/106122/1696856417-group-90-1.png',
                    buttonText: 'Iniziamo!'
                }}
            />
            {explenation_Progettista &&

                <Box
                    marginX={['18px', '18px', 20]}
                    mb={'520px'}
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

                </Box>
            }
            <NonHaiTrovatoQuelloCheCercavi />


        </>

    )
}

export default index