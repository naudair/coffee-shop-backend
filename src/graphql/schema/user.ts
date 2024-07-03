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
    getUser: [User!]
  }
  type Mutation {
    createUser(input: UserInput): User
  }
`;

// import gql from "graphql-tag";

// export const Catgeory = gql`
//   type Catgeory {
//     _id: ID!
//    name: String;
//   }
//   input CatgeoryInput {
//     name: String;
//   }
//   type Query {
//     getCategory: [Catgeory]
//   }
//   type Mutation {
//     createCategory(field: CatgeoryInput): Catgeory
//   }
// `;
