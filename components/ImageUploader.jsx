import "@/styles/components/imgUploader.scss";
export default function ImageUploader({ img, setImg }) {
  const changeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="imgUploader">
      <input type="file" accept="image/*" onChange={changeHandler} />
      <img src={img} alt="" width={0} height={0} className="imgUploader__img" />
    </div>
  );
}
