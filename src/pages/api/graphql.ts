import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import allowCors from "@/utils/cors";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
});

export default allowCors(handler);
