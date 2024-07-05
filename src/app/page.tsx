import Link from "next/link";
import Header from "./common/Header";
import Nav from "./common/Nav";
import PostPage from "./components/post";
import HilightComponent from "./components/Highlight";
import FooterPage from "./common/Footer";
import PagenationComponent from "./components/Pagenation";

export default function Home() {
  return (
    <div>
      <Header />
      <hr />
      <Nav />
      <HilightComponent />
      <br />
      <hr />
      <div className="grid gap-x-6 mx-auto md:grid-cols-[400px,400px] justify-center">
        <Link href="/posts/hello-1">
          <PostPage />
        </Link>
        <Link href="/posts/hello-2">
          <PostPage />
        </Link>
        <Link href="/posts/hello-3">
          <PostPage />
        </Link>
        <Link href="/posts/hello-4">
          <PostPage />
        </Link>
        <Link href="/posts/hello-5">
          <PostPage />
        </Link>
        <Link href="/posts/hello-6">
          <PostPage />
        </Link>
        <Link href="/posts/hello-7">
          <PostPage />
        </Link>
        <Link href="/posts/hello-8">
          <PostPage />
        </Link>
        <Link href="/posts/hello-9">
          <PostPage />
        </Link>
        <Link href="/posts/hello-10">
          <PostPage />
        </Link>
        
      </div>
      <PagenationComponent />
      <FooterPage />
    </div>
  );
}
