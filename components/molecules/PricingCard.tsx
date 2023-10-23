import { PricingSchema, PricingTypology } from '@/interfaces/pricing'
import { Box, Button, Text } from '@chakra-ui/react'
import React, { FC, useEffect, useState } from 'react'

const PricingCard: FC<{ element: PricingTypology, index: number, pricingSchema: PricingSchema[] }> = ({ element, index, pricingSchema }) => {


    const [features, setFeatures] = useState<string[]>()

    useEffect(() => {
        const resultArray = [];

        for (let i = 0; i < pricingSchema.length; i++) {
            if (pricingSchema[i].isIncluded[index]) {
                resultArray.push(pricingSchema[i].title);
            }
        }
        console.log(resultArray);

        setFeatures(resultArray)
    }, [element])



    return (
        <Box>
            <Box
                bg={'hover'}
                color={'white'}
                textStyle={'h6'}
                fontWeight={'700'}
                width={'fit-content'}
                px={'6px'}
                py={'1px'}
                mb={'10px'}
                borderRadius={'2px'}
                className={element.reccomended ? 'visible' : 'invisible'}
            >
                Popolare
            </Box>
            <Box
                borderRadius={'8px'}
                p={'20px'}
                display={'grid'}
                gap={'32px'}
                bg={element.reccomended ? 'warning20' : 'white'}
                borderWidth={'2px'}
                borderColor={element.reccomended ? 'hover' : 'blueGray'}
            >
                <Box>
                    <Text
                        textStyle={['h3', 'h3', 'h3', 'hero']}
                        color={'hover'}
                        fontWeight={'700'}
                    >
                        {element.title}
                    </Text>
                    <Text
                        textStyle={['h5', 'h5', 'h5', 'h5']}
                        color={'dark'}
                        fontWeight={'400'}
                    >
                        {element.description}
                    </Text>
                </Box>
                <Box
                    display={'flex'}
                    gap={'16px'}
                >
                    {element.price.length <= 4 && <svg
                        className='mt-[13px]'
                        xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M18.6667 28C15.6074 28 12.8852 27.1315 10.5 25.3944C8.11481 23.6574 6.42963 21.4148 5.44444 18.6667H0V15.5556H4.74444C4.66667 14.9333 4.63452 14.3562 4.648 13.8242C4.66148 13.2922 4.69363 12.8323 4.74444 12.4444H0V9.33333H5.44444C6.42963 6.58518 8.11481 4.34259 10.5 2.60556C12.8852 0.868519 15.6074 0 18.6667 0C20.4556 0 22.1475 0.317852 23.7424 0.953555C25.3374 1.58926 26.7566 2.464 28 3.57778L25.7833 5.75555C24.8241 4.92592 23.7419 4.27778 22.5369 3.81111C21.3319 3.34444 20.0418 3.11111 18.6667 3.11111C16.463 3.11111 14.4926 3.68822 12.7556 4.84244C11.0185 5.99667 9.70926 7.49363 8.82778 9.33333H18.6667V12.4444H7.89444C7.79074 13.1444 7.75185 13.7604 7.77778 14.2924C7.8037 14.8244 7.84259 15.2455 7.89444 15.5556H18.6667V18.6667H8.82778C9.70926 20.5074 11.0185 22.0049 12.7556 23.1591C14.4926 24.3133 16.463 24.8899 18.6667 24.8889C20.0407 24.8889 21.3308 24.6556 22.5369 24.1889C23.743 23.7222 24.8251 23.0741 25.7833 22.2444L28 24.4222C26.7556 25.537 25.3359 26.4123 23.7409 27.048C22.1459 27.6837 20.4545 28.001 18.6667 28Z" fill="#FFA500" />
                    </svg>}
                    <Text
                        fontSize={element.price.length > 4 ? '38px' : '72px'}
                        lineHeight={'72px'}
                        fontWeight={'700'}
                        color={'dark'}
                    >
                        {element.price}
                    </Text>
                </Box>
                <Button
                    variant={'primary'}
                    size={'md'}
                    fontWeight={'700'}
                >
                    {element.buttonTitle}
                </Button>
                <Box
                    className='grid gap-[32px] lg:hidden'
                >
                    {features && features.map((feature, index) => (
                        <Box
                            className='w-full flex gap-[16px]'
                            key={index}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M23.3332 7L10.4998 19.8333L4.6665 14" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <Text
                                textStyle={'h5'}
                                fontWeight={'600'}
                            >
                                {feature}
                            </Text>
                        </Box>
                    ))}
                </Box>

            </Box>
        </Box>

    )
}

export default PricingCard