"use client";
import "@/styles/createImg.scss";
import ImageUploader from "@/components/ImageUploader";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function page() {
  const { data: session } = useSession();
  const [img, setImg] = useState();

  const createImg = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/img/new", {
        method: "POST",
        body: JSON.stringify({
          img: img,
          userId: session?.user.id,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="createImgContainer">
      <div className="createImg">
        <form onSubmit={createImg}>
          <h1 className="createImg__title">Upload Image</h1>
          <ImageUploader img={img} setImg={setImg} />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
