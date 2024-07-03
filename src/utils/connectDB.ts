import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const mongoUri =
      "mongodb+srv://anudari:anudari0112@cluster0.hk79mx6.mongodb.net/coffee-shop";
    await mongoose.connect(mongoUri);
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
};
export default connectToDB;
