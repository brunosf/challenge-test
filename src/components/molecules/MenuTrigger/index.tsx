import menuIcon from "../../../assets/img/menu-icon.svg";
import styles from "./styles.scss";

export function MenuTrigger() {
  return (
    <button className={styles.menuTrigger}>
      <img src={menuIcon} alt="Ícone de menu" className={styles.menuIcon} />
    </button>
  );
}
