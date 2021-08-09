import styles from "./styles.scss";

export interface Installments {
  quantity: number;
  value: number;
}

export interface ProductProps {
  product: {
    productId: number;
    productName: string;
    stars: number;
    imageUrl: string;
    listPrice: number;
    price: number;
    installments: Array<Installments>;
  };
  onAddCart: (quantity: number) => void;
}

export function Product(props: ProductProps) {
  function buy() {
    const quantity = Number(localStorage.getItem("cart-quantity")) || 0;
    localStorage.setItem("cart-quantity", String(quantity + 1));

    props.onAddCart(quantity);
  }

  function priceFormat(price: number) {
    const priceStr = price.toString();
    const init = priceStr.split("", priceStr.length - 2);
    const final = priceStr.split("").splice(priceStr.length - 2, 2);
    const result = [...init, ".", ...final].join("");

    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(result));
  }

  return (
    <div className={styles.product}>
      <img
        src={props.product.imageUrl}
        alt={props.product.productName}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{props.product.productName}</h3>
        <div className={styles.productStars}>{props.product.stars}</div>
        <div className="product-prices">
          {props.product.listPrice && (
            <span className={styles.productPriceOld}>
              de {priceFormat(props.product.listPrice)}
            </span>
          )}
          <span className={styles.productPriceCurrent}>
            por {priceFormat(props.product.price)}
          </span>
          <p className={styles.productPriceInstallments}>
            {props.product.installments.map((item, index) => (
              <span key={index}>
                ou em {item.quantity}x de {priceFormat(item.value)}
              </span>
            ))}
          </p>
        </div>
        <button className={styles.productButtonBuy} onClick={buy}>
          Comprar
        </button>
      </div>
    </div>
  );
}
