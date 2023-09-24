import { Box, Button, Center, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

export interface ExplenationCardInterface {
    titolo: string,
    sottotitolo?: string,
    descrizione: string,
    icon: any,
    bottone?: {
        text: string,
        icon: any
    }[]
}

const ExplenationCard: FC<{ card: ExplenationCardInterface, background: string, iconWidth?: string, isHRHidden?: boolean }> = ({ card, background, iconWidth, isHRHidden }) => {

    return (
        <Box
            display={['grid', 'grid', 'flex']}
            width={['', '', 'full']}
            textAlign={'center'}
            bg={[background, background, background]}
        >

            <Box
                p={[0, 0, '24px']}
                width={'fit-content'}
                pl={[3, 3, '24px']}
                display={'grid'}
                gap={['16px', '16px', '24px']}
            >
                <Box
                    className='flex'
                    borderRadius={'full'}
                    h={iconWidth ? iconWidth : '40px'}
                    w={iconWidth ? iconWidth : '40px'}

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
                    {!isHRHidden && <hr className=" w-[270px] mx-auto h-[1px] bg-[#FCB900] border-0 mb-[0px]  lg:mb-[24px]" />}
                    {card.sottotitolo && <Text
                        textStyle={'h5'}
                        fontWeight={'600'}
                        textTransform={'uppercase'}
                    >
                        {card.sottotitolo}
                    </Text>}
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
                            size={['sm', 'sm', 'md']}
                            fontWeight={'700'}
                            mx={'auto'}
                            mt={['12px', '12px', 0]}
                            width={'fit-content'}
                            bg={'transparent'}
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