import userIcon from "../../../assets/img/user-icon.svg";
import styles from "./styles.scss";

export function Account() {
  return (
    <a href="#" className={styles.account}>
      <img src={userIcon} className={styles.accountIcon} />
      <span>Minha conta</span>
    </a>
  );
}
