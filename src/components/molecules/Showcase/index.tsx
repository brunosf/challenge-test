import { useEffect, useState } from "react";
import { Product } from "../../atoms/Product";

import styles from "./styles.scss";

type ShowcaseProps = {
  title: string;
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export function Showcase(props: ShowcaseProps) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.log(`Erro na requisição de produtos: ${error}`)
      );
  }, []);

  return (
    <div className="showcase">
      <div className={styles.showcaseContainer}>
        <h2 className="showcase-title">{props.title}</h2>

        <div className={styles.showcaseList}>
          {products.map((product: any) => (
            <Product product={product} key={product.productId} />
          ))}
        </div>
      </div>
    </div>
  );
}
