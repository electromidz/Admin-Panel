import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/DB/data";
import { deleteUser } from "@/app/lib/actions";

export default async function Users({ searchParams }: any) {
  const q = searchParams?.q ?? "";
  const page = searchParams?.page || 1;
  const response = await fetchUsers(q, page);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a user" />
          <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Create At</td>
              <td>isAdmin</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {response.users.map(
              (user: any): React.ReactNode => (
                <tr key={user.id}>
                  <td>
                    <div className={styles.user}>
                      <Image
                        // src={user.img ? user.img : "/avatar.png"}
                        src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}
                      />
                      {user.name ?? "unknown"}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "Unknown"}
                  </td>

                  <td>{user.isAdmin ? "Admin" : "Client"}</td>
                  <td>{user.isActive ? "active" : "passive"}</td>
                  <td>
                    <div className={styles.buttons}>
                      <Link href={`/dashboard/users/${user.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          View
                        </button>
                      </Link>
                      <form action={deleteUser}>
                        <input type="hidden" value={user.id} name="id" />
                        <button className={`${styles.button} ${styles.delete}`}>
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <Pagination count={response.count} />
      </div>
    </>
  );
}
