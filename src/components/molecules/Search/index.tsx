import searchIcon from "../../../assets/img/search-icon.svg";
import styles from "./styles.scss";

export function Search() {
  return (
    <form className={styles.search}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="O que está procurando?"
      />
      <button className={styles.searchSubmit}>
        <img src={searchIcon} alt="Ícone de lupa" />
      </button>
    </form>
  );
}
