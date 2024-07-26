import ProductModel from "@/graphql/models/productModel";
import UserModel from "../../models/userModel";
import OrderModel from "@/graphql/models/orderModel";
import CategoryModel from "@/graphql/models/categoryModel";
import { connectToDB } from "@/utils/connectDB";

export const getUsers = async () => {
  await connectToDB();
  try {
    const user = await UserModel.find({});
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = async () => {
  await connectToDB();
  try {
    const product = await ProductModel.find({});
    console.log(product);
    return product;
  } catch (err) {
    console.log(err);
  }
};

export const getOrders = async () => {
  await connectToDB();
  try {
    const order = await OrderModel.find({});
    console.log(order);
    return order;
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = async () => {
  await connectToDB();
  try {
    const category = await CategoryModel.find({});
    console.log(category);
    return category;
  } catch (err) {
    console.log(err);
  }
};
