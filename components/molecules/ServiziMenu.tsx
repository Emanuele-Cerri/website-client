import React, { FC, useState } from 'react'
import { Element, Servizio } from '../mooks/servizi'
import { Box, Divider, Stack, Text } from '@chakra-ui/react'
import { Restart } from 'iconoir-react'
import MenuItem from '../atoms/MenuItem'
import { useRouter } from 'next/router'


interface PropsPartMenu {
    shown: boolean,
    elements: Element[] | null
}

const ServiziMenu: FC<{ elements: Servizio[] }> = ({ elements }) => {
    const router = useRouter()
    const [secondPartMenu, setSecondPartMenu] = useState<PropsPartMenu>();
    const [thirdPartMenu, setThirdPartMenu] = useState<PropsPartMenu>();

    return (
        <Box display={'flex'}
            gap={4}
        >
            <Box
                display={'grid'}
                gap={5}
                width={'fit-content'}
            >

                {elements.map((servizio, index) => {
                    return (
                        <MenuItem
                            link={!servizio.schema.elements ? servizio.schema.elementLink : null}
                            servizio={servizio}
                            HandleMouseEnterEvent={() => {
                                if (!servizio.schema.elements) {
                                    setSecondPartMenu({
                                        shown: false,
                                        elements: null
                                    })
                                    return setThirdPartMenu({
                                        shown: false,
                                        elements: null
                                    })
                                }
                                setSecondPartMenu({
                                    shown: true,
                                    elements: servizio.schema.elements
                                })
                                setThirdPartMenu({
                                    shown: false,
                                    elements: null
                                })
                            }}
                        />


                    )
                })}

            </Box>
            <Stack direction='row' h='200px' p={2}>
                <Divider orientation='vertical' />
            </Stack>

            {
                secondPartMenu?.shown &&

                <Box
                    display={'grid'}
                    gap={5}
                    width={'fit-content'}
                    height={'fit-content'}
                >
                    {secondPartMenu.elements && secondPartMenu.elements.map((subServizio, index) => {
                        return (
                            <MenuItem
                                link={subServizio.elementLink}
                                servizio={subServizio}
                                HandleMouseEnterEvent={() => {
                                    if (!secondPartMenu.elements) {
                                        return
                                    }
                                    setThirdPartMenu({
                                        shown: true,
                                        elements: subServizio.elements
                                    }
                                    )
                                }}
                            />

                        )
                    })}
                </Box>
            }
            {secondPartMenu?.shown &&
                <Stack direction='row' h='200px' p={2}>
                    <Divider orientation='vertical' />
                </Stack>
            }
            {
                thirdPartMenu?.shown &&
                <Box
                    display={'grid'}
                    gap={5}
                    width={'fit-content'}
                    height={'fit-content'}
                >
                    {thirdPartMenu.elements && thirdPartMenu.elements.map((subServizio, index) => {
                        return (
                            <MenuItem
                                link={subServizio.elementLink}
                                servizio={subServizio}
                                HandleMouseEnterEvent={() => {

                                }}
                            />

                        )
                    })}
                </Box>
            }
        </Box>
    )
}

export default ServiziMenu