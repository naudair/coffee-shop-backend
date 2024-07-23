import ProductModel from "@/graphql/models/productModel";
import UserModel from "../../models/userModel";
import OrderModel from "@/graphql/models/orderModel";
import CategoryModel from "@/graphql/models/categoryModel";

export const getUsers = async () => {
  try {
    const user = await UserModel.find({});
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = async () => {
  try {
    const product = await ProductModel.find({});
    console.log(product);
    return product;
  } catch (err) {
    console.log(err);
  }
};

export const getOrders = async () => {
  try {
    const order = await OrderModel.find({});
    console.log(order);
    return order;
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = async () => {
  try {
    const category = await CategoryModel.find({});
    console.log(category);
    return category;
  } catch (err) {
    console.log(err);
  }
};
