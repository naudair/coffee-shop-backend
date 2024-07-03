import UserModel from "../../models/user";

export const getUser = async () => {
  try {
    const user = await UserModel.find({});
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};
