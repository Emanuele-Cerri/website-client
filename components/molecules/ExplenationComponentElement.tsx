import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import FadeInWhenVisible from '../atoms/FadeInWhenVisible'

export interface ExplenationComponentElementInterface {
    titolo: string,
    sottotitolo?: string,
    immagineDesktop: {
        url: string
    },
    immagineDevice: {
        url: string
    },
    button?: {
        text: string,
        icon: any
    }[]
}

const ExplenationComponentElement: FC<{ element: ExplenationComponentElementInterface, index: number }> = ({ element, index }) => {
    return (
        <FadeInWhenVisible
            initialStateY='4%'
        >
            <Box
                className='grid gap-[30px] lg:flex lg:justify-between  mx-auto'
            >

                {index % 2 !== 0 && <Image
                    alt={''}
                    src={element.immagineDesktop.url}
                    className='hidden lg:flex w-6/12 h-fit'
                />}
                {index % 2 === 0 && <Image
                    alt={''}
                    src={element.immagineDevice?.url}
                    className='lg:hidden w-full'
                />}
                <Box
                    className='w-full lg:w-5/12 text-start my-auto'
                >
                    <Box
                        textStyle={['h3', 'h3', 'h1']}
                        fontWeight={'700'}
                        mb={['16px', '16px', '40px']}
                        dangerouslySetInnerHTML={{ __html: element.titolo }}
                    >

                    </Box>
                    <Text
                        textStyle={['h6', 'h6', 'h5']}
                        fontWeight={'400'}
                    >
                        {element.sottotitolo}
                    </Text>
                    {element?.button?.[0] &&
                        <Box
                            className='hidden lg:flex'

                        >
                            <Button
                                variant={'primary'}
                                fontWeight={'700'}
                                mx={'auto'}
                                width={['80vw', '80vw', 'fit-content']}
                                px={20}
                                size={'md'}
                                mt={'40px'}
                            >
                                {element.button[0].text}
                            </Button>
                        </Box>
                    }
                </Box>
                {index % 2 === 0 && <Image
                    alt={''}
                    src={element.immagineDesktop.url}
                    className='hidden lg:flex w-6/12 h-fit'
                />}
                {index % 2 !== 0 && <Image
                    alt={''}
                    src={element.immagineDevice?.url}
                    className='lg:hidden w-full'
                />}

            </Box>
        </FadeInWhenVisible>

    )
}

export default ExplenationComponentElement