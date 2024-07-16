import ProductModel from "@/graphql/models/productModel";
import UserModel from "@/graphql/models/userModel";

export const createUser = async (_: any, { fields }: any) => {
  const { userName, email, password } = fields;
  console.log(fields);
  try {
    const data = await UserModel.create({ userName, email, password });
    console.log("Successfully CREATED user!");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (_: any, { fields }: any) => {
  const { name, price, imgUrl, description, category } = fields;
  console.log(fields);
  try {
    const product = await ProductModel.create({
      name,
      price,
      imgUrl,
      description,
      category,
    });
    console.log("Successfully CREATED product!");
    return product;
  } catch (error) {
    console.log(error);
  }
};
