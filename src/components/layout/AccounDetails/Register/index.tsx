"use client";

import React, { useState } from "react";
import styles from "@/components/layout/AccounDetails/Register/style.module.css";

const Register = () => {
  const [estado, setEstado] = useState("SP");

  const handleChange = (e) => {
    setEstado(e.target.value);
  };

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
          <input type="number"/>

          <div className={styles.estado}>
            <label htmlFor="estado">Estado</label>
            <select id="estado" value={estado} onChange={handleChange}>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
            </select>
          </div>
        </div>
      </form>

      <button>Registra-se para conta</button>
      <button>Entrar</button>
    </div>
  );
};

export default Register; 
