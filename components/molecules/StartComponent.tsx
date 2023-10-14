import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    titolo: string,
    sottotitolo: string,
    buttonText: String,
    immagineDesktop: string,
    imageDevice: string
}

const StartComponent: React.FC<{ element: Props }> = ({ element }) => {
    return (
        <Box
            className='grid gap-[30px] lg:flex lg:justify-between  mx-auto lg:mt-[160px] mb-[260px] lg:mb-[220px]'
            px={['0', '0', 20]}

        >
            <Image
                alt={''}
                src={element.imageDevice}
                objectFit={"cover"}
                className='relative lg:hidden w-full'
            />

            <Box
                className='w-full lg:w-5/12 lg:text-start text-center  my-auto'
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
                <hr className="w-[270px] lg:hidden mx-auto my-[24px] bg-[#FCB900] h-[1px]" />
                <Button
                    variant={'primary'}
                    fontWeight={'700'}
                    px={5}
                    size={'md'}
                    className='mt-[20px] lg:mt-[40px]'
                >
                    {element.buttonText}
                </Button>

            </Box>
            <Image
                alt={''}
                src={element.immagineDesktop}
                objectFit={"fill"}
                className='hidden lg:flex w-1/2'
            />


        </Box>
    )
}

export default StartComponent