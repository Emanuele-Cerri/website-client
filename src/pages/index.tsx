import TEST_TESTO from '@/lib/apollo/dato_CMS/queries/getButtonTest';
import GET_EXPLENATION_CARDS from '@/lib/apollo/dato_CMS/queries/getExplenationCards';
import { useQuery } from '@apollo/client'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ExplenationCard, { ExplenationCardInterface } from '../../components/molecules/ExplenationCard';




const index = () => {
    const { loading, error, data } = useQuery(GET_EXPLENATION_CARDS, {
        context: {
            clientName: 'DATO_CMS_LINK',
        },
        variables: {
            title: 'Come_funziona_una_gara'
        }
    });
    const tipologieGara = useQuery(GET_EXPLENATION_CARDS, {
        context: {
            clientName: 'DATO_CMS_LINK',
        },
        variables: {
            title: 'Tipologie_gara'
        }
    });
    console.log(data?.explenationCardComponent.explenationCard)




    return (
        <Box className='min-h-[150vh] text-center '


        >
            {/* {
                data ?
                    <Button
                        //colorScheme='cyan'
                        variant={'primary'}
                    >{data?.testtesto?.buttonTitle}</Button> :
                    null
            } */}

            <Box position="relative">
                <Image
                    src="https://www.datocms-assets.com/106122/1694363206-copertina_home.png"
                    loading="lazy"
                    height={"45vw"}
                    width={"full"}
                    objectFit={"cover"}
                />
                <Image
                    src={
                        'https://www.datocms-assets.com/106122/1694366981-home-slide-1.png'
                    } loading="lazy"
                    width={"90vw"}
                    objectFit={"fill"}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </Box>
            <Box
                textAlign={['start', 'start', 'center']}
                width={['', '', 'full']}
                mt={['50px', '50px', '64px']}
                mb={['30px', '30px', '64px']}
                mx={['24px', '24px', 0]}
            >
                <Text
                    textStyle={['h3', 'h3', 'h1']}
                    color={'dark'}
                    fontWeight={'700'}
                >
                    Sei un professionista in cerca di un’ impresa?
                </Text>
                <hr className="hidden md:flex w-[270px] mx-auto h-[1px] my-[24px] bg-[#FCB900] border-0 " />
                <Text
                    textStyle={['h6', 'h6', 'h3']}
                    color={'dark'}
                    fontWeight={['400', '400', '700']}
                    className='hidden md:block'
                >
                    Crea una nuova gara con Skimming
                </Text>
                <Text
                    textStyle={['h6', 'h6', 'h3']}
                    color={'dark'}
                    mt={'16px'}
                    fontWeight={['400', '400', '700']}
                    className='flex md:hidden'
                >
                    Skimming ti aiuta a trovare le imprese più adatte a realizzare i tuoi progetti, filtrandole per tipologia, prezzo e qualità
                </Text>
                {data?.explenationCardComponent.explenationCard &&
                    <Box
                        marginY={[12, 16, 20]}
                        marginX={[0, 0, 20]}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]'
                    >
                        {data?.explenationCardComponent.explenationCard.map((card: ExplenationCardInterface) => <ExplenationCard card={card} background={'#FFF9EA'} />)
                        }
                    </Box>
                }
            </Box>
            <Button
                variant={'primary'}
                fontWeight={'700'}
                size={['md', 'md', 'sm']}
                paddingX={[12, 12, 20]}
            >
                Scopri l’esperienza
            </Button>
            <hr className="hidden md:flex w-[270px] mx-auto h-[1px] my-[100px] bg-[#FCB900] border-0 " />
            <Box
                textAlign={['start', 'start', 'center']}
                width={['', '', 'full']}
                mt={['45px', '45px', '64px']}
                mb={['30px', '30px', '64px']}
                mx={['24px', '24px', 0]}
            >
                <Text
                    textStyle={'h3'}
                    color={'dark'}
                    fontWeight={'700'}
                >
                    Scegli l’opzione migliore per creare la tua gara
                </Text>
                <Text
                    textStyle={['h6', 'h6', 'h3']}
                    color={'dark'}
                    mt={'16px'}
                    fontWeight={['400', '400', '700']}
                    className='flex md:hidden'
                >
                    In base alla tua esprienza e alla tua confidenza con gli strumenti del settore, Skimming ti offre diverse soluzioni, scegli quella su misura per te.                </Text>
                {tipologieGara?.data?.explenationCardComponent.explenationCard &&
                    <Box
                        marginY={[12, 16, 20]}
                        marginX={[0, 0, 20]}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]'
                    >
                        {tipologieGara?.data?.explenationCardComponent.explenationCard.map((card: ExplenationCardInterface) => <ExplenationCard card={card} background={'white'} />)
                        }
                    </Box>
                }
            </Box>

        </Box >

    )
}

export default index
