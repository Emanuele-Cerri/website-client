import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'

const BoxWidth: FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <Box
            marginX={['18px', '18px', 20, '120px']}
            className={className ? className : ''}
        >
            {children}
        </Box>
    )
}

export default BoxWidth