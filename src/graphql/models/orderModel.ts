import mongoose from "mongoose";

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
      milkAmount: Number,
    },
  ],
  user: String,
  date: Date,
  status: {
    type: String,
    enum: ["placed", "in progress", "on the way", "delivered"],
  },
  promoCode: {
    type: String,
    default: null,
  },
});

const OrderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default OrderModel;
