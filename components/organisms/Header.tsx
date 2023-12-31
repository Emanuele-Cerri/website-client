import Link from 'next/link'
import { Box, Button, Text } from '@chakra-ui/react'
import { Menu, NavArrowDown } from 'iconoir-react'
import { useRef, useState } from 'react'
import ServiziMenu from '../molecules/ServiziMenu'
import { SERVIZI, VETRINA_AZIENDALE } from '../mooks/servizi'
import { useRouter } from 'next/router'

export default function Header() {
    const [panelServizi, setPanelServizi] = useState(false)
    const [panelVetrinaAziendale, setPanelVetrinaAziendale] = useState(false)
    const servizi = useRef(SERVIZI)
    const vetrinaAziendale = useRef(VETRINA_AZIENDALE)
    const router = useRouter()

    const disablePanels = () => {
        setPanelServizi(false)
        setPanelVetrinaAziendale(false)
    }


    return (
        <Box className='inset-x-0 top-0 z-40 sticky' onMouseLeave={() => {
            if (panelServizi) setPanelServizi(false)
            if (panelVetrinaAziendale) return setPanelVetrinaAziendale(false)
        }}>
            <header className="bg-white">
                <nav className="flex  mx-0 lg:mx-8 items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Skimming bpe</span>
                            <img className="h-8 w-auto" src="https://www.datocms-assets.com/106122/1694252549-logo-header.png" alt="" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Main Menu</span>
                            <Menu
                                width={30}
                                hanging={20}
                                strokeWidth={2.2}
                            />
                        </button>
                    </div>
                    <Box
                        className='hidden lg:flex items-center gap-[26px]'
                    >
                        <Link
                            href={"/come-funziona"}
                            onMouseEnter={disablePanels}

                        >
                            <Text
                                color={router.asPath.includes('/come-funziona') ? 'pressed' : 'dark'}
                                bg={router.asPath.includes('/come-funziona') ? 'warning30' : 'none'}
                                p={'5px'}
                                px={'10px'}
                                textStyle='h5'
                                fontWeight={'semibold'}
                                _active={{
                                    transform: 'scale(0.98)',
                                }}
                            >
                                Come funziona
                            </Text>

                        </Link>

                        <Box
                            display={'flex'}
                            gap={2}
                            cursor={'pointer'}
                            onMouseEnter={() => {
                                if (panelVetrinaAziendale) {
                                    setPanelVetrinaAziendale(false)
                                }
                                setPanelServizi(true)
                            }}
                            bg={router.asPath.includes('/servizi') ? 'warning30' : 'none'}
                            p={'5px'}
                            px={'10px'}
                            color={'dark'}
                        >
                            <Text
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
                            href={"/prezzi"}
                            onMouseEnter={disablePanels}
                        >

                            <Text
                                bg={router.asPath.includes('/prezzi') ? 'warning30' : 'none'}
                                p={'5px'}
                                px={'10px'}
                                color={router.asPath.includes('/prezzi') ? 'pressed' : 'dark'}
                                textStyle='h5'
                                fontWeight={'semibold'}
                                _active={{
                                    transform: 'scale(0.98)',
                                }}

                            >
                                Prezzi
                            </Text>

                        </Link>
                        <Box
                            display={'flex'}
                            gap={1.5}
                            onMouseEnter={() => {
                                if (panelServizi) {
                                    setPanelServizi(false)
                                }
                                setPanelVetrinaAziendale(true)
                            }}
                            bg={router.asPath.includes('/vetrina-aziendale') ? 'warning30' : 'none'}
                            p={'5px'}
                            px={'10px'}
                            color={'dark'}

                        >
                            <Text
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
                            onMouseEnter={disablePanels}
                        >
                            <Text
                                bg={router.asPath.includes('/blog') ? 'warning30' : 'none'}
                                p={'5px'}
                                px={'10px'}
                                color={'dark'}
                                textStyle='h5'
                                fontWeight={'semibold'}
                                _active={{
                                    transform: 'scale(0.98)',
                                }}
                            >
                                Blog
                            </Text>
                        </Link>
                    </Box>


                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-[20px]">
                        <Button
                            variant={'tertiary'}
                            fontWeight={'semibold'}
                            _active={{
                                transform: 'scale(0.98)',
                            }}
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
            {panelServizi && <Box
                minH={'350px'}
                borderTopWidth={'1px'}
                borderColor={'grayBlue'}
                paddingX={16}
                paddingY={4}
                className='absolute top-20 bg-white w-full'
            >
                <Text
                    color={'base'}
                    textStyle={'h5'}
                    fontWeight={'semibold'}
                    _active={{
                        transform: 'scale(0.98)',
                    }}
                    my={4}
                    mb={6}
                >
                    Selected section title
                </Text>
                <ServiziMenu elements={servizi.current} />
                {/* <SlimMenu items={SERVIZI} /> */}

            </Box>}
            {panelVetrinaAziendale && <Box
                minH={'300px'}
                borderTopWidth={'1px'}
                borderColor={'grayBlue'}
                paddingX={16}
                paddingY={4}
                className='absolute top-20 bg-white w-full'
            >
                <Text
                    color={'base'}
                    textStyle={'h5'}
                    fontWeight={'semibold'}
                    _active={{
                        transform: 'scale(0.98)',
                    }}
                    my={4}
                    mb={6}
                >
                    Selected section title
                </Text>
                <ServiziMenu elements={vetrinaAziendale.current} />
                {/* <SlimMenu items={SERVIZI} /> */}




            </Box>}
        </Box>

    )
}
