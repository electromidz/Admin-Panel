"use client";
import styles from "./loginForm.module.css";
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

export const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <h1>Login</h1>
      <input type="text" placeholder="Username" name="username" required />
      <input type="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
      {state && state}
    </form>
  );
};
