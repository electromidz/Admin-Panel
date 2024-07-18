import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/lib/DB/data";
import { deleteProduct } from "@/app/lib/actions";

export default async function Products({ searchParams }) {
  const q = searchParams?.q ?? "";
  const page = searchParams?.page || 1;
  const response = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Descriptio</td>
            <td>Price</td>
            <td>Create At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {response.products.map((product: any) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    //src={product.img ? product.img : "/noproduct.webp"}
                    src="/noproduct.webp"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userProduct}
                  />
                  {product.title ?? "title"}
                </div>
              </td>

              <td>{product.desc ?? "No data"}</td>
              <td>${product.price ?? "0"}</td>
              <td>
                {product.createdAt
                  ? new Date(product.createdAt).toLocaleDateString()
                  : "Unknown"}
              </td>
              <td>{product.stock ?? 0}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={response.count} />
    </div>
  );
}
