export const designSystemChakraUi = {
    breakpoints: {
        base: "320px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1280px",
        "2xl": "1536px",
    },
    colors: {
        dark: '#151515',
        darkGrey: '#757575',
        base: '#FCB900',
        hover: '#FFA500',
        pressed: '#FC8700',
        inactive: '#FEE399',
        warning20: '#FFF9EA',
        warning30: '#FFF1CC',
        blueGray: '#D0D5DD',
        gray700: '#2D3748',
        info10: '#F6FBFF',
        lightGrey: '#EEEEEE',
        success: '#1DB954',
        success30: '#BBEACC'
    },
    textStyles: {
        hero: {
            fontSize: '42px',
            lineHeight: '63px',
        },
        h1: {
            fontSize: '35px',
            lineHeight: '52.5px',
        },
        h2: {
            fontSize: '28px',
            lineHeight: '42px',
        },
        h3: {
            fontSize: '24px',
            lineHeight: '36px',
        },
        h4: {
            fontSize: '21px',
            lineHeight: '31.4px',
        },
        h5: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        h6: {
            fontSize: '14px',
            lineHeight: '21px',
        },
        h7: {
            fontSize: '12px',
            lineHeight: '20px',
        }
    },
    fontWeights: {
        semibold: '600',
    },
    components: {
        Button: {
            sizes: {
                sm: {
                    h: '35px',
                    fontSize: '16px',
                    px: '20px',
                },
                md: {
                    h: ['45px', '45px'],
                    fontSize: '16px',
                    px: '20px',
                },
            },
            variants: {
                primary: {
                    bg: "base",
                    color: "dark",
                    borderRadius: '0px',
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
                tertiary: {
                    bg: "white",
                    color: "dark",
                    borderRadius: '0px',
                    paddingY: '10px',
                    paddingX: '15px',
                    _hover: {
                        bg: "warning20",
                        opacity: 1,
                        color: "dark"
                    },
                    _active: {
                        bg: "warning30",
                        transform: 'scale(0.98)', //!chiedere a fedele quanto farlo scalare
                    },
                    _disabled: {
                        bg: "white",
                        color: "darkGrey",
                        opacity: 1,
                        transform: "scale(0.98)", //!chiedere a fedele quanto farlo scalare

                    },

                },
                tertiaryPressed: {
                    bg: "white",
                    color: "pressed",
                    borderRadius: '0px',
                    paddingY: '10px',
                    paddingX: '15px',
                    _hover: {
                        bg: "warning20",
                        opacity: 1,
                        color: "pressed"
                    },
                    _active: {
                        bg: "warning30",
                        transform: 'scale(0.98)', //!chiedere a fedele quanto farlo scalare
                    },
                    _disabled: {
                        bg: "white",
                        color: "darkGrey",
                        opacity: 1,
                        transform: "scale(0.98)", //!chiedere a fedele quanto farlo scalare

                    },
                },
            },
        },
    },
}