import UserModel from "@/graphql/models/user";

export const createUser = async (_: any, { fields }: any) => {
  const { username, email, password } = fields;
  console.log(fields);
  try {
    const data = await UserModel.create({ username, email, password });
    console.log("Successfully CREATED user!");
    return data;
  } catch (error) {
    console.log(error);
  }
};
