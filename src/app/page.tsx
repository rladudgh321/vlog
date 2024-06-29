import Link from "next/link";
import Header from "./common/Header";
import Nav from "./common/Nav";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <h2 className="ml-4 text-2xl">WEB</h2>
      <br />
      <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur eius architecto ipsum similique ut vero nam cupiditate, alias, quidem aperiam, id perspiciatis fugit soluta et saepe illo odit dolorum.</p>
    </div>
  );
}
