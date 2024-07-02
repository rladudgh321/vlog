export default function CommentComponent() {
  return (
    <div className="max-w-[768px] text-left mx-auto my-10 text-2xl">
      <div>3개의 댓글이 있어요</div>
      <div className="border border-slate-300 p-4">
        <div className="flex items-center gap-x-4 p-4">
          <div>
            <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2023/11/04/09/23/bananas-8364511_1280.jpg" alt="profile" />
          </div>
          <div>hongildong</div>
          <div>2024. 2. 27.</div>
        </div>
        <hr />
        <div className="my-5 p-5">
          @icona/generator: Icona asset generator 코드를 좀 살펴보고 싶었는데,
          지금은 404 NOT FOUND 네용.
          <br />
          <br />
          사내 도구로 사용중이라서 그런가요?
        </div>
        <div className="flex gap-x-4">
          <div>a</div>
          <div>b</div>
          <div>c</div>
        </div>
      </div>

      <div className="border border-slate-300 my-10">
        <textarea name="" id="" cols="30" rows="10" placeholder="로그인하고 댓글 작성하기" className="p-5 w-full" />
        <div>
          <button className="border border-slate-300 p-5 float-right mt-2">작성하기</button>
        </div>
      </div>

    </div>
  );
}