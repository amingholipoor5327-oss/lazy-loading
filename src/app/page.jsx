import Link from "next/link";
import styles from "./home.module.css"; 

export default function Home() {
  return (
    <div className={styles.container}>  
      <main className={styles.card}>  
        <span className={styles.emoji}>👋</span> 
        <h1 className={styles.title}>Hi!</h1>  
        <p className={styles.subtitle}>Welcome to our store</p>  
        
        <Link href={"/allproducts"} className={styles.button}> 
          Go see products
          <span className={styles.arrow}>→</span> 
        </Link>
        
        <div className={styles.dots}> 
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </main>
    </div>
  );
}