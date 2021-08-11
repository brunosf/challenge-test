import headsetIcon from "../../../assets/img/headset-icon.svg";
import envelopeIcon from "../../../assets/img/envelope-icon.svg";
import styles from "./styles.scss";

export function ButtonContact(props) {
  return (
    <a href="#" className={styles.buttonContact}>
      {props.type === "email" && <img src={envelopeIcon} />}
      {props.type === "chat" && <img src={headsetIcon} />}
      <span className={styles.buttonText}>{props.text}</span>
    </a>
  );
}
