import gql from "graphql-tag";

export const Catgeory = gql`
  type Catgeory {
    _id: ID!
   name: string;
  }
  input CatgeoryInput {
    name: string;
  }
  type Query {
    getCategory: [Catgeory]
  }
  type Mutation {
    createCategory(field: CatgeoryInput): Catgeory
  }
`;
