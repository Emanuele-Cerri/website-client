import TEST_TESTO from '@/lib/apollo/dato_CMS/queries/getButtonTest';
import { useQuery } from '@apollo/client'
import { Button } from '@chakra-ui/react'
import React from 'react'

const index = () => {
    const { loading, error, data } = useQuery(TEST_TESTO, {
        context: {
            clientName: 'DATO_CMS_LINK',
        }
    });
    console.log(data);

    return (
        <>
            {
                data ?
                    <Button
                        //colorScheme='cyan'
                        variant={'primary'}
                    >{data?.testtesto?.buttonTitle}</Button> :
                    null
            }
        </>

    )
}

export default index