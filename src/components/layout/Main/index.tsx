import React from "react";
import styles from "@/components/layout/Main/style.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.purchaseProgress}>
        <div className={styles.account}></div>
        <div className={styles.shipping}></div>
        <div className={styles.payment}></div>
      </div>
    </div>
  );
};

export default Main;
