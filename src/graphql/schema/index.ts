import { mergeTypeDefs } from "@graphql-tools/merge";
import { User } from "./user";
import { Product } from "./product";
import { Order } from "./order";
import { Category } from "./category";

export const typeDefs = mergeTypeDefs([User, Product, Order, Category]);
