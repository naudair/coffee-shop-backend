import gql from "graphql-tag";

export const Category = gql`
  type Category {
    _id: ID!
    name: String!
  }

  input CategoryInput {
    name: String!
  }

  type Query {
    getCategories: [Category!]
  }

  type Mutation {
    createCategory(fields: CategoryInput): Category
  }
`;
