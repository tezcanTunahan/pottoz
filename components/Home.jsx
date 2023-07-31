"use client";
import "@/styles/components/home.scss";
import Button from "./ui/Button";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: sessioon } = useSession();
  return (
    <div className="home-container">
      <div className="home">
        <div className="home__top">
          <h1 className="home__top__welcome">Welcome to the </h1>
          <h1 className="home__top__title">Pottoz</h1>
          <h3>{sessioon?.user.name}</h3>
        </div>
        <div className="home__bot">
          <Button text="Get Started" className="home__bot__button--left" />
          <Button
            text="How does it work ?"
            className="home__bot__button--right"
          />
        </div>
      </div>
    </div>
  );
}
