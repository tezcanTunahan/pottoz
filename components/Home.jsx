import "@/styles/home.scss";
import Button from "./Button";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home__top">
          <h1 className="home__top__welcome">Welcome to the </h1>
          <h1 className="home__top__title">Pottoz</h1>
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
