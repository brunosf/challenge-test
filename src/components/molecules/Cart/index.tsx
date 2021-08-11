import { useContext } from "react";
import cartIcon from "../../../assets/img/cart-icon.svg";
import { CartContext } from "../../CartContext";
import styles from "./styles.scss";

export function Cart() {
  const { quantity } = useContext(CartContext);

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
