import { gql } from '@apollo/client'

const GET_HOME_DATA = gql`
query explenationCardComponent($title: String!, $secondTitle: String!) {
    explenationCardComponent(filter: {titolo: {
      eq: $title
    }}) {
      titolo
      explenationCard{
        titolo
        sottotitolo
        descrizione
        icon
        bottone{
          text
          icon
        }
      }
    }
    explenationCardComponent(filter: {titolo: {
        eq: $secondTitle
      }}) {
        titolo
        explenationCard{
          titolo
          sottotitolo
          descrizione
          icon
          bottone{
            text
            icon
          }
        }
      }
  }
`

export default GET_HOME_DATA;