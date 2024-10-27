import React from "react";
import styles from "@/components/layout/AccounDetails/Register/style.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <h2>Detalhes do envio</h2>

      <form action="">
        <p>Usar o endereço salvo</p>
        <input type="address" />

        <p>Cidade</p>
        <input type="text" />

        <p>Rua, bairro</p>
        <input type="text" />

        <div className={styles.numberState}>
            <p>Número</p>
            <input type="number" />

            <p>Estado</p>
        </div>
      </form>

        <button>Registra-se para conta</button>
        <button>Entrar</button>

    </div>
  );
};

export default Register;
