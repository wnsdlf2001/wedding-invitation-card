import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "150%",
  fontWeight: "bold",
  opacity: 1,
  marginBottom: 0,
});

const KakaoTalkShareButton = styled(Button, {
  background: "#fee500",
  borderColor: "#fee500",
  color: "#181600",
  "&:hover": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
  "&:focus": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
});

const LinkShareButton = styled(Button, {
  background: "#53acee",
  borderColor: "#53acee",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  const [shareCount, setShareCount] = useState<number>(0);

  // 기본 데이터 값 설정 (data가 없는 경우를 대비)
  const defaultData = {
    groom: { name: "윤준일" },
    bride: { name: "김수연" },
    kakaotalk: {
      api_token: "6fa581589cfd9173e9609b951a70ea7a",
      wedding_invitation_url: "https://wnsdlf2001.github.io/wedding-invitation-card",
      share_image: "https://wnsdlf2001.github.io/wedding-invitation-card/assets/main.jpg",
    },
  };
  const finalData = data || defaultData;

  // 잘못된 URL 감지 및 수정 처리
  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("localhost")) {
      console.warn("개발 환경에서는 리다이렉트를 생략합니다.");
      return;
    }

    // 잘못된 URL 패턴 예: "/_app_launch" 등이 포함되어 있을 때
    if (!currentUrl.startsWith(finalData.kakaotalk.wedding_invitation_url)) {
      console.warn("잘못된 URL 탐지, 올바른 URL로 리다이렉트 중...");

      // 올바른 URL로 강제 리다이렉트
      window.location.replace(finalData.kakaotalk.wedding_invitation_url);
    }
  }, [finalData.kakaotalk.wedding_invitation_url]);

  // Kakao SDK 로드 및 초기화
  useEffect(() => {
    const initializeKakao = () => {
      if (!window.Kakao) {
        console.error("Kakao SDK 로드 실패");
        return;
      }
      if (!window.Kakao.isInitialized()) {
        try {
          window.Kakao.init(finalData.kakaotalk.api_token);
        } catch (e) {
          console.error("Kakao SDK 초기화 실패:", e);
        }
      }
    };

    initializeKakao();

    if (shareCount !== 0) {
      if (window.Kakao?.Link) {
        try {
          window.Kakao.Link.createDefaultButton({
            objectType: "feed",
            container: "#sendKakao",
            content: {
              title: `${finalData.groom.name}❤${finalData.bride.name} 결혼식에 초대합니다`,
              description: "'청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
              imageUrl: finalData.kakaotalk.share_image,
              link: {
                mobileWebUrl: finalData.kakaotalk.wedding_invitation_url,
                webUrl: finalData.kakaotalk.wedding_invitation_url,
              },
            },
            buttons: [
              {
                title: "청첩장 열기",
                link: {
                  mobileWebUrl: finalData.kakaotalk.wedding_invitation_url,
                  webUrl: finalData.kakaotalk.wedding_invitation_url,
                },
              },
            ],
            installTalk: true,
          });

          // Kakao 공유 버튼 클릭
          setTimeout(() => {
            document.getElementById("sendKakao")?.click();
            message.success("카카오톡으로 청첩장을 공유합니다!");
          }, 100);
        } catch (e) {
          console.error("Kakao.Link.createDefaultButton 실행 중 오류:", e);
          message.error("카카오톡 공유 중 문제가 발생했습니다.");
        }
      } else {
        console.error("Kakao Link 객체가 없음");
        message.error("카카오톡 공유 기능을 사용할 수 없습니다.");
      }
    }
  }, [shareCount, finalData]);

  return (
      <Wrapper>
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>청첩장 공유하기</Title>
        </Divider>
        <KakaoTalkShareButton
            style={{ margin: 8 }}
            icon={<MessageFilled />}
            id="sendKakao"
            size="large"
            onClick={() => setShareCount(shareCount + 1)}
        >
          카카오톡으로 공유하기
        </KakaoTalkShareButton>
        <CopyToClipboard text={finalData.kakaotalk.wedding_invitation_url}>
          <LinkShareButton
              style={{ margin: 8 }}
              icon={<LinkOutlined />}
              size="large"
              onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
          >
            링크로 공유하기
          </LinkShareButton>
        </CopyToClipboard>
      </Wrapper>
  );
}