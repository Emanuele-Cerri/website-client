import { Box, Text } from '@chakra-ui/react'
import React, { FC, useEffect, useState } from 'react'
import BoxWidth from '../../../components/atoms/BoxWidth'
import GET_PRICING_SCHEMA from '@/lib/apollo/dato_CMS/queries/getPricingSchema';
import { initApollo } from '@/lib/apollo';
import { Pricing } from '@/interfaces/pricing';
import { Tab } from '@headlessui/react';
import PricingCard from '../../../components/molecules/PricingCard';
import FeatureRow from '../../../components/molecules/FeatureRow';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const apolloClient = initApollo();


    const pricingSchema = await apolloClient.query({
        query: GET_PRICING_SCHEMA,
        context: {
            clientName: 'DATO_CMS_LINK',
        },
        variables: {
            title: 'HomePage_Assistenza'
        }
    });

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            pricingSchema: pricingSchema?.data?.allPricingSchemas
        },
    }
}

const index: FC<{ pricingSchema: Pricing[] }> = ({ pricingSchema }) => {


    const [pricingTable, setPricingTable] = useState<Pricing>()

    useEffect(() => {
        setPricingTable(pricingSchema[0])
    }, [])



    return (
        <BoxWidth>
            <Box
                textAlign={'center'}
                mt={'30px'}
                display={'grid'}
                gap={'16px'}
            >
                <Box
                    textStyle={['h2', 'h2', 'hero']}
                    color={'gray700'}
                    fontWeight={'700'}
                    className='w-9/12 lg:w-full mx-auto'
                >
                    Abbiamo il piano su misura per te.
                </Box>
                <Box
                    textStyle={['h4', 'h4', 'h2']}
                    color={'gray700'}
                    fontWeight={'700'}
                    className='w-9/12 lg:w-full mx-auto'
                >
                    Che tu sia un <span
                        className='text-[#FCB900]'
                    >professionista</span>, un’<span
                        className='text-[#FCB900]'
                    >impresa</span> o un <span
                        className='text-[#FCB900]'
                    >committente</span>
                </Box>
                <Text
                    textStyle={['h6', 'h6', 'h5']}
                    color={['#718096', '#718096', 'dark']}
                    fontWeight={['400', '400', '600']}
                >
                    Seleziona un profilo e scopri i vantaggi della nostra offerta
                </Text>
            </Box>
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-[4px] border-[1px] border-[#D0D5DD] w-fit bg-[#EEEEEE] p-[2px] mx-auto my-[60px]">
                    {pricingSchema.map((element: Pricing, index: number) => (
                        <Tab
                            key={index}
                            className={({ selected }) =>
                                classNames(
                                    'w-fit min-w-[180px] rounded-[2px] py-[8px] text-sm font-medium leading-5 ',
                                    'ring-[#EEEEEE]  focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-[#FCB900] text-[#151515] shadow'
                                        : ' text-[#757575] bg-[#EEEEEE] hover:bg-white/[0.12] '
                                )
                            }
                            onClick={() => {
                                if (element.title === pricingTable?.title) return
                                setPricingTable(element)
                            }}
                        >
                            <Text
                                textStyle={'h5'}
                                fontWeight={'700'}
                            >
                                {element.title}
                            </Text>
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
            <Box
                width={'full'}
                className='grid grid-cols-4 gap-[15px] mb-[50px]'
            >
                <Box></Box>
                {pricingTable?.pricingTypology.map((element, index: number) => (
                    <PricingCard element={element} key={index} />
                ))}
            </Box>

            <Box
                className='mb-[200px]'
            >
                {pricingTable?.pricingSchema.map((element, index: number) => (
                    <FeatureRow key={index} element={element} />
                ))}
            </Box>


        </BoxWidth >

    )
}

export default index