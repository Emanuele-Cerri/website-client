import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CompileFormComponent = () => {
    return (
        <Box
            display={'flex'}
            className='justify-center lg:gap-32'
        >
            <Box
                className='lg:w-1/2 text-start my-auto grid gap-[20px]'
            >
                <Text
                    textStyle={['h3', 'h3', 'h1']}
                    fontWeight={'700'}
                >
                    Costruiamo qualcosa di bello insieme. Contatta i nostri esperti
                </Text>
                <hr className="w-[270px] lg:w-[535px] h-[1px] bg-[#FCB900] border-0 mb-[0px] " />
                <Text
                    textStyle={['h6', 'h6', 'h5']}
                    fontWeight={'400'}
                >
                    Fissa un appuntamento con il nostro team, ti guideremo passo passo alla scoperta di Skimming.
                </Text>
                <Button
                    variant={'primary'}
                    fontWeight={'700'}
                    px={[12, 12, 20]}
                    size={'md'}
                    width={'fit-content'}
                >
                    Compila il form
                </Button>
            </Box>
            <Image
                alt={''}
                src={'https://www.datocms-assets.com/106122/1695551722-group-10.png'}
                w={'280px'}
                className='hidden lg:flex w-1/2'
            />
        </Box>
    )
}

export default CompileFormComponent