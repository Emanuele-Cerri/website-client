import { PricingSchema } from '@/interfaces/pricing'
import { Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

const FeatureRow: FC<{ element: PricingSchema }> = ({ element }) => {

    return (
        <Box
            borderBottomWidth={'1px'}
            borderColor={'blueGray'}
            py={'20px'}
        >
            <Box
                width={'full'}
                className='grid grid-cols-4 gap-[15px]'
            >
                <Text
                    textStyle={'h5'}
                    color={'dark'}
                    fontWeight={'600'}
                >
                    {element.title}
                </Text>
                {element.isIncluded.map((element, index: number) => {
                    return (
                        <Box
                            borderRadius={'full'}
                            p={'3px'}
                            bg={'success30'}
                            key={index}
                            width={'fit-content'}
                            className={`${element === true ? 'visible' : 'invisible'} ml-[15px]`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.4001 5.20001L7.6001 14L3.6001 10" stroke="#1DB954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default FeatureRow