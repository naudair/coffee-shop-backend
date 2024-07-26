import CategoryModel from "@/graphql/models/categoryModel";
import { connectToDB } from "@/utils/connectDB";

export const createCategory = async (_: any, { fields }: any) => {
  const { name } = fields;
  console.log(fields);
  await connectToDB();
  try {
    const category = await CategoryModel.create({ name });
    if (category) {
      console.log("Successfully CREATED category!");
    }
    return category;
  } catch (error) {
    console.log(error);
  }
};
