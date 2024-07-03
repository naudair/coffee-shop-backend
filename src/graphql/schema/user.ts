import gql from "graphql-tag";

export const User = gql`
  type User {
    _id: ID!
    userName: string;
    email: string;
    password: string;
  }
  input UserInput {
    userName: string;
    email: string;
    password: string;
  }
  type Query {
    getUser: [User]
  }
  type Mutation {
    createUser(field: UserInput): User
  }
`;
