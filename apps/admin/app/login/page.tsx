import styles from "@/app/ui/login/login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" name="username" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
