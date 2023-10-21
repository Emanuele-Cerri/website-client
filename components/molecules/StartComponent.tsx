import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import FadeInWhenVisible from '../atoms/FadeInWhenVisible'

type Props = {
    titolo: any,
    sottotitolo: string,
    buttonText: String,
    immagineDesktop: string,
    imageDevice: string
}

const StartComponent: React.FC<{ element: Props }> = ({ element }) => {
    return (
        <FadeInWhenVisible>
            <Box
                className='gap-[30px] lg:flex lg:justify-between  mx-auto lg:mt-[160px] mb-[260px] lg:mb-[220px] h-[70vh] sm:h-[90vh]'
                px={['0', '0', '0px', 20]}

            >
                <Image
                    alt={''}
                    src={element.imageDevice}
                    objectFit={"cover"}
                    className='relative sm:h-[32vh] lg:hidden w-full'
                />

                <Box
                    className='w-full lg:w-6/12 lg:text-start text-center  my-auto px-[20px] mt-[80px] lg:mt-[0px]'
                >
                    <Text
                        textStyle={['h2', 'h2', 'h1']}
                        fontWeight={'700'}
                        mb={['16px', '16px', '40px']}
                        dangerouslySetInnerHTML={{ __html: element.titolo }}
                    >

                    </Text>
                    <Text
                        textStyle={['h5', 'h5', 'h5']}
                        fontWeight={'500'}
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
                    className='hidden lg:flex lg:w-5/12 h-fit '
                />


            </Box>
        </FadeInWhenVisible>

    )
}

export default StartComponent