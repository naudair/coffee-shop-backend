import ProductModel from "@/graphql/models/productModel";

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
  