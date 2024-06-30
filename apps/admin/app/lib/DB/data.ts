import { connectDB } from "./index";
import { User } from "./models/user";

export const fetchUsers = async (q: string) => {
  const regex = new RegExp(q, "i");
  try {
    connectDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
