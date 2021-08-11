import { Banner } from "../../atoms/Banner";
import { Footer } from "../../molecules/Footer";
import { Header } from "../../molecules/Header";
import { Newsletter } from "../../molecules/Newsletter";
import { Showcase } from "../../molecules/Showcase";

export function Home() {
  return (
    <div className="page-home">
      <Header />
      <Banner />
      <Showcase title="Mais vendidos" />
      <Newsletter />
      <Footer />
    </div>
  );
}
