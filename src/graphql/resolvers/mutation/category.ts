import CategoryModel from "@/graphql/models/categoryModel";

export const createCategory = async (_: any, { fields }: any) => {
  const { name } = fields;
  console.log(fields);
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
