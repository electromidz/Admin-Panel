import { connectDB } from "./index";
import { User } from "./models/user";

export const fetchUsers = async () => {
  try {
    connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
