"use client";

import { useEffect, useState } from "react";

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
    <div>
      <ul>
        {visible.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>

      <div id="loadmoore">
        {visible.length < data.length ? "load moore..." : "load ended!"}
      </div>
    </div>
  );
}