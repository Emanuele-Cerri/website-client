import { Box, Button, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

const NonHaiTrovatoQuelloCheCercavi: FC<{ className?: string }> = ({ className }) => {
    return (
        <Box
            textAlign={'center'}
            className={className ? className : ''}
            mx={'20px'}
        >
            <Text
                textStyle={['h2', 'h2', 'hero']}
                fontWeight={'700'}
            >
                Non hai trovato quello che cercavi?
            </Text>
            <Text
                mt={['16px']}
                textStyle={['h6', 'h6', 'h4']}
                fontWeight={['400', '400', '700']}
                mb={['28px', '28px', '64px']}
                width={['fit-content', 'fit-content', '60vw', '50vw', '40vw']}
                mx={'auto'}
            >
                I nostri esperti sapranno guidarti alla scoperta di Skimming e delle sue potenzialità
            </Text>
            <Button
                variant={'primary'}
                fontWeight={'700'}
                width={['80vw', '80vw', 'fit-content']}
                px={20}
                size={'md'}
            >
                Contattaci
            </Button>
        </Box >
    )
}

export default NonHaiTrovatoQuelloCheCercavi