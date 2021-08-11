import corebizLogo from "../../../assets/img/logo-corebiz-white.svg";
import vtexLogo from "../../../assets/img/logo-vtex-white.svg";
import styles from "./styles.scss";

export function PartnersLogo() {
  return (
    <div className={styles.logoList}>
      <div className={styles.logoItem}>
        <p>Created by</p>
        <img src={corebizLogo} alt="Logo da Corebiz" />
      </div>

      <div className={styles.logoItem}>
        <p>Powered by</p>
        <img src={vtexLogo} alt="Logo da VTEX" />
      </div>
    </div>
  );
}
