import { useEffect, useState } from "react";
import { styled } from "@stitches/react";

const Layout = styled("div", {
  width: "100%",
  height: "100%", // 부모 height (body)에서 상속받음
  margin: "0 auto",
  position: "relative",
  overflow: "hidden",
  display: "flex", // 콘텐츠를 중앙에 정렬
  flexDirection: "column", // 수직 정렬
  justifyContent: "center", // 세로 중심 정렬
  alignItems: "center", // 가로 중심 정렬
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)", // 가운데 정렬
  textAlign: "center",
  textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",
  animation: "fadein 3s",
});

const VideoBackground = styled("video", {
  backgroundColor: "#aeb8b3",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
});

const WeddingInvitation = styled("p", {
  fontSize: "110%",
  opacity: 0.45,
  marginBottom: 16,
});

const GroomBride = styled("p", {
  fontSize: "200%",
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "110%",
  opacity: 0.65,
  marginBottom: 24,
});

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  const [isInitialView, setIsInitialView] = useState(true); // 초기 상태
  const [screenHeight, setScreenHeight] = useState<number>(0); // 화면 높이 저장

  useEffect(() => {
    // 초기 화면 높이를 설정
    const updateHeight = () => {
      setScreenHeight(window.innerHeight); // 브라우저의 현재 화면 높이 설정
    };

    updateHeight(); // 컴포넌트가 로드될 때 즉시 실행
    //window.addEventListener("resize", updateHeight); // 화면 크기가 변경될 때도 높이를 업데이트

    const timer = setTimeout(() => {
      setIsInitialView(false); // 3초 후 초기 상태 변경
    }, 3000);

    return () => {
      //window.removeEventListener("resize", updateHeight); // 이벤트 리스너 해제
      clearTimeout(timer); // 타이머 클리어
    };
  }, []);

  return (
      <Layout>
        <VideoBackground
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%", // 화면 너비에 맞춤
              height: `${screenHeight}px`, // 브라우저 화면 높이에 맞춤
            }}
        >
          <source src="./assets/BackgroundVideo.mp4" type="video/mp4" />
        </VideoBackground>

        <TitleWrapper>
          <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
          <GroomBride>
            {data?.groom?.name} &#38; {data?.bride?.name}
          </GroomBride>
          <Schedule>
            {data?.date}
            <br />
            {data?.location}
          </Schedule>
        </TitleWrapper>
      </Layout>
  );
}