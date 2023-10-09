import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ExplenationComponentElementInterface } from './ExplenationComponentElement'

const FormComponent: FC<{ title: string | JSX.Element, subtitle: string, buttonText: string, imageUrl: string }> = ({ title, subtitle, buttonText, imageUrl }) => {
    return (
        <Box
            className='grid gap-[10px] lg:gap-[30px] lg:flex lg:justify-between  mx-auto'
        >
            <Image
                alt={''}
                src={'https://www.datocms-assets.com/106122/1695547183-group-63-1.png'}
                className='lg:hidden w-full'
            />
            <Box
                className='w-full lg:w-5/12 text-start my-auto'
            >
                <Box
                    textStyle={['h3', 'h3', 'h1']}
                    fontWeight={'700'}
                    mb={['16px', '16px', '40px']}
                    dangerouslySetInnerHTML={{ __html: title }}
                >

                </Box>
                <Text
                    textStyle={['h6', 'h6', 'h5']}
                    fontWeight={'400'}
                >
                    {subtitle}
                </Text>

                <Box
                    className='hidden lg:flex'
                >
                    <Button
                        variant={'primary'}
                        fontWeight={'700'}
                        width={['80vw', '80vw', 'fit-content']}
                        px={20}
                        size={'md'}
                        mt={'40px'}
                    >
                        {buttonText}
                    </Button>
                </Box>

            </Box>
            <Image
                alt={''}
                src={imageUrl}
                objectFit={"fill"}
                className='hidden lg:flex w-1/2'
            />

            <Box
                className='lg:hidden'
            >
                <Button
                    variant={'primary'}
                    fontWeight={'700'}
                    width={['80vw', '80vw', 'fit-content']}
                    px={20}
                    size={'md'}
                    mt={'10px'}
                >
                    {buttonText}
                </Button>
            </Box>
        </Box>
    )
}

export default FormComponent