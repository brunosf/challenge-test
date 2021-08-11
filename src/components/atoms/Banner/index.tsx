import bannerDesktop from "../../../assets/img/banner-desktop.jpg";
import bannerMobile from "../../../assets/img/banner-mobile.jpg";
import styles from "./styles.scss";

export function Banner() {
  return (
    <picture className="banner">
      <source media="(max-width:768px)" srcset={bannerMobile} />
      <img
        src={bannerDesktop}
        alt="Banner com as principais ofertas"
        className={styles.bannerImage}
      />
    </picture>
  );
}
