import { gql } from '@apollo/client'

const GET_EXPLENATION_COMPONENTS_BY_TITLE = gql`
query explenationComponentElement($title: String!) {
    explenationComponentElement(filter: {titolo: {
      eq: $title
    }}) {
        titolo
        explenationComponent{
          titolo
          sottotitolo
          immagineDevice{
            url
          }
          immagineDesktop{
            url
          }
        }
    }
  }
`



export default GET_EXPLENATION_COMPONENTS_BY_TITLE;