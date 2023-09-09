export interface Element {
    title: string;
    subtitle: string;
    otherElements: boolean;
    elementLink: string | null;
    elements: Element[] | null;
}

export interface Servizio {
    title: string;
    subtitle: string;
    schema: {
        otherElements: boolean;
        elementLink: string | null;
        elements: Element[] | null;
    };
}

export const SERVIZI: Servizio[] = [
    {
        title: 'Economia Circolare',
        subtitle: 'lorem ipsum dolor sit amet',
        schema: {
            otherElements: true,
            elementLink: null,
            elements: [
                {
                    title: 'Vendita',
                    subtitle: 'lorem ipsum dolor sit amet',
                    otherElements: false,
                    elementLink: '/',
                    elements: null

                },
                {
                    title: 'Noleggio',
                    subtitle: 'lorem ipsum dolor sit amet',
                    otherElements: false,
                    elementLink: '/',
                    elements: null
                },
            ]
        }


    },
    {
        title: 'Crea una gara',
        subtitle: 'lorem ipsum dolor sit amet',
        schema: {
            otherElements: true,
            elementLink: null,
            elements: [
                {
                    title: 'Gara manuale',
                    subtitle: 'lorem ipsum dolor sit amet',
                    otherElements: true,
                    elementLink: null,
                    elements: [
                        {
                            title: 'Gara professionale',
                            subtitle: 'lorem ipsum dolor sit amet',
                            otherElements: false,
                            elementLink: '/',
                            elements: null
                        },
                        {
                            title: 'Gara semplificata',
                            subtitle: 'lorem ipsum dolor sit amet',
                            otherElements: false,
                            elementLink: '/',
                            elements: null
                        },
                    ]
                },
                {
                    title: 'Gara automatizzata',
                    subtitle: 'lorem ipsum dolor sit amet',
                    otherElements: false,
                    elementLink: '/',
                    elements: null
                },
                {
                    title: 'Gare in corso',
                    subtitle: 'lorem ipsum dolor sit amet',
                    otherElements: false,
                    elementLink: '/',
                    elements: null
                },
            ]
        }
    },
    {
        title: 'Gare in corso',
        subtitle: 'lorem ipsum dolor sit amet',
        schema: {
            otherElements: false,
            elementLink: '/',
            elements: null
        }
    }
]

export const VETRINA_AZIENDALE: Servizio[] = [
    {
        title: 'Imprese',
        subtitle: 'lorem ipsum dolor sit amet',
        schema: {
            otherElements: true,
            elementLink: '/',
            elements: null
        }
    },
    {
        title: 'Professionisti',
        subtitle: 'lorem ipsum dolor sit amet',
        schema: {
            otherElements: true,
            elementLink: '/',
            elements: null
        }
    },

]