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
            <Restart
                width={20}
                height={20}
                className='mt-2'
            />
            <Box
                display={'grid'}
                gap={'4px'}
            >
                <Text
                    fontWeight={'semibold'}
                    fontSize={'h5'}
                    color={'dark'}
                >
                    {servizio.title}
                </Text>
                <Text
                    fontWeight={'light'}
                    fontSize={'h6'}
                    color={'darkGrey'}

                >
                    {servizio.subtitle}
                </Text>
            </Box>
            <NavArrowRight
                width={'24px'}
                height={'24px'}
                strokeWidth={1.7}
                color='#FCB900'
                className='my-auto'
            />
        </Box>
    )
}

export default MenuItem