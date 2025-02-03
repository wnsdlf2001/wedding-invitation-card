import Head from "next/head";
import { useEffect } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Calendar = dynamic(() => import("@/components/Calendar"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(
    () => import("@/components/CongratulatoryMoney"),
    { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });
const Guestbook = dynamic(() => import("@/components/Guestbook"), { ssr: false }); // 방명록 추가

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "준일❤수연 결혼식에 초대합니다",
      pageDescription: "2025년 8월 23일 토요일 오전 11시 30분",
      pageUrl: "https://wnsdlf2001.github.io/wedding-invitation-card",
      pageImage: "https://wnsdlf2001.github.io/wedding-invitation-card/assets/main.jpg",
    },
  };
}

export default function Home() {
  useEffect(() => {
    const isKakaoInApp = /KAKAOTALK/i.test(navigator.userAgent);

    if (isKakaoInApp) {
      document.body.classList.add("kakaotalk-visible");
    }

    return () => {
      if (isKakaoInApp) {
        document.body.classList.remove("kakaotalk-visible");
      }
    };
  }, []);

  return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta property="og:type" content="website" />
          <meta content="준일❤수연 결혼식에 초대합니다" name="Title" />
          <meta
              content="2025년 8월 23일 토요일 오전 11시 30분"
              name="Description"
          />
          <meta content="2025년 8월 23일 토요일 오전 11시 30분" name="Keyword" />
          <meta property="og:title" content="준일❤수연 결혼식에 초대합니다" />
          <meta
              property="og:description"
              content="2025년 8월 23일 토요일 오전 11시 30분"
          />
          <meta
              property="og:url"
              content="https://wnsdlf2001.github.io/wedding-invitation-card"
          />
          <meta
              property="og:image"
              content="https://wnsdlf2001.github.io/wedding-invitation-card/assets/main.jpg"
          />
          <meta property="og:image:alt" content="준일♥수연 웨딩 사진" />

          <meta name="theme-color" content="#BCAAA4" />
          <title>준일❤수연 결혼식에 초대합니다</title>
        </Head>
        <main className="bmjua-font">
          <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
          <Title data={JsonData} />
          <Gretting data={JsonData} />
          <Calendar />
          <Gallery />
          <Location />
          <CongratulatoryMoney data={JsonData} />
          <Share data={JsonData} />
          <Guestbook /> {/* 방명록 추가 */}
          <Footer>Copyright © 2025 J</Footer>
        </main>
      </>
  );
}