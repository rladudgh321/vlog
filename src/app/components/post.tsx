import Link from "next/link";

export default function PostPage() {
  return (
    <div className="w-[400px]">
      <article className="m-5">
        
        <div className="relative bg-center bg-cover rounded-3xl w-[400px] h-[400px] bg-[url('https://cdn.pixabay.com/photo/2023/11/04/09/23/bananas-8364511_1280.jpg')]">
        <div className="hover-info hover:bg-slate-900/60 text-white w-[400px] h-[400px] rounded-3xl">
              <div className="absolute right-0 p-5 opacity-0">화살표</div>
              <div className="absolute bottom-0 p-5 opacity-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim?</div>
        </div>
        </div>
        <br />
        <div className="blog-date">2024/03/19</div>
        <br />
        <br />
        <h2 className="text-lg font-extrabold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, debitis.</h2>
      </article>
    </div>
  );
}