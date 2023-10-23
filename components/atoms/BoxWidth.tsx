import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'

const BoxWidth: FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <Box
            //marginX={['18px', '18px', '18px', '100px', '120px']}
            className={`${className ? className : ''} mx-[18px] lg:mx-[60px] xl:mx-[80px] 2xl-[120px]`}
        >
            {children}
        </Box>
    )
}

export default BoxWidth