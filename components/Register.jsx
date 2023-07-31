"use client";
import "@/styles/components/signin.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, getProviders, useSession } from "next-auth/react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { FcGoogle } from "react-icons/fc";

export default function Register({ setIsSignin }) {
  const [provider, setProvider] = useState(null);
  const { data: session } = useSession();
  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProvider(providers);
    };
    fetchProviders();
  }, []);

  useEffect(() => {
    if (session) {
      window.location.href = "/";
    }
  }, [session]);

  return (
    <div className="signinContainer">
      <div className="signin">
        <div className="signin__top">
          <h1> pottoz // Register</h1>
        </div>
        <div className="signin__mid">
          <div className="signin__mid__inputs">
            <Input placeholder="email@" />
            <Input placeholder="password*" />
            <Input placeholder="password* again" />
            <Button>Register</Button>
          </div>

          <div className="signin__mid__providers">
            <h3>Or login with</h3>
            {provider &&
              Object.values(provider).map((provider) => (
                <div
                  key={provider.name}
                  className="signin__mid__providers__provider"
                >
                  <Button onClick={() => signIn(provider.id)}>
                    <FcGoogle /> Sign in with {provider.name}
                  </Button>
                </div>
              ))}
          </div>
        </div>
        <div className="signin__bot">
          <Link href="/">Back to home</Link>
          <p
            onClick={() => {
              setIsSignin(true);
            }}
          >
            all ready have a account sign in
          </p>
        </div>
      </div>
    </div>
  );
}
