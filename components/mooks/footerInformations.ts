interface FooterInformation {
    listHeader: string,
    links: {
        title: string,
        link: string
    }[]
}

export const FOOTER_INFORMATION: FooterInformation[] = [
    {
        listHeader: 'Prodotti',
        links: [
            {
                title: 'Crea una gara',
                link: '/'
            },
            {
                title: 'Partecipa a una gara',
                link: '/'
            },
            {
                title: 'Come funziona',
                link: '/'
            },
            {
                title: 'Economia Circolare',
                link: '/'
            },
            {
                title: 'Vetrina aziende',
                link: '/'
            },
            {
                title: 'Pricing',
                link: '/'
            },
        ],
    },
    {
        listHeader: 'Azienda',
        links: [
            {
                title: 'About us',
                link: '/'
            },
            {
                title: 'Lavora con noi',
                link: '/'
            },
            {
                title: 'Contatti',
                link: '/'
            },
        ]
    },
    {
        listHeader: 'Risorse',
        links: [
            {
                title: 'Blog',
                link: '/'
            },
            {
                title: 'News letter',
                link: '/'
            },
            {
                title: 'Eventi',
                link: '/'
            },
            {
                title: 'Supporto',
                link: '/'
            },
            {
                title: 'Privacy Policy',
                link: '/'
            },
            {
                title: 'Termini e Condizioni',
                link: '/'
            }

        ]
    }
]