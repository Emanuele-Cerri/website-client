import { gql } from '@apollo/client'

const TEST_TESTO = gql`
query testtesto{
    testtesto(orderBy: _createdAt_ASC) {
       buttonTitle
    }
  }
`



export default TEST_TESTO;