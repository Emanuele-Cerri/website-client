import { gql } from '@apollo/client'

const GET_EXPLENATION_CARDS = gql`
query explenationCardComponent($title: String!) {
    explenationCardComponent(filter: {titolo: {
      eq: $title
    }}) {
      titolo
      explenationCard{
        titolo
        redirectUrl
        sottotitolo
        descrizione
        icon
        image{
          url
        }
        bottone{
          text
          icon
        }
      }
    }
  }
`



export default GET_EXPLENATION_CARDS;