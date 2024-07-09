import UserModel from "@/graphql/models/userModel";

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
