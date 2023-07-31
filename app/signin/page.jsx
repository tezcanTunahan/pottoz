"use client";
import "@/styles/signinpage.scss";
import { useState } from "react";
import Signin from "@/components/Signin";
import Register from "@/components/Register";

export default function page() {
  const [isSignin, setIsSignin] = useState(true);

  return (
    <div className="signinpage">
      {isSignin ? (
        <Signin setIsSignin={setIsSignin} />
      ) : (
        <Register setIsSignin={setIsSignin} />
      )}
    </div>
  );
}
