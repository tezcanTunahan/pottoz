import "@/styles/components/desc.scss";

export default function Desc() {
  return (
    <div className="descContainer">
      <div className="desc">
        <h1 className="desc__title"> How does it work ? </h1>
        <p className="desc__text">
          The concept is that since only images can be uploaded, there will be
          no accompanying text to provide context for visitors. Furthermore, all
          images are open to copyright.
        </p>
      </div>
    </div>
  );
}
