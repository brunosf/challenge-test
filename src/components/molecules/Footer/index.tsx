import { Location } from "../../atoms/Location";
import { ButtonsWrapper } from "../ButtonsWrapper";
import { PartnersLogo } from "../PartnersLogo";
import styles from "./styles.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Location
          street="Avenida Andrômeda, 2000. Bloco 6 e 8"
          city="Alphavile"
          uf="SP"
          email="brasil@corebiz.ag"
          phone="+55 11 3090 1039"
        />
        <ButtonsWrapper />
        <PartnersLogo />
      </div>
    </footer>
  );
}
