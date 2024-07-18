"use server";
import { Product, User } from "./DB/models/user";
import { connectDB } from "./DB/index";
import { revalidatePath } from "next/cache.js";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../../auth";

export const addUser = async (formData: any) => {
  const { name, username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);
  try {
    connectDB();
    const hashPass = await hashPassword(password);

    const newUser = new User({
      name,
      username,
      email,
      password: hashPass,
      phone,
      isAdmin,
      isActive,
      address,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to  create user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData: any) => {
  const {
    id,
    name,
    username,
    email,
    password,
    phone,
    isAdmin,
    isActive,
    address,
  } = Object.fromEntries(formData);
  try {
    connectDB();
    const updateFields = {
      name,
      username,
      email,
      password,
      phone,
      isAdmin,
      isActive,
      address,
    };

    Object.keys(updateFields).forEach(
      (key: any) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key],
    );
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData: any) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectDB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to  create product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: any) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectDB();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key: any) =>
        updateFields[key] === " | undefined" && delete updateFields[key],
    );
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product");
  }
  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }
  revalidatePath("/dashboard/users");
};

export const authenticate = async (prevState, formData: any) => {
  const { username, password } = Object.fromEntries(formData);
  console.log(username, password);
  try {
    return await signIn("credentials", { username, password });
  } catch (error) {
    return "Wrong credentials!";
  }
};

async function hashPassword(password: string): string {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}
