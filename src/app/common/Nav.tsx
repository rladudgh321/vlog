import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <hr />
      <nav className="ml-4 p-4">
        <ol>
          <li><Link href="/nav/html">html</Link></li>
          <li><Link href="/nav/css">css</Link></li>
          <li><Link href="/nav/js">js</Link></li>
        </ol>
      </nav>
      <hr />
      <br />
    </div>
  );
};
