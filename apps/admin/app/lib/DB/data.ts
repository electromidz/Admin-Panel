import { connectDB } from "./index";
import { User, Product } from "./models/user";

export const fetchUsers = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;
  try {
    connectDB();
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
export const fetchUser = async (id: number) => {
  try {
    connectDB();
    return await User.findById(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchProducts = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    connectDB();
    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
export const fetchProduct = async (id: number) => {
  try {
    connectDB();
    return await Product.findById(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch product!");
  }
};
