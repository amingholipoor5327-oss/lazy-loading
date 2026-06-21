"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [visible, setVisible] = useState([]);
  const [data , setData] = useState([]);

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

        {visible.length<data.length ? "load moore..." : "load ended!"}
      </div>
    </div>
  );
}