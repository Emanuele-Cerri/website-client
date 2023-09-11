import TEST_TESTO from '@/lib/apollo/dato_CMS/queries/getButtonTest';
import { useQuery } from '@apollo/client'
import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'




const index = () => {
    /* const { loading, error, data } = useQuery(TEST_TESTO, {
        context: {
            clientName: 'DATO_CMS_LINK',
        }
    });
    console.log(data); */



    return (
        <Box className='h-[150vh]'>
            {/* {
                data ?
                    <Button
                        //colorScheme='cyan'
                        variant={'primary'}
                    >{data?.testtesto?.buttonTitle}</Button> :
                    null
            } */}

            <Box position="relative">
                <Image
                    src="https://www.datocms-assets.com/106122/1694363206-copertina_home.png"
                    loading="lazy"
                    height={"600px"}
                    width={"full"}
                    objectFit={"cover"}
                />
                <Image
                    src={
                        'https://www.datocms-assets.com/106122/1694366981-home-slide-1.png'
                    } loading="lazy"
                    height={"500px"}
                    objectFit={"cover"}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </Box>
        </Box >

    )
}

export default index
