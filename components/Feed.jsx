"use client";
import "@/styles/components/feed.scss";
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
    <div className="feed">
      {img.map((img) => (
        <div key={img.id} className="feed__imgContainer">
          <img src={img.img} className="feed__imgContainer__img" />
        </div>
      ))}
    </div>
  );
}
