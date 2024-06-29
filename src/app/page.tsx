import Link from "next/link";
import Header from "./common/Header";
import Nav from "./common/Nav";
import PostPage from "./components/post";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="grid grid-cols-[400px,400px] gap-x-6 max-w-4xl mx-auto">
        <PostPage />
        <PostPage />
        <PostPage />
        <PostPage />
        <PostPage />
      </div>
      <h2 className="ml-4 text-2xl">WEB</h2>
      <br />
      <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur eius architecto ipsum similique ut vero nam cupiditate, alias, quidem aperiam, id perspiciatis fugit soluta et saepe illo odit dolorum.</p>
      <p>hello world</p>
    </div>
  );
}
