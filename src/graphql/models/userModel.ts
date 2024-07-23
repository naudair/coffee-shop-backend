import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  userName: String,
  email: String,
  password: String,
  avatar: String,
  address: String,
  cardInfo: {
    name: String,
    number: String,
    expirationDate: String,
    cvv: String,
  },
  favorites: [String], // product id
});
const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel;
