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
}

export function Product({ product }: ProductProps) {
  return (
    <div className={styles.product}>
      <img
        src={product.imageUrl}
        alt={product.productName}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.productName}</h3>
        <div className={styles.productStars}>{product.stars}</div>
        <div className="product-prices">
          <span className={styles.productPriceOld}>
            de R$ {product.listPrice}
          </span>
          <span className={styles.productPriceCurrent}>
            por R$ {product.price}
          </span>
          <p className={styles.productPriceInstallments}>
            {product.installments.map((item, index) => (
              <span key={index}>
                ou em {item.quantity}x de R$ {item.value}
              </span>
            ))}
          </p>
        </div>
        <button className={styles.productButtonBuy}>Comprar</button>
      </div>
    </div>
  );
}
