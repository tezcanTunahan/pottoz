import "@/styles/nav.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__left">
        <h1>
          <Link href="/">pottoz</Link>
        </h1>
      </div>
      <div className="nav__right">
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>what is pottoz ???</li>
        </ul>
      </div>
    </nav>
  );
}
