import gql from "graphql-tag";

export const User = gql`
  type User {
    _id: ID!
    name: String
    price: String
    password: String
  }
  input UserInput {
    name: String
    email: String
    password: String
  }
  type Query {
    getUsers: [User!]
  }
  type Mutation {
    createUser(fields: UserInput): User
    loginUser(fields: UserLoginInput): User
  }
`;
