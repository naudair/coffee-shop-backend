import mongoose from "mongoose";
import ProductModel from "./product";

const orderSchema = new mongoose.Schema({
  id: String,
  products: [
    {
      productId: String, // product id
      size: {
        type: String,
        enum: ["small", "medium", "large"],
      },
      quantity: Number,
    },
  ],
  user: String,
  date: Date,
  size: {
    type: String,
    enum: ["placed", "in progress", "on the way", "delivered"],
  },
  milkAmount: Number,
  promoCode: String || null,
});

const OrderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default OrderModel;
