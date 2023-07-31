"use client";
import "@/styles/components/nav.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Nav() {
  const isUserLoggedIn = false;
  const { data: session } = useSession();

  return (
    <nav className="nav">
      <div className="nav__left">
        <h1>
          <Link href="/">pottoz</Link>
        </h1>
      </div>
      <div className="nav__right">
        <ul>
          {session?.user.name ? (
            <li onClick={() => signOut()}>
              <Link href="/signin">
                Sign out
                <Image src={session?.user.image} width={25} height={25} />
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/signin">Sign in</Link>
            </li>
          )}
          <li>what is pottoz ???</li>
        </ul>
      </div>
    </nav>
  );
}
