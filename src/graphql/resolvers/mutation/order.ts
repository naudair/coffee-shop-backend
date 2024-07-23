import OrderModel from "@/graphql/models/orderModel";

export const createOrder = async (_: any, { fields }: any) => {
  const {
    products,
    user,
    date,
    status,
    promoCode,
    // productId,
    // size,
    // quantity,
    // milkAmount,
  } = fields;
  console.log(fields);
  try {
    const order = await OrderModel.create({
      products,
      user,
      date,
      status,
      promoCode,
      // productId,
      // size,
      // quantity,
      // milkAmount,
    });
    if (order) {
      console.log("Successfully CREATED order!");
    }
    return order;
  } catch (error) {
    console.log(error);
  }
};
