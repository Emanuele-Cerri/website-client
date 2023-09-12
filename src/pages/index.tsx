import TEST_TESTO from '@/lib/apollo/dato_CMS/queries/getButtonTest';
import GET_EXPLENATION_CARDS from '@/lib/apollo/dato_CMS/queries/getExplenationCards';
import { useQuery } from '@apollo/client'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Image, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import ExplenationCard, { ExplenationCardInterface } from '../../components/molecules/ExplenationCard';
import { TIPOLOGIE_DI_LAVORO, WORK_TIPOLOGY } from '../../components/mooks/tipologieDiLavoro';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ComponentLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box
            className='mt-[64px] md:mt-[280px] mb-[40px] md:mb-[32px] lg:w-7/12 mx-auto'
        >
            {children}
        </Box>
    )
}

const ComponentTitle: FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
    return (<Box
        display={'grid'}
        gap={'24px'}
        mx={['24px', '24px', 0]}
        textAlign={['start', 'start', 'center']}
    >
        <Text
            textStyle={['h3', 'h3', 'h1']}
            fontWeight={'700'}
        >
            {title}
        </Text>
        <hr className="hidden md:flex w-[270px] mx-auto h-[1px] my-[24px] bg-[#FCB900] border-0 " />
        <Text
            textStyle={'h5'}
            fontWeight={'400'}
        >
            {subtitle}
        </Text>
    </Box>)
}


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
        <Box className='min-h-[150vh] text-center mb-[64px]'


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

                <Box
                    className='hidden md:block'
                >
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

                <Box
                    className='block md:hidden my-[72px]'
                >
                    <Accordion allowMultiple
                        display={'block'}
                    >
                        {tipologieGara?.data?.explenationCardComponent.explenationCard &&
                            tipologieGara?.data?.explenationCardComponent.explenationCard.map((card: ExplenationCardInterface, index: number) => {
                                return (
                                    <AccordionItem
                                        bg={'warning20'}
                                        key={index}
                                        border={0}
                                        mb={'32px'}
                                    >

                                        <AccordionButton
                                            padding={'20px'}
                                            justifyContent={'space-between'}
                                            _hover={{
                                                bg: 'warning20',
                                            }}
                                        >
                                            <Box
                                                className='flex md:hidden'
                                                borderRadius={'full'}
                                                h={'40px'}
                                                bg={'warning20'}

                                                width={'40px'}
                                            >
                                                <Box
                                                    m={'auto'}
                                                    dangerouslySetInnerHTML={{ __html: card.icon }}
                                                ></Box>
                                            </Box>
                                            <Box
                                                textStyle={'h4'}
                                                fontWeight={'700'}
                                                mx={'auto'}
                                                ml={1}
                                            >
                                                {card.titolo}
                                            </Box>
                                            <AccordionIcon
                                                w={8} h={8}
                                                color={'pressed'}
                                            />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Text
                                                textStyle={'h5'}
                                                textTransform={'uppercase'}
                                                mb={'20px'}
                                                fontWeight={'semibold'}
                                            >
                                                {card.sottotitolo}
                                            </Text>
                                            <Text
                                                fontWeight={'400'}
                                                textStyle={'h6'}
                                            >
                                                {card.descrizione}
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>)
                            })
                        }
                    </Accordion>
                </Box>

            </Box>
            <Box
                className='md:hidden '
            >
                <Button
                    className='flex justify-center'
                    variant={'tertiaryPressed'}
                    border={'1px'}
                    borderColor={'pressed'}
                >
                    Scopri di più
                </Button>
            </Box>
            <ComponentLayout>
                <ComponentTitle title='Sei un’ impresa? Trova le gare in modo rapido, trasparente, su misura per la tua impresa' subtitle='Skimming raccoglie e mostra le gare pubblicate raccogliendole in base alla tipologia di lavoro. Scegli la categoria migliore per te e inizia il tuo prossimo progetto.' />
            </ComponentLayout>
            <Box
                className="hidden md:grid grid-cols-5 justify-between gap-[22px] bg-[url('https://www.datocms-assets.com/106122/1694505191-home-image-2.png')]"
                height={'382px'}
                px={10}
            >
                {TIPOLOGIE_DI_LAVORO.map((work: WORK_TIPOLOGY, index: number) => {
                    return (
                        <Box
                            my={'auto'}
                            key={index}
                            borderRadius={'8px'}
                            padding={'24px'}
                            textAlign={'center'}
                            zIndex={10}
                            bg={'white'}
                            style={{
                                boxShadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
                            }
                            }
                        >
                            <Box
                                borderRadius={'full'}
                                h={'80px'}
                                w={'80px'}
                                bg={'warning20'}
                                mx={'auto'}
                                mb={'48px'}
                                display={'flex'}
                            >
                                <Box
                                    m={'auto'}
                                    dangerouslySetInnerHTML={{ __html: work.bigIcon }}
                                ></Box>
                            </Box>
                            <Text
                                textStyle={'h4'}
                                fontWeight={'700'}
                            >
                                {work.title}
                            </Text>
                        </Box>
                    )
                })}
            </Box>
            <Box
                className="md:hidden justify-between gap-[24px]"
                px={10}
            >
                {TIPOLOGIE_DI_LAVORO.map((work: WORK_TIPOLOGY, index: number) => {
                    return (
                        <Box
                            my={'auto'}
                            key={index}
                            borderRadius={'8px'}
                            padding={'24px'}
                            textAlign={'center'}
                            zIndex={10}
                            bg={'white'}
                            style={{
                                boxShadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
                            }
                            }
                        >
                            <LazyLoadImage
                                alt={}

                             />
                            <Box
                                borderRadius={'full'}
                                h={'80px'}
                                w={'80px'}
                                bg={'warning20'}
                                mx={'auto'}
                                mb={'48px'}
                                display={'flex'}
                            >
                                <Box
                                    m={'auto'}
                                    dangerouslySetInnerHTML={{ __html: work.bigIcon }}
                                ></Box>
                            </Box>
                            <Text
                                textStyle={'h4'}
                                fontWeight={'700'}
                            >
                                {work.title}
                            </Text>
                        </Box>
                    )
                })}
            </Box>
        </Box >

    )
}

export default index
