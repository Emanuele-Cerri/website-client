import { Box, Image, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

export interface ExplenationComponentElementInterface {
    titolo: string,
    sottotitolo?: string,
    immagineDesktop: {
        url: string
    },
    immagineDevice: {
        url: string
    },
    bottone?: {
        text: string,
        icon: any
    }[]
}

const ExplenationComponentElement: FC<{ element: ExplenationComponentElementInterface, index: number }> = ({ element, index }) => {
    console.log(element);

    return (
        <Box
            className='grid gap-[30px] lg:flex lg:justify-between  mx-auto'
        >

            {index % 2 !== 0 && <Image
                alt={''}
                objectFit={"fill"}
                src={element.immagineDesktop.url}
                className='hidden lg:flex w-1/2'
            />}
            <Box
                className='w-full lg:w-5/12 text-start my-auto'
            >
                <Text
                    textStyle={['h3', 'h3', 'h1']}
                    fontWeight={'700'}
                    mb={['16px', '16px', '40px']}
                >
                    {element.titolo}
                </Text>
                <Text
                    textStyle={['h6', 'h6', 'h5']}
                    fontWeight={'400'}
                >
                    {element.sottotitolo}
                </Text>
            </Box>
            {index % 2 === 0 && <Image
                alt={''}
                src={element.immagineDesktop.url}
                objectFit={"fill"}
                className='hidden lg:flex w-1/2'
            />}
            <Image
                alt={''}
                src={element.immagineDevice.url}
                className='lg:hidden w-full'
            />

        </Box>
    )
}

export default ExplenationComponentElement