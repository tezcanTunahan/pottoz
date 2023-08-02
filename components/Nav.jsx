"use client";
import "@/styles/components/nav.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();

  return (
    <nav className="nav">
      <div className="nav__left">
        <Link href="/">pottoz</Link>
      </div>
      {session?.user.name && (
        <div className="nav__mid">
          <Image
            className=" nav__right__signout__img"
            src={session?.user.image}
            width={25}
            height={25}
          />
          <Link href={`/${session?.user.name}`}>{session?.user.name}</Link>
          <Link href="/create-img">upload image</Link>
        </div>
      )}
      <div className="nav__right">
        {session?.user.name ? (
          <div className="nav__right__signout">
            <p className="nav__right__signout__text" onClick={() => signOut()}>
              Log out
            </p>
          </div>
        ) : (
          <Link href="/signin">Sign in</Link>
        )}
      </div>
    </nav>
  );
}
