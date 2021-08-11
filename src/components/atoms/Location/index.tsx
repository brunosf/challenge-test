import styles from "./styles.scss";

export function Location(props) {
  return (
    <div className="location">
      <div className={styles.locationTitle}>Localização</div>
      <div className={styles.locationContent}>
        <p>{props.street}</p>
        <p>
          {props.city} {props.uf}
        </p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}
