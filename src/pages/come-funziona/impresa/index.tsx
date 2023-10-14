import { initApollo } from '@/lib/apollo';
import GET_EXPLENATION_COMPONENTS_BY_TITLE from '@/lib/apollo/dato_CMS/queries/getExplenationComponentsByTitle';
import React, { FC } from 'react'
import ExplenationComponentElement, { ExplenationComponentElementInterface } from '../../../../components/molecules/ExplenationComponentElement';
import { Box, Image } from '@chakra-ui/react';
import ExplenationCard from '../../../../components/molecules/ExplenationCard';
import FormComponent from '../../../../components/molecules/FormComponent';
import StartComponent from '../../../../components/molecules/StartComponent';
import NonHaiTrovatoQuelloCheCercavi from '../../../../components/molecules/NonHaiTrovatoQuelloCheCercavi';

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const apolloClient = initApollo();



    const explenation_Impresa = await apolloClient.query({
        query: GET_EXPLENATION_COMPONENTS_BY_TITLE,
        context: {
            clientName: 'DATO_CMS_LINK',
        },
        variables: {
            title: 'Explenation_Impresa'
        }
    });

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            explenation_Impresa: explenation_Impresa?.data?.explenationComponentElement.explenationComponent
        },
    }
}

const index: FC<{ explenation_Impresa: ExplenationComponentElementInterface[] }> = ({ explenation_Impresa }) => {

    return (
        <>
            <Image
                width={820}
                height={800}
                src={'https://www.datocms-assets.com/106122/1697277987-group-2.png'}
                alt='gru'
                className='hidden lg:flex absolute top-[100px] left-[80px] right-0 -z-10'
            ></Image>
            <StartComponent
                element={{
                    titolo: 'Ogni nuovo lavoro è una sfida, trova quella giusta per la tua impresa',
                    sottotitolo: 'Con Skimming trovi ogni giorno nuove gare d’appalto per far conoscere la tua azienda',
                    immagineDesktop: 'https://www.datocms-assets.com/106122/1696855194-group-73.png',
                    imageDevice: 'https://www.datocms-assets.com/106122/1696856365-group-94.png',
                    buttonText: 'Iniziamo!'
                }}
            />
            {explenation_Impresa &&

                <Box
                    marginX={['18px', '18px', 20]}
                    mb={'520px'}
                    className='grid gap-[260px] lg:gap-[220px] '

                >

                    {explenation_Impresa.map((element: ExplenationComponentElementInterface, index: number) => <ExplenationComponentElement element={element} key={index} index={index} />)
                    }
                    <FormComponent
                        title='Tutto inizia con una stretta di mano'
                        subtitle='Aggiudicati la gara e inizia i lavori.
                        Sei arrivato secondo? Nessun problema!
                        Ti offiramo un ristoro per la prossima gara!'
                        buttonText='Partecipa a una gara'
                        imageUrl='https://www.datocms-assets.com/106122/1695547167-group-63.png'
                    />
                    <FormComponent
                        title={'<span class="text-[#FCB900]">Subappalta</span> i tuoi lavori con i partner migliori'}
                        subtitle='Con Skimming per la tua impresa potrai gestire eventuali subappalti creando e gestendo una gara in completa trasparenza e autonomia. Invita i tuoi collaboratori o conosci nuovi partner per i tuoi progetti.'
                        buttonText='Crea una gara'
                        imageUrl='https://www.datocms-assets.com/106122/1696855770-group-41.png'
                    />


                </Box>
            }

            <NonHaiTrovatoQuelloCheCercavi />
        </>

    )
}

export default index