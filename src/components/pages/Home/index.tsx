import { Header } from "../../molecules/Header";
import { Newsletter } from "../../molecules/Newsletter";
import { Showcase } from "../../molecules/Showcase";

export function Home() {
  return (
    <div className="page-home">
      <Header />
      <Showcase title="Mais vendidos" />
      <Newsletter />
    </div>
  );
}
