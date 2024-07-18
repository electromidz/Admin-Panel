import { fetchProduct } from "@/app/lib/DB/data";
import { updateProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
export default async function SingleProductPage({ params }: any) {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Size</label>
          <input type="text" name="size" placeholder={product.size} />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">computer</option>
          </select>
          <label>Description</label>
          <textarea
            placeholder="Description"
            name="desc"
            id="desc"
            rows={10}
            value={product.desc}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
