import { ButtonContact } from "../../atoms/ButtonContact";
import styles from "./styles.scss";

export function ButtonsWrapper() {
  return (
    <div className={styles.buttonList}>
      <ButtonContact type="email" text="Entre em contato" />
      <ButtonContact type="chat" text="Fale com o nosso consultor online" />
    </div>
  );
}
