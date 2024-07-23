import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: String, //user id
  imgUrl: String,
  name: String,
  price: {
    small: Number,
    medium: Number,
    large: Number,
  },
  description: String,
  category: String, // category id
});
const ProductModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default ProductModel;
