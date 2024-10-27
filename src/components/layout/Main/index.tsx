import React from "react";
import styles from "@/components/layout/Main/style.module.css";
import Account from '../../shared/Account/index';
import Shipping from '../../shared/Shipping/index';
import Payment from '../../shared/Payment/index';

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.purchaseProgress}>
        <div className={styles.account}><Account/> Conta</div>
        <div className={styles.shipping}><Shipping/> Envio</div>
        <div className={styles.payment}><Payment/> Pagamento</div>
      </div>
    </div>
  );
};

export default Main;
