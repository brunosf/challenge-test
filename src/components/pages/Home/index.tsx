import { Header } from "../../molecules/Header";
import { Showcase } from "../../molecules/Showcase";

export function Home() {
  return (
    <div className="page-home">
      <Header />
      <Showcase title="Mais vendidos" />
    </div>
  );
}
