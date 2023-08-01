"use client";
import { useState, useEffect } from "react";

export default function Feed() {
  const [img, setImg] = useState([]);
  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("/api/img");
      const data = await response.json();
      setImg(data);
    };
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      <div>
        {img.map((img) => (
          <div key={img.id}>
            <img src={img.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
