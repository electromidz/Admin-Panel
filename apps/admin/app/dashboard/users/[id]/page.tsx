import { fetchUser } from "@/app/lib/DB/data";
import { updateUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
export default async function SingleUserPage({ params }: any) {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avatar.png" alt="" fill />
        </div>
        {user.name}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateUser}>
          <input type="hidden" name="id" value={user.id} />
          <label>Name</label>
          <input type="text" name="name" placeholder={user.name} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea name="address" placeholder={user.address} />
          <label>is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={user.isAdmin}>
              Yes
            </option>
            <option value="false" selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={user.isActive}>
              Yes
            </option>
            <option value="false" selected={!user.isActive}>
              No
            </option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
