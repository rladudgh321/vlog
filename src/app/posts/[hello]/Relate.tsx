import Link from "next/link";

export default function RealteComponent() {
  return (
    <div className="max-w-[768px] text-left mx-auto my-10 text-2xl">
      <div>관련 포스트가 3개 있어요</div>

      <div className="flex gap-x-4 items-center p-4">
        <img src="https://cdn.pixabay.com/photo/2023/11/04/09/23/bananas-8364511_1280.jpg" alt="사진" className="w-24 h-24" />
        <div>Next.js로 기술 블로그 만들기: 블로그는 사드세요... 제발 3편 내 블로그 간지나게 자랑하기 (Open Graph 적용하기)</div>
        <div>2024.09.04.</div>
      </div>
      <hr />

      <div className="flex gap-x-4 items-center p-4">
        <img src="https://cdn.pixabay.com/photo/2023/11/04/09/23/bananas-8364511_1280.jpg" alt="사진" className="w-24 h-24" />
        <div>Next.js로 기술 블로그 만들기: 블로그는 사드세요... 제발 3편 내 블로그 간지나게 자랑하기 (Open Graph 적용하기)</div>
        <div>2024.09.04.</div>
      </div>

    </div>
  );
}