import Image from "next/image";
import styles from "./page.module.css";
import Header from "./../components/layout/Header/index";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}></main>
    </div>
  );
}
