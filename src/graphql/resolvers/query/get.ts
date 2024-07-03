import UserModel from "../../models/userModel";

export const getUser = async () => {
  try {
    const user = await UserModel.find({});
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};
