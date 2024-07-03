import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import connectToDB from "@/utils/connectDB";
import allowCors from "@/utils/cors";

connectToDB();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});


const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
})

export default allowCors(handler)
