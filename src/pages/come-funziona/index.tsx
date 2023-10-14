import { initApollo } from '@/lib/apollo';
import GET_EXPLENATION_CARDS from '@/lib/apollo/dato_CMS/queries/getExplenationCards';
import { Box, Button, Image, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ExplenationCardInterface } from '../../../components/molecules/ExplenationCard';
import CompileFormComponent from '../../../components/molecules/CompileFormComponent';
import Link from 'next/link';

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const apolloClient = initApollo();
    const Come_funziona_profili = await apolloClient.query({
        query: GET_EXPLENATION_CARDS,
        context: {
            clientName: 'DATO_CMS_LINK',
        },
        variables: {
            title: 'Come_funziona_profili',
        }
    });

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            Come_funziona_profili: Come_funziona_profili.data.explenationCardComponent.explenationCard
        },
    }
}

const index: FC<{ Come_funziona_profili: ExplenationCardInterface[] }> = ({ Come_funziona_profili }) => {



    return (
        <>
            <Box
                className='
            my-10
            lg:my-0
            lg:bg-[url(https://www.datocms-assets.com/106122/1695816704-group-9-1.png)]
            lg:h-[30vh]
            flex
            '
                justifyContent={'center'}
                w={'full'}

            >
                <Box
                    my={'auto'}
                    textAlign={'center'}
                >
                    <Text
                        color={'white'}
                        textStyle={'hero'}
                        fontWeight={'700'}
                        className='hidden lg:grid mx-auto'
                    >
                        Come funziona Skimming?
                    </Text>
                    <Box
                        textStyle={['h2', 'h2']}
                        color={'gray700'}
                        fontWeight={'700'}
                        className='lg:hidden'
                    >
                        Scopri come funziona<br /><span
                            className='text-[#FCB900]'
                        >Skimming</span>
                    </Box>
                    <hr className=" w-[270px] mx-auto h-[1px] my-[24px] bg-[#FCB900] border-0 " />
                    <Text
                        className='text-[#151515] lg:text-white'
                        textStyle={['h5', 'h5', 'h5', 'h2']}
                        fontWeight={'700'}
                        mx={6}
                    >
                        Seleziona il tuo profilo e scopri cosa può fare il nostro prodotto per te
                    </Text>
                </Box>

            </Box>
            <Box

                justifyContent={'center'}
                mt={[10, 10, 20]}
                mb={[10, 10, 10, 36]}
                className='grid gap-10 lg:gap-20 lg:flex px-[20px] lg:px-0 w-full'
            >
                {Come_funziona_profili.map((card, index) => (
                    <Link
                        key={index}
                        href={card.redirectUrl}
                    >
                        <Box
                            textAlign={'center'}
                            borderRadius={'8px'}
                            borderWidth={'1px'}
                            borderColor={'blueGray'}
                            style={{
                                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                            }}
                            className='w-full lg:w-[280px] 2xl:w-[300px]'
                            cursor={'pointer'}
                            _active={{
                                transform: 'scale(0.99)',
                            }}
                        >
                            <Image
                                borderTopRadius={'8px'}
                                /* brightness-50 lg:brightness-100  */
                                className='hidden lg:grid mx-auto pt-[24px]'
                                height={'230px'}
                                objectFit={'fill'}
                                src={card.image?.url}
                            />
                            <Box
                                p={'24px'}
                                textAlign={'center'}
                            >
                                <Box
                                    className='flex lg:hidden'
                                    borderRadius={'full'}
                                    h={'40px'}
                                    w={'40px'}
                                    bg={'warning20'}
                                    mx={'auto'}
                                    mb={'10px'}
                                >
                                    <Box
                                        m={'auto'}
                                        dangerouslySetInnerHTML={{ __html: card.icon }}
                                    ></Box>
                                </Box>
                                <Text
                                    textStyle={'h3'}
                                    fontWeight={'700'}
                                    color={'dark'}
                                >
                                    {card.titolo}
                                </Text>
                                <hr className="w-[220px] h-[1px] my-[12px] bg-[#FCB900] mx-auto " />
                                <Text
                                    textStyle={'h6'}
                                    fontWeight={'400'}
                                    color={'dark'}
                                >
                                    {card.sottotitolo}
                                </Text>
                                <Box
                                    mt={'32px'}
                                    color={'pressed'}
                                    textStyle={'h5'}
                                    fontWeight={'600'}
                                >
                                    Scopri di più
                                </Box>
                            </Box>

                        </Box>
                    </Link>
                ))}

            </Box >
            <Box
                className='flex justify-center mx-[18px]  lg:hidden   mt-[100px] mb-[200px]'

            >
                <CompileFormComponent />

            </Box>
        </>
    )
}

export default index