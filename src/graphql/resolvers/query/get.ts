import ProductModel from "@/graphql/models/productModel";
import UserModel from "../../models/userModel";

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