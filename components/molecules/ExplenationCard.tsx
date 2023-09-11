import { Box, Button, Center, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

export interface ExplenationCardInterface {
    titolo: string,
    sottotitolo: string,
    descrizione: string,
    icon: any,
    bottone?: {
        text: string,
        icon: any
    }[]
}

const ExplenationCard: FC<{ card: ExplenationCardInterface, background: string }> = ({ card, background }) => {

    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            width={['', '', 'full']}
            bg={['white', 'white', background]}

        >
            <Box
                className='flex md:hidden'
                borderRadius={'full'}
                h={'40px'}
                bg={'warning20'}
                mx={'auto'}
                width={'40px'}
            >
                <Box
                    m={'auto'}
                    dangerouslySetInnerHTML={{ __html: card.icon }}
                ></Box>
            </Box>

            <Box
                p={[0, 0, '24px']}
                gap={[0, 0, '24px']}
                display={'grid'}
                width={'fit-content'}
                pl={[3, 3, '24px']}
                textAlign={['start', 'start', 'center']}
            >
                <Box
                    className='hidden md:flex'
                    borderRadius={'full'}
                    h={'40px'}
                    w={'40px'}
                    bg={'warning20'}
                    mx={'auto'}
                >
                    <Box
                        m={'auto'}
                        dangerouslySetInnerHTML={{ __html: card.icon }}
                    ></Box>
                </Box>



                <Box
                    display={'grid'}
                    gap={'12px'}
                >
                    <Text
                        textStyle={'h3'}
                        fontWeight={'700'}
                    >
                        {card.titolo}
                    </Text>
                    <hr className="hidden md:flex w-[270px] mx-auto h-[1px] bg-[#FCB900] border-0 " />
                    <Text
                        textStyle={'h5'}
                        fontWeight={'600'}
                        textTransform={'uppercase'}
                        className='hidden md:flex'
                    >
                        {card.sottotitolo}
                    </Text>
                </Box>

                <Text
                    textStyle={'h6'}
                    fontWeight={'400'}
                >
                    {card.descrizione}
                </Text>
                {card?.bottone && card?.bottone?.length > 0 &&
                    <Box
                        display={'flex'}
                    >
                        <Button
                            variant={'tertiaryPressed'}
                            size={'sm'}
                            mx={[0, 0, 'auto']}
                            mt={['12px', '12px', 0]}
                            width={'fit-content'}
                            rightIcon={<Box
                                mx={'auto'}
                                dangerouslySetInnerHTML={{ __html: card.bottone[0].icon }}
                            ></Box>}
                        >
                            {card.bottone[0].text}
                        </Button>
                    </Box>

                }
            </Box>
        </Box >

    )
}

export default ExplenationCard