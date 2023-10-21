import { Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import DocumentPDF from '../atoms/DocumentPDF'
import FadeInWhenVisible from '../atoms/FadeInWhenVisible'

const DocumentsComponent: FC<{ className?: string }> = ({ className }) => {
    return (
        <FadeInWhenVisible>
            <Box
                className={className ? className : ''}
                mx={['18px', '18px', 20]}
            >
                <Box
                    display={'grid'}
                    gap={'18px'}
                    mb={['25px', '25px', '25px', '55px']}
                    textAlign={['start', 'start', 'center']}

                >
                    <Text
                        textStyle={['h2', 'h2', 'h2', 'hero']}
                        fontWeight={'700'}
                    >
                        Vuoi saperne di più?
                    </Text>
                    <Text
                        textStyle={'h5'}
                        fontWeight={'400'}
                    >
                        scarica i documenti allegati
                    </Text>
                </Box>
                <Box
                    display={['grid', 'grid', 'grid', 'flex']}
                    gap={'20px'}
                    justifyContent={'space-between'}

                >
                    {[1, 2, 3].map((item, index) => (
                        <DocumentPDF
                            key={index}
                            title={'DocumentName.pdf'}
                            kb={'286kb'}
                            src={'https://www.datocms-assets.com/106122/1695551722-group-10.png'}
                        />
                    ))}
                </Box>
            </Box>
        </FadeInWhenVisible>


    )
}



export default DocumentsComponent