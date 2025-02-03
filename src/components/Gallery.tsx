import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "150%",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const images = [
  { original: "./assets/Gallery_Photo_1.png", thumbnail: "./assets/Gallery_Photo_1.png" },
  { original: "./assets/Gallery_Photo_2.png", thumbnail: "./assets/Gallery_Photo_2.png" },
  { original: "./assets/Gallery_Photo_3.png", thumbnail: "./assets/Gallery_Photo_3.png" },
  { original: "./assets/Gallery_Photo_4.png", thumbnail: "./assets/Gallery_Photo_4.png" },
  { original: "./assets/Gallery_Photo_5.png", thumbnail: "./assets/Gallery_Photo_5.png" },
  { original: "./assets/Gallery_Photo_6.png", thumbnail: "./assets/Gallery_Photo_6.png" },
];



const StyledGallery = styled("div", {
    ".image-gallery-thumbnail": {
        borderRadius: "2px", // 가벼운 라운드 처리
        border: "1px solid #ddd", // 깔끔한 테두리
        transition: "opacity 0.3s ease", // 부드러운 전환 효과
        opacity: 0.8, // 살짝 투명도 추가
        "&:hover": {
            opacity: 1, // hover시 명확하게
        },
    },
    ".image-gallery-thumbnail.active": {
        border: "0px solid #007aff", // 선택된 상태 강조 (블루 테두리)
        opacity: 1, // 활성화 상태는 완전 불투명
    },
    ".image-gallery-slide img": {
        borderRadius: "10px", // 이미지 슬라이드에 라운드 처리
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 살짝 그림자
        margin: "10px auto", // 위아래 여백 추가
        maxWidth: "95%", // 이미지 크기 제한
        height: "auto", // 비율 유지
    },
});

export default function Gallery() {
    return (
        <Wrapper>
            {/* 타이틀 */}
            <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
                <Title>우리의 아름다운 순간</Title>
            </Divider>

            {/* 이미지 갤러리 */}
            <StyledGallery>
                <ImageGallery
                    showPlayButton={false} // 플레이 버튼 숨김
                    showFullscreenButton={false} // 확대 버튼 숨김
                    items={images}
                    onClick={(e) => e.preventDefault()} // 클릭 이벤트 비활성화
                />
            </StyledGallery>
        </Wrapper>
    );
}
