export default function TitleComponent() {
  return (
    <div className="max-w-[768px] text-center mx-auto">
      <div className="">
        <h2 className="blog-title">Next.js로 기술 블로그 만들기: 블로그는 사드세요... 제발 3편 내 블로그 간지나게 자랑하기 (Open Graph 적용하기)</h2>
      </div>
      <div className="flex my-4 gap-4 items-center">
        <div className="blog-date">2022/09/18</div>
        <div className="blog-date">블로그는 사드세요 시리즈</div>
        <div>3 min read</div>
      </div>
      <div>
        <img className="rounded-lg" src="https://junghyeonsu.com/static/a0500c4166a2b17655cfd1f3699fc4ab/71d4d/cover.webp" alt="사진" />
      </div>
    </div>
  );
}