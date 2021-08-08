import { useEffect, useState } from "react";
import cartIcon from "../../../assets/img/cart-icon.svg";
import styles from "./styles.scss";

export function Cart() {
  const [quantity, setQuantity] = useState(0);

  function mounted() {
    setQuantity(Number(localStorage.getItem("cart-quantity") || 0));
  }

  useEffect(() => {
    mounted();
  }, []);

  return (
    <div className={styles.cart}>
      <img
        src={cartIcon}
        alt="Ícone de carrinho de compras"
        className={styles.cartIcon}
      />
      <span className={styles.cartQuantity}>{quantity}</span>
    </div>
  );
}
