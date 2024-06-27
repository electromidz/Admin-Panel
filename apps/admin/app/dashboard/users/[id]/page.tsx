import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
export default function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" placeholder="John Doe" name="username" />
          <label>Email</label>
          <input type="email" placeholder="JohnDoe@gmai.com" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="phone" placeholder="+989155225920" name="phone" />
          <label>Address</label>
          <textarea placeholder="New york" name="address" />
          <label>is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label>is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
