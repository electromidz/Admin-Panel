import { auth, signOut } from "@/auth";
import MenuLink from "./menuLinks/menuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";

const menuItems: any = [
  {
    title: "Pages",
    lists: [
      { title: "Dashoard", path: "/dashboard", icon: <MdDashboard /> },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    lists: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      { title: "Reports", path: "/dashboard/reports", icon: <MdAnalytics /> },
    ],
  },
  {
    title: "User",
    lists: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
export default async function Sidebar() {
  const session = await auth();
  console.log("SESSION::", session);
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/avatar.png"
          alt=""
          width={50}
          height={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat: any) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.lists.map((item: any) => {
              return <MenuLink item={item} key={item.title} />;
            })}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
}
