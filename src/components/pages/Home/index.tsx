import { Header } from "../../molecules/Header";
import { Newsletter } from "../../molecules/Newsletter";
import { Showcase } from "../../molecules/Showcase";

export function Home() {
  function addCart(quantity: any) {}

  return (
    <div className="page-home">
      <Header />
      <Showcase title="Mais vendidos" onAddCart={addCart} />
      <Newsletter />
    </div>
  );
}
