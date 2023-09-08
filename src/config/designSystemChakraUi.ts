export const designSystemChakraUi = {
    colors: {
        dark: '#151515',
        base: '#FCB900',
        hover: '#FFA500',
        pressed: '#FC8700',
        inactive: '#FEE399'
    },
    components: {
        Button: {
            variants: {
                primary: {
                    bg: "base",
                    color: "dark",
                    borderRadius: '0px',
                    paddingY: '10px',
                    paddingX: '15px',
                    _hover: {
                        bg: "hover",
                        opacity: 1,
                        color: "dark"
                    },
                    _active: {
                        bg: "pressed",
                        transform: 'scale(0.98)', //!chiedere a fedele quanto farlo scalare
                    },
                    _disabled: {
                        bg: "inactive",
                        opacity: 1,
                        transform: "scale(0.98)", //!chiedere a fedele quanto farlo scalare

                    },

                },
            },
        },
    },
}