import UserModel from "@/graphql/models/userModel";

export const createUser = async (_: any, { fields }: any) => {
  const { userName, email, password } = fields;
  console.log(fields);
  try {
    const data = await UserModel.create({ userName, email, password });
    console.log("Successfully CREATED user!");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (_: any, { fields }: any) => {
  const { email } = fields;
  console.log(fields);
  try {
    const data = await UserModel.findOne({email});
    console.log("User Login!");
    return data;
  } catch (error) {
    console.log(error);
  }
};

