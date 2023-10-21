import GET_EXPLENATION_CARDS from '@/lib/apollo/dato_CMS/queries/getExplenationCards';
import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import ExplenationCard, { ExplenationCardInterface } from '../../components/molecules/ExplenationCard';
import { initApollo } from '@/lib/apollo';
import GET_EXPLENATION_COMPONENTS_BY_TITLE from '@/lib/apollo/dato_CMS/queries/getExplenationComponentsByTitle';
import ExplenationComponentElement, { ExplenationComponentElementInterface } from '../../components/molecules/ExplenationComponentElement';
import CompileFormComponent from '../../components/molecules/CompileFormComponent';
import FadeInWhenVisible from '../../components/atoms/FadeInWhenVisible';
import BoxWidth from '../../components/atoms/BoxWidth';

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const apolloClient = initApollo();

    const tipologieGara = await apolloClient.query({
        query: GET_EXPLENATION_CARDS,
        context: {
            clientName: 'DATO_CMS_LINK',
        },
        variables: {
            title: 'Tipologie_gara',
        }
    });
    const perche_usare_skimming = await apolloClient.query({
        query: GET_EXPLENATION_CARDS,
        context: {
            clientName: 'DATO_CMS_LINK',
        },
        variables: {
            title: 'Perche_usare_skimming',
        }
    });

    const comeFunziona = await apolloClient.query({
        query: GET_EXPLENATION_COMPONENTS_BY_TITLE,
        context: {
            clientName: 'DATO_CMS_LINK',
        },
        variables: {
            title: 'HomePage_Come_Funziona'
        }
    });

    const assistenzaLegale = await apolloClient.query({
        query: GET_EXPLENATION_COMPONENTS_BY_TITLE,
        context: {
            clientName: 'DATO_CMS_LINK',
        },
        variables: {
            title: 'HomePage_Assistenza'
        }
    });

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            comeFunziona,
            tipologieGara,
            perche_usare_skimming,
            assistenzaLegale
        },
    }
}


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


    return (
        <Box
            display={'grid'}
            gap={'18px'}
            mx={['18px', '18px', 0]}
            textAlign={['start', 'start', 'center']}
        >
            <Text
                textStyle={['h3', 'h3', 'h1']}
                fontWeight={'700'}
            >
                {title}
            </Text>
            <hr className="hidden md:flex w-[270px] mx-auto h-[1px] my-[18px] bg-[#FCB900] border-0 " />
            <Text
                textStyle={'h5'}
                fontWeight={'400'}
            >
                {subtitle}
            </Text>
        </Box>)
}


const index: React.FC<{ comeFunziona: any, tipologieGara: any, perche_usare_skimming: any, assistenzaLegale: any }> = ({ comeFunziona, tipologieGara, perche_usare_skimming, assistenzaLegale }) => {



    return (
        <Box className='min-h-[150vh] text-center mb-[280px]'
        >

            <Box
                textAlign={'center'}
                mt={['30px', '30px', '80px']}
                mb={['30px', '30px', '80px']}

                display={'grid'}
                gap={['16px', '16px', '32px']}
            >
                <Box
                    textStyle={['h2', 'h2', 'hero']}
                    color={'gray700'}
                    fontWeight={'700'}
                    className='w-9/12 lg:w-full mx-auto'
                >
                    Le gare d’appalto private, <span
                        className='text-[#FCB900]'
                    >su misura per te</span>
                </Box>
                <Text
                    textStyle={['h6', 'h6', 'h5']}
                    color={['#718096', '#718096', 'dark']}
                    fontWeight={['400', '400', '600']}
                    className='w-11/12 lg:w-1/3 mx-auto '
                >
                    Skimming BPE è una piattaforma innovativa
                    che ti permette di creare e gestire gare d’appalto private in pochi click
                </Text>
                <Box
                    className=' lg:hidden mt-[32px] mb-[16px] '
                >
                    <FadeInWhenVisible>
                        <Image
                            src={
                                'https://www.datocms-assets.com/106122/1695480163-frame-76.png'
                            }
                            loading="lazy"
                            className='w-full lg:hidden'
                            mx={'auto'}
                        />
                    </FadeInWhenVisible>

                </Box>
                <Button
                    variant={'primary'}
                    fontWeight={'700'}
                    mx={'auto'}
                    width={['80vw', '80vw', 'fit-content']}
                    px={20}
                    size={'md'}
                >
                    Crea una gara
                </Button>

            </Box>
            <Box
                className='hidden lg:flex'
            >
                <FadeInWhenVisible>
                    <Image
                        src={
                            'https://www.datocms-assets.com/106122/1695478622-group-74.png'
                        }
                        loading="lazy"
                        className=' lg:w-10/12'
                        mx={'auto'}
                    />
                </FadeInWhenVisible>

            </Box>



            {comeFunziona?.data?.explenationComponentElement.explenationComponent &&
                <BoxWidth
                    className='grid gap-[260px] lg:gap-[220px] my-[220px]'
                >
                    {comeFunziona?.data?.explenationComponentElement.explenationComponent.map((element: ExplenationComponentElementInterface, index: number) => <ExplenationComponentElement element={element} key={index} index={index} />)
                    }
                </BoxWidth>

            }

            <Box
                textAlign={['start', 'start', 'center']}
                width={['', '', 'full']}
                mt={['45px', '45px', '64px']}
                mb={['30px', '30px', '64px']}
                px={['18px', '18px', 0]}
                pt={'80px'}
                pb={['80px', '80px', '20px']}
                bg={['info10', 'info10', 'info10']}
            >
                <Text
                    textStyle={'h3'}
                    color={'dark'}
                    fontWeight={'700'}
                    className='mb-[100px] lg:mb-[0px]'
                >
                    Scegli l’opzione migliore per creare la tua gara
                </Text>



                {tipologieGara?.data?.explenationCardComponent.explenationCard &&

                    <Box
                        marginY={[0, 0, 12]}
                        marginX={[0, 0, 20]}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[100px] lg:gap-[20px]'
                    >
                        {tipologieGara?.data?.explenationCardComponent.explenationCard.map((card: ExplenationCardInterface, index: number) => <ExplenationCard card={card} background={'transparent'} key={index} />)
                        }
                    </Box>

                }
                {/*  <Box
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
                </Box> */}

            </Box>

            {/* <ComponentLayout>
                <ComponentTitle title='Sei un’ impresa? Trova le gare in modo rapido, trasparente, su misura per la tua impresa' subtitle='Skimming raccoglie e mostra le gare pubblicate raccogliendole in base alla tipologia di lavoro. Scegli la categoria migliore per te e inizia il tuo prossimo progetto.' />
            </ComponentLayout>
            <Box
                className="hidden md:grid grid-cols-5 justify-between gap-[22px] bg-[url('https://www.datocms-assets.com/106122/1694505191-home-image-2.png')]"
                bg={'warning20'}
                height={'382px'}
                px={10}
            >
                {TIPOLOGIE_DI_LAVORO.map((work: WORK_TIPOLOGY, index: number) => {
                    return (
                        <Box
                            my={'auto'}
                            key={index}
                            borderRadius={'8px'}
                            padding={'18px'}
                            textAlign={'center'}
                            zIndex={10}
                            bg={'white'}
                            style={{
                                boxShadow: '0px 20px 18px -4px rgba(16, 24, 40, 0.08)',
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
            </Box> */}
            {/* <Box
                className="md:hidden grid gap-[18px]"
                px={'18px'}
            >
                {TIPOLOGIE_DI_LAVORO.map((work: WORK_TIPOLOGY, index: number) => {
                    return (
                        <Box
                            my={'auto'}
                            key={index}
                            borderRadius={'8px'}
                            textAlign={'center'}
                            zIndex={10}
                            bg={'white'}
                            border={'1px'}
                            width={'full'}
                            borderColor={'blueGray'}
                            style={{
                                boxShadow: '0px 20px 18px -4px rgba(16, 24, 40, 0.08)',
                            }}
                        >

                            <Image
                                alt={''}
                                src={work.imgSrc}
                                width={'100%'}
                                objectFit={"cover"}
                            />
                            <Box
                                display={'flex'}
                                gap={4}
                                padding={'12px'}
                            >
                                <Box
                                    borderRadius={'full'}
                                    mt={'12px'}
                                    h={'48px'}
                                    w={'48px'}
                                    bg={'warning20'}
                                    display={'flex'}
                                    my={'auto'}
                                >
                                    <Box
                                        m={'auto'}
                                        dangerouslySetInnerHTML={{ __html: work.smallIcon }}
                                    ></Box>
                                </Box>
                                <Text
                                    my={'auto'}

                                    textStyle={'h4'}
                                    fontWeight={'700'}
                                >
                                    {work.title}
                                </Text>
                            </Box>

                        </Box>
                    )
                })}
            </Box> */}
            <ComponentLayout>
                <ComponentTitle title='Perchè usare Skimming?' subtitle='Perché è tutto fatto in modo rapido, semplice ed efficiente; non hai più bisogno di alzare il telefono e contattare tutte le figure che ti servono per un determinato lavoro, crei il tuo cluster e al suo interno hai già tutte le figure che solitamente chiami, ti basterà creare il lavoro e loro riceveranno immediatamente una notifica e potranno presentarti il loro prezzo.' />
            </ComponentLayout>
            <Box
                className='mt-[18px]'
            >
                {perche_usare_skimming?.data?.explenationCardComponent.explenationCard &&
                    <BoxWidth
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-[20px] my-12 sm:my-16 md:my-20'
                    >
                        {perche_usare_skimming?.data?.explenationCardComponent.explenationCard.map((card: ExplenationCardInterface, index: number) => {
                            return (
                                <div key={index}>
                                    {index > 0 && <hr className="md:hidden w-[310px] mx-auto h-[1px] my-[48px] bg-[#FCB900] border-0 " />}
                                    <ExplenationCard card={card} background={'white'} iconWidth={'100px'} isHRHidden={true} />
                                </div>
                            )
                        })
                        }
                    </BoxWidth>
                }
            </Box>
            <ComponentLayout>
                <ComponentTitle title='Con Skimming non sei mai da solo' subtitle='lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo' />
            </ComponentLayout>
            <Box
                className='mt-[18px]'
            >
                {assistenzaLegale?.data?.explenationComponentElement.explenationComponent &&

                    <BoxWidth
                        className='grid gap-[260px] lg:gap-[220px] my-[220px]'
                    >
                        {assistenzaLegale?.data?.explenationComponentElement.explenationComponent.map((element: ExplenationComponentElementInterface, index: number) => <ExplenationComponentElement element={element} key={index} index={index} />)
                        }
                    </BoxWidth>

                }

            </Box>
            <Box
                className='flex justify-center mx-[18px] lg:w-10/12 lg:mx-auto gap-[210px] my-[200px]'
            >
                <CompileFormComponent />
            </Box>
        </Box >

    )
}

export default index
