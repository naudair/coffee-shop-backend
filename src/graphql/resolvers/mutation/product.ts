import ProductModel from "@/graphql/models/productModel";
import { connectToDB } from "@/utils/connectDB";

export const createProduct = async (_: any, { fields }: any) => {
  const { name, price, imgUrl, description, category } = fields;
  await connectToDB();
  console.log(fields);
  try {
    const product = await ProductModel.create({
      name,
      price,
      imgUrl,
      description,
      category,
    });
    if (product) {
      console.log("Successfully CREATED product!");
    }
    return product;
  } catch (error) {
    console.log(error);
  }
};
