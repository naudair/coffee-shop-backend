import gql from "graphql-tag";

export const User = gql`
  type User {
    _id: ID!
    userName: String
    email: String
    password: String
  }
  input UserInput {
    userName: String
    email: String
    password: String
  }
  type Query {
    getUsers: [User!]
  }
  type Mutation {
    createUser(fields: UserInput): User
  }
`;
