import Header from "@/app/common/Header";
import Title from "./Title";
import RealteComponent from "./Relate";
import CommentComponent from "./Comment";
import ContentComponent from "./Content";
import FooterPage from "@/app/common/Footer";

export default function HelloPage({ params }: { params: { hello: string } } ) {
  
  return (
    <div className="">
      <Header />
      <Title />
      <ContentComponent />
      <RealteComponent />
      <CommentComponent />
      <div className="mt-40">
      <FooterPage />
      </div>
    </div>
  );
}