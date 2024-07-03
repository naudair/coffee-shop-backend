import { mergeTypeDefs } from "@graphql-tools/merge";
import { User } from "./user";

export const typeDefs = mergeTypeDefs([User]);
