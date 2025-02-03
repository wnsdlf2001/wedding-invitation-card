import { styled } from "@stitches/react";
import { Divider } from "antd";

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

const Content = styled("div", {
  fontSize: "100%",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 16,
  width: "100%",
  textAlign: "center",
});

const GroomBride = styled("p", {
  fontSize: "120%",
  lineHeight: 1.75,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

const BoldText = styled("span", {
  fontWeight: "",
  opacity: 1,
});

const SmallText = styled("span", {
  fontSize: "75%", // 작은 크기로 설정
  opacity: 0.65, // 강조도를 낮춤
});

const StyledDot = styled("span", {
  fontFamily: "Arial, sans-serif", // 산세리프 폰트 적용
  fontSize: "100%", // 방점 크기 조절 (텍스트와 동일)
  margin: "0 0px", // 방점 주변 간격 설정
  lineHeight: 1, // 세로 정렬 시 추가 간격 방지
});


type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>결혼합니다</Title>
      </Divider>
      <Content>
        {data?.gretting?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
      </Content>
      <GroomBride>
        <BoldText>
          {data?.groom?.parents?.father?.name}
        </BoldText>
        <StyledDot>・</StyledDot>
        <BoldText>
          {data?.groom?.parents?.mother?.name}
        </BoldText>
        <SmallText> 의 장남 </SmallText>
        <BoldText>{data?.groom?.name}</BoldText>
        <br />
        <BoldText>
          {data?.bride?.parents?.father?.name}
        </BoldText>
        <StyledDot>・</StyledDot>
        <BoldText>
          {data?.bride?.parents?.mother?.name}
        </BoldText>
        <SmallText> 의 장녀 </SmallText>
        <BoldText>{data?.bride?.name}</BoldText>
      </GroomBride>

    </Wrapper>
  );
}
