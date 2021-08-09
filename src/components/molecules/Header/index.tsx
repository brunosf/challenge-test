import { Logo } from "../../atoms/Logo";
import { Account } from "../Account";
import { Cart } from "../Cart";
import { MenuTrigger } from "../MenuTrigger";
import { Search } from "../Search";

import styles from "./styles.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <MenuTrigger />
        <Logo />
        <Search />
        <Account />
        <Cart />
      </div>
    </div>
  );
}
