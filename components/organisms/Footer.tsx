import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { ReactNode, memo } from 'react'
import { FOOTER_INFORMATION } from '../mooks/footerInformations'

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'semibold'} textStyle={'h5'} mb={2}
            color={'base'}
        >
            {children}
        </Text>
    )
}

const Footer = () => {
    return (
        <Box
            bg={'dark'}
            color={'white'}
            p={[4, 10, 10]}
        >
            <Box
                display={['grid', 'grid', 'grid', 'flex']}
                gap={[10, 10, 10, 0]}
                justifyContent={'space-between'}

                pb={8}
            >
                <Box
                    width={['full', '380px']}
                    textAlign={'justify'}
                >
                    <img
                        className='h-[94px] w-[94px]'
                        src='https://www.datocms-assets.com/106122/1694361804-screenshot-2023-08-10-alle-19-53-1-1.png'
                    />
                    <Text
                        textStyle={'h4'}
                        fontWeight={'bold'}
                        mt={6}
                    >
                        SKIMMING BPE
                    </Text>
                    <Text
                        textStyle={'h6'}
                        mt={4}
                    >
                        Skimming è la piattaforma online, dedicata al patrimonio immobiliare, che mette in contatto domanda e offerta nel campo edile. Architetti, Geometri, Ingegneri e privati possono richiedere preventivi, fornendo descrizione, foto e computo metrico dettagliato. Le Imprese possono partecipare alle Gare e acquisire nuove ed interessanti opportunità di lavoro.
                    </Text>
                </Box>
                <SimpleGrid columns={{ base: 2, sm: 2, md: 3 }} spacingY={8} spacingX={24}>

                    {FOOTER_INFORMATION.map((gridElement, index) => (
                        <Stack align={'flex-start'} key={index} gap={[2, 2, 5]}>
                            <ListHeader>{gridElement.listHeader}</ListHeader>
                            <Box display={'grid'}
                                gap={3}
                            >
                                {gridElement.links.map((link, LinkIndex) => (
                                    <Link href={link.link}
                                        key={LinkIndex}
                                    >
                                        <Text
                                            textStyle={'h5'}
                                            fontWeight={'semibold'}
                                        >
                                            {link.title}

                                        </Text>
                                    </Link>
                                ))}
                            </Box>


                        </Stack>

                    ))}




                </SimpleGrid>


            </Box >
            <hr className="my-6 border-gray-200 sm:mx-auto" />
            <Box
                display={['grid', 'grid', 'grid', 'flex']}
                gap={2}
                justifyContent={['space-between']}
                mt={10}
                color={'white'}
            >
                <Box>
                    <Text
                        textStyle={'h4'}
                        fontWeight={'bold'}
                        mt={6}
                    >
                        Dai vita a nuovi progetti con Skimming BPE
                    </Text>
                    <Text
                        textStyle={'h6'}
                        mt={4}
                        fontWeight={'thin'}
                    >
                        Gestisci e partecipa agli appalti in modo rapido e trasparente
                    </Text>
                </Box>

                <Text
                    textStyle={'h6'}
                    fontWeight={'thin'}
                    className='my-auto mb-0'
                >
                    © 2020 SKIMMING BPE S.R.L. | P.1. 11171770966
                </Text>
            </Box>
        </Box>


    )
}

export default memo(Footer)