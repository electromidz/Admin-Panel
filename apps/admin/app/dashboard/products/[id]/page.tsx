import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
export default function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avatar.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" placeholder="title" name="title" />
          <label>Price</label>
          <input type="number" placeholder="$2200" name="price" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>Color</label>
          <input type="text" placeholder="red" name="color" />
          <label>Size</label>
          <input type="text" placeholder="small" name="size" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">computer</option>
          </select>
          <label>Description</label>
          <textarea placeholder="Description" name="desc" id="desc" rows={10} />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
