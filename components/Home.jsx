"use client";
import "@/styles/components/home.scss";
import Button from "./ui/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Home() {
  const { data: sessioon } = useSession();
  const router = useRouter();
  return (
    <div className="home-container">
      <div className="home">
        <div className="home__top">
          <h1 className="home__top__welcome">Welcome to the </h1>
          <h1 className="home__top__title">Pottoz</h1>
          <h3>{sessioon?.user.name}</h3>
        </div>
        <div className="home__bot">
          <div className="home__bot__buttons">
            <Button
              className="home__bot__buttons--left"
              onClick={() => router.push("/signin")}
            >
              Get Started
            </Button>
            <Button className="home__bot__buttons--right">
              How does it work ?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
