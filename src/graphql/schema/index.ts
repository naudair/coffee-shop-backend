import { mergeTypeDefs } from "@graphql-tools/merge";
import { User } from "./user";
import { Product } from "./product";

export const typeDefs = mergeTypeDefs([User, Product]);
