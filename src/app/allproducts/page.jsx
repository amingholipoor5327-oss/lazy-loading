"use client";

import { useEffect, useState } from "react";
import styles from "./allproducts.module.css";  
import Link from "next/link";

export default function Products() {
  const [visible, setVisible] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      let product = await response.json();
      setVisible(product.slice(0, 5));
      setData(product);
    }
    getPosts();
  }, []);

  useEffect(() => {
    if (data.length === 0 || visible.length >= data.length) return;

    let loadmoore = document.getElementById("loadmoore");
    if (!loadmoore) return;

    function ObserveHaneler(enteris) {
      let entery = enteris[0];
      if (entery.isIntersecting) {
        setVisible((prev) => [
          ...prev,
          ...data.slice(prev.length, prev.length + 5),
        ]);
      }
    }

    const observer = new IntersectionObserver(ObserveHaneler, {
      rootMargin: "100px",
    });
    observer.observe(loadmoore);

    return () => observer.disconnect();
  }, [data, visible]);

  return (
    <div className={styles.container}>  
      
        <div className={styles.header}>
         <h1 className={styles.headerTitle}>📝 Blog Posts</h1>
         <p className={styles.headerSub}>Scroll to load more</p>
       </div>
        <div className={styles.counterWrapper}>
         <span className={styles.counter}>
           Showing {visible.length} of {data.length} posts
         </span>
       </div>
        <ul className={styles.list}>
         {visible.map((item) => (
           <li key={item.id} className={styles.item}>  
             <div className={styles.itemHeader}>  
               <span className={styles.itemId}>#{item.id}</span> 
               <span className={styles.itemUser}>User: {item.userId}</span>  
             </div>
             <h3 className={styles.itemTitle}>{item.title}</h3>  
             <p className={styles.itemBody}>{item.body}</p>  
           </li>
         ))}
       </ul>

       <div 
        id="loadmoore" 
        className={`${styles.loadMore} ${
          visible.length >= data.length ? styles.loadMoreEnded : styles.loadMoreLoading
        }`}
      >
        {visible.length < data.length ? (
          <>
            <span className={styles.spinner}></span>
            Loading more...
          </>
        ) : (
          "✅ All posts loaded!"
        )}
        <br></br>
        <Link href={"/"} className={styles.Homebtn}>go home🏚️</Link>
      </div>
    </div>
  );
}