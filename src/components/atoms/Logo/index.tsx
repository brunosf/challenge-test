import corebizLogo from "../../../assets/img/logo-corebiz.svg";
import styles from "./styles.css";

export function Logo() {
  return <img className={styles.logoImage} src={corebizLogo}></img>;
}
