import UserModel from "../../models/userModel";

export const getUsers = async () => {
  try {
    const user = await UserModel.find({});
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};
