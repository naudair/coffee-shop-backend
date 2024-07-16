import gql from "graphql-tag";

export const Product = gql`
  type Product {
    _id: ID!
    imgUrl: String
    name: String
    price: Price
    description: String
    category: String
  }
  type Price {
    small: Float
    medium: Float
    large: Float
  }
  input ProductInput {
    imgUrl: String
    name: String
    price: PriceInput
    description: String
    category: String
  }
  input PriceInput {
    small: Float
    medium: Float
    large: Float
  }
  type Query {
    getProducts: [Product!]
  }
  type Mutation {
    createProduct(fields: ProductInput): Product
  }
`;
