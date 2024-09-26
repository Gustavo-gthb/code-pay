import React from "react";
import styles from "@/components/layout/Header/style.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div className={styles.navBarLeft}>
          <h1>codepay.</h1>

          <h2>Início</h2>
          <h2>Comprar</h2>
          <h2>Contato</h2>
          <h2>Ajuda</h2>
        </div>

        <div className={styles.navBarRight}>
          <div className={styles.account}>Conta</div>

          <div className={styles.shoppingCart}> 2 items</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
