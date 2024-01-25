import Link from "next/link";
import Navbar from "./navigation/layout";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1>가상 여행 플랫폼에 오신 것을 환영합니다!</h1>
        <p>세계 곳곳의 아름다운 장소를 가상으로 경험해 보세요.</p>
        <Link legacyBehavior href="/about">
          <a>About this project</a>
        </Link>
      </div>
    </>
  );
}
