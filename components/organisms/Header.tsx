import { Bars3Icon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Box, Button, Text, VStack } from '@chakra-ui/react'
import { Menu, NavArrowDown, Restart } from 'iconoir-react'
import { useState } from 'react'
import { SERVIZI } from '../mooks/servizi'

const servizi = SERVIZI

export default function Header() {
    const [panel, setPanel] = useState(true)

    return (
        <Box className='inset-x-0 top-0 z-40 sticky' onMouseLeave={() => {
            if (panel) return setPanel(false)
        }}>
            <header className="bg-white">
                <nav className="flex  mx-0 lg:mx-8 items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Skimming bpe</span>
                            <img className="h-8 w-auto" src="https://www.datocms-assets.com/106122/1694252549-logo-header.png" alt="" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Menu
                                height={24}
                                width={24}
                                strokeWidth={2.5}
                            />
                        </button>
                    </div>
                    <Box
                        className='hidden lg:flex items-center gap-[46px]'
                    >
                        <Link
                            href={"/"}
                            onMouseEnter={() => {
                                setPanel(false)
                            }}
                        >
                            <Text
                                color={'dark'}
                                textStyle='h5'
                                fontWeight={'semibold'}
                            >
                                Come funziona
                            </Text>
                        </Link>

                        <Box
                            display={'flex'}
                            gap={2}
                            cursor={'pointer'}
                            onMouseEnter={() => {
                                setPanel(true)
                            }}
                        >
                            <Text
                                color={'dark'}
                                textStyle='h5'
                                fontWeight={'semibold'}
                                my={'auto'}
                            >
                                Servizi
                            </Text>
                            <NavArrowDown
                                strokeWidth={2.2}
                                width={24}
                                height={24}
                            />
                        </Box>

                        <Link
                            href={"/"}
                            onMouseEnter={() => {
                                setPanel(false)
                            }}
                        >
                            <Text
                                color={'dark'}
                                textStyle='h5'
                                fontWeight={'semibold'}
                            >
                                Prezzi
                            </Text>
                        </Link>
                        <Box
                            display={'flex'}
                            gap={1.5}
                        >
                            <Text
                                color={'dark'}
                                textStyle='h5'
                                fontWeight={'semibold'}
                                my={'auto'}
                                cursor={'pointer'}
                            >
                                Vetrina aziendale
                            </Text>
                            <NavArrowDown
                                strokeWidth={2.2}
                                width={24}
                                height={24}
                            />
                        </Box>
                        <Link
                            href={"/"}
                            onMouseEnter={() => {
                                setPanel(false)
                            }}
                        >
                            <Text
                                color={'dark'}
                                textStyle='h5'
                                fontWeight={'semibold'}
                            >
                                Blog
                            </Text>
                        </Link>
                    </Box>


                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-[20px]">
                        <Button
                            variant={'tertiary'}
                            fontWeight={'semibold'}
                            size={'sm'}
                        >
                            Accedi
                        </Button>
                        <Button
                            variant={'primary'}

                            size={'sm'}
                        >
                            Registrati
                        </Button>

                    </div>
                </nav>
            </header>
            {panel && <Box
                minH={'350px'}
                borderTopWidth={'1px'}
                borderColor={'grayBlue'}
                paddingX={16}
                paddingY={4}
            >
                <Text
                    color={'base'}
                    fontSize={'h5'}
                    fontWeight={'semibold'}
                    mb={6}
                >
                    Selected section title
                </Text>
                <Box
                    display={'grid'}
                    gap={5}
                    width={'fit-content'}
                >

                    {servizi.map((servizio, index) => {
                        return (
                            <Box
                                width={'fit-content'}
                                display={'flex'}
                                gap={4}
                                key={index}
                                p={6}
                            >
                                <Restart
                                    width={20}
                                    height={20}
                                    className='my-auto'
                                />
                                <Box>
                                    <Text
                                        fontWeight={'semibold'}
                                        fontSize={'h5'}
                                        color={'dark'}
                                    >
                                        {servizio.title}
                                    </Text>
                                    <Text
                                        fontWeight={'medium'}
                                        fontSize={'h6'}
                                        color={'darkGrey'}

                                    >
                                        {servizio.subtitle}
                                    </Text>
                                </Box>

                            </Box>

                        )
                    })}
                </Box>


            </Box>}
        </Box>

    )
}
