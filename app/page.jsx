"use client";
import "@/styles/homepage.scss";
import Desc from "@/components/Desc";
import Feed from "@/components/Feed";
import Home from "@/components/Home";
import Nav from "@/components/Nav";

export default function page() {
  return (
    <div className="homepage">
      <div className="homepage__content">
        <Nav />
        <Home />
        <Desc />
        <Feed />
      </div>
    </div>
  );
}
