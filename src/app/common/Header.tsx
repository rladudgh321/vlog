import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between h-[70px]">
      <div className="p-4 flex items-center"><Link href="/">Blog</Link></div>
      <div className="flex items-center gap-x-4 p-4">
        <Link href="/about">About</Link>
        <button>ㅁ</button>
      </div>
    </header>
  );
}