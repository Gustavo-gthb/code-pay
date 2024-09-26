import React from "react";
import styles from "@/components/layout/Header/style.module.css";
import DownArrow from "@/components/shared/DownArrow";
import ShoppingCart from "@/components/shared/ShoppingCart";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBarLeft}>
        <h1>codepay.</h1>

        <p>Início</p>
        <p>Comprar</p>
        <p>Contato</p>
        <p>Ajuda</p>
      </div>

      <div className={styles.navBarRight}>
        <div className={styles.account}>
          Conta <DownArrow />
        </div>

        <div className={styles.shoppingCart}>
          {" "}
          2 items <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
