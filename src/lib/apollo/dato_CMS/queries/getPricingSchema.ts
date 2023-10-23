import { gql } from '@apollo/client'

const GET_PRICING_SCHEMA = gql`
query allPricingSchemas{
    allPricingSchemas(orderBy:orderid_ASC){
      title
      pricingTypology{
        title
        description
        price
        buttonTitle
        reccomended
      }
      pricingSchema
    }
  }
`

export default GET_PRICING_SCHEMA;

