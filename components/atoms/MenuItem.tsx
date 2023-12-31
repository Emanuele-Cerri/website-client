import { Box, Text } from '@chakra-ui/react'
import { NavArrowRight, Restart } from 'iconoir-react'
import React, { FC } from 'react'
import { Element, Servizio } from '../mooks/servizi'
import { useRouter } from 'next/router'

const MenuItem: FC<{ servizio: Servizio | Element, HandleMouseEnterEvent: any, link: string | null }> = ({ servizio, HandleMouseEnterEvent, link }) => {
    const router = useRouter()
    return (
        <Box
            _hover={{
                bg: 'warning30'
            }}
            cursor={'pointer'}
            width={'fit-content'}
            display={'flex'}
            gap={4}
            px={5}
            py={4}
            onClick={() => {
                if (!link) return

                router.push(link)
            }}
            onMouseEnter={() => {
                HandleMouseEnterEvent()
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M1 3.99995V9.99995M1 9.99995H7M1 9.99995L5.64 5.63995C7.02091 4.26137 8.81245 3.36892 10.7447 3.09707C12.6769 2.82521 14.6451 3.18868 16.3528 4.13271C18.0605 5.07674 19.4152 6.55019 20.2126 8.33105C21.0101 10.1119 21.2072 12.1037 20.7742 14.0063C20.3413 15.9089 19.3017 17.6193 17.8121 18.8797C16.3226 20.1401 14.4637 20.8823 12.5157 20.9944C10.5677 21.1065 8.63598 20.5825 7.01166 19.5013C5.38734 18.4201 4.15839 16.8403 3.51 14.9999" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Box
                display={'grid'}
                gap={'4px'}
            >
                <Text
                    fontWeight={'semibold'}
                    textStyle={'h5'}
                    color={'dark'}
                >
                    {servizio.title}
                </Text>
                <Text
                    fontWeight={'light'}
                    textStyle={'h6'}
                    color={'darkGrey'}

                >
                    {servizio.subtitle}
                </Text>
            </Box>
            <svg
                className='my-auto'
                xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M9 18.5L15 12.5L9 6.5" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Box>
    )
}

export default MenuItem