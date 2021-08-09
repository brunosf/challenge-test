import { FormEvent, useState } from "react";
import styles from "./styles.scss";

export type FormData = {
  name: string;
  email: string;
};

export function Newsletter() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [registered, setRegistered] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) {
          setErrors({
            name: "Preencha com um nome válido",
            email: "Preencha com um e-mail válido",
          });
          return;
        }
        setRegistered(true);
        return;
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterContainer}>
        {!registered ? (
          <>
            <h3 className={styles.newsletterTitle}>
              Participe de nossas news com promoções e novidades!
            </h3>
            <form className={styles.newsletterForm} onSubmit={onSubmit}>
              <label htmlFor="input-name" className={styles.newsletterLabel}>
                <input
                  type="text"
                  id="input-name"
                  className={styles.newsletterInput}
                  placeholder="Digite seu nome"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  value={form.name}
                />
                <p className={styles.newsletterError}>{errors.name}</p>
              </label>
              <label htmlFor="input-email" className={styles.newsletterLabel}>
                <input
                  type="email"
                  className={styles.newsletterInput}
                  placeholder="Digite seu email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  value={form.email}
                />
                <span className={styles.newsletterError}>{errors.email}</span>
              </label>
              <button className={styles.newsletterSubmit} type="submit">
                Eu quero!
              </button>
            </form>
          </>
        ) : (
          <>
            <h3 className={styles.newsletterTitle}>
              Seu e-mail foi cadastrado com sucesso!
            </h3>
            <p>
              A partir de agora você receberá as novidade e ofertas exclusivas.
            </p>
            <button
              className={styles.newsletterSubmit}
              type="submit"
              onClick={() => setRegistered(false)}
            >
              Cadastrar novo e-mail
            </button>
          </>
        )}
      </div>
    </div>
  );
}
