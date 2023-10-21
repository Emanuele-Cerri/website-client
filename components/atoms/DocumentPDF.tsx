import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { FC } from 'react'

const DocumentPDF: FC<{ title: string, kb: string, src: string }> = ({ title, kb, src }) => {
    return (
        <Link
            href={src}
            target='_blank'
        >
            <Box
                borderWidth={'1px'}
                borderRadius={'4px'}
                borderColor={'blueGray'}
                minW={['80vw', '80vw', '80vw', '320px']}
                py={'5px'}
                px={'15px'}
                display={'flex'}
                gap={'10px'}
                cursor={'pointer'}
                _active={{
                    transform: 'scale(0.99)',
                }}
            >
                <Box
                    my={'auto'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M13 2.12598H6C5.46957 2.12598 4.96086 2.33669 4.58579 2.71176C4.21071 3.08684 4 3.59554 4 4.12598V20.126C4 20.6564 4.21071 21.1651 4.58579 21.5402C4.96086 21.9153 5.46957 22.126 6 22.126H18C18.5304 22.126 19.0391 21.9153 19.4142 21.5402C19.7893 21.1651 20 20.6564 20 20.126V9.12598M13 2.12598L20 9.12598M13 2.12598V9.12598H20" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
                <Box>
                    <Text
                        textStyle={'h5'}
                        fontWeight={'700'}
                        color={'pressed'}
                    >
                        {title}
                    </Text>
                    <Text
                        textStyle={'h7'}
                        fontWeight={'400'}
                        color={'darkGrey'}
                    >
                        {kb}
                    </Text>
                </Box>
            </Box>
        </Link>

    )
}

export default DocumentPDF