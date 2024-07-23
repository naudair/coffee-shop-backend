import gql from "graphql-tag";

export const Order = gql`
  scalar Date

  type Order {
    _id: ID!
    products: [Products]!
    user: String!
    date: Date
    status: OrderStatus!
    promoCode: String
  }

  enum OrderStatus {
    placed
    in_progress
    on_the_way
    delivered
  }

  type Products {
    productId: String!
    size: ProductSize!
    quantity: Int!
    milkAmount: Int!
  }

  enum ProductSize {
    small
    medium
    large
  }

  input OrderInput {
    products: [ProductsInput]!
    user: String!
    date: Date
    status: OrderStatus!
    promoCode: String
  }

  input ProductsInput {
    productId: String!
    size: ProductSize!
    quantity: Int!
    milkAmount: Int!
  }

  type Query {
    getOrders: [Order!]
  }

  type Mutation {
    createOrder(fields: OrderInput): Order
  }
`;
