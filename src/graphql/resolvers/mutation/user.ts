import UserModel from "@/graphql/models/userModel";
import { connectToDB } from "@/utils/connectDB";

export const createUser = async (_: any, { fields }: any) => {
  const { userName, email, password } = fields;
  await connectToDB();
  console.log(fields);
  try {
    const user = await UserModel.create({ userName, email, password });
    if (user) {
      console.log("Successfully CREATED user!");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (_: any, { fields }: any) => {
  const { email } = fields;
  console.log(fields);
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      console.log("User Login!✅");
    } else {
      console.log("User Not Found!🔺");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};
