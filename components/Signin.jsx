"use client";
import "@/styles/components/login.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, getProviders, useSession } from "next-auth/react";
export default function Signin() {
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
    <div className="loginContainer">
      <div className="login">
        <div className="login__top">
          <h3> Sign in to your account</h3>
        </div>
        <div className="login__mid">
          {provider &&
            Object.values(provider).map((provider) => (
              <div key={provider.name} className="login__mid__item">
                <button onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
        </div>
        <div className="login__bot">
          <Link href="/">Home </Link>
        </div>
      </div>
    </div>
  );
}
