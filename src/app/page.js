import Image from "next/image";
import styles from "./page.module.css";
import Header from "./../components/layout/Header/index";
import Main from '../components/layout/Main/index';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Main/>
      </main>
      
    </>
    
  );
}
