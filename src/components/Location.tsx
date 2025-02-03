import { styled } from "@stitches/react";
import { Divider, Tabs } from "antd";
import { useEffect, useState } from "react";

// 카카오맵 스크립트 연결
declare global {
    interface Window {
        kakao: any;
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

// 예식장 주소 스타일
const Address = styled("p", {
    fontSize: "110%",
    fontWeight: "normal",
    margin: "16px 0 32px",
    color: "#333",
});

const Image = styled("img", {
    width: "75%",
    maxWidth: 1024,
    marginBottom: 16,
});

// 교통정보 텍스트 스타일
const InfoText = styled("p", {
    fontSize: "100%",
    color: "#555",
    textAlign: "left",
    width: "75%",
    margin: "16px auto",
    lineHeight: 1.8,
});

export default function Location() {
    const [activeTab, setActiveTab] = useState<string>("map");
    const [isKakaoMapLoaded, setIsKakaoMapLoaded] = useState(false);
    const [mapInstance, setMapInstance] = useState<any>(null); // 카카오맵 인스턴스 저장
    const [isGuideZoomed, setIsGuideZoomed] = useState(false); // 약도 확대 상태 관리
    const API_KEY = "6fa581589cfd9173e9609b951a70ea7a";

    useEffect(() => {
        const existingScript = document.getElementById("kakao-map-script");

        if (!existingScript) {
            const script = document.createElement("script");
            script.id = "kakao-map-script";
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;
            script.async = true;
            script.onload = () => {
                if (window.kakao && window.kakao.maps) {
                    window.kakao.maps.load(() => {
                        setIsKakaoMapLoaded(true);
                    });
                }
            };
            document.head.appendChild(script);
        } else if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
                setIsKakaoMapLoaded(true);
            });
        }
    }, []);

    useEffect(() => {
        if (activeTab === "map" && isKakaoMapLoaded) {
            renderKakaoMap();
        }
    }, [activeTab, isKakaoMapLoaded]);

    const renderKakaoMap = () => {
        const container = document.getElementById("map");

        if (!container || !window.kakao || !window.kakao.maps) {
            console.error("Kakao Maps API is not loaded or invalid container.");
            return;
        }

        // 기존 지도 객체 해제
        if (mapInstance && mapInstance.setMap) {
            mapInstance.setMap(null);
        }

        // 컨테이너 초기화
        container.innerHTML = "";

        const options = {
            center: new window.kakao.maps.LatLng(37.50910, 126.88960),
            level: 3,
        };

        // 새 지도 인스턴스 생성
        const newMap = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(37.50910, 126.88960);
        const marker = new window.kakao.maps.Marker({ position: markerPosition });
        marker.setMap(newMap);

        const infoWindow = new window.kakao.maps.InfoWindow({
            content: `<div style="padding:2px 5px; font-size:12px; white-space:nowrap;">디큐브시티 더 세인트 웨딩</div>`,
        });
        infoWindow.open(newMap, marker);

        window.kakao.maps.event.addListener(marker, "click", () => {
            window.open("https://kko.kakao.com/DSPMfCoOPk", "_blank");
        });

        setMapInstance(newMap);

        setTimeout(() => {
            newMap.relayout();
            newMap.setCenter(options.center);
        }, 0);
    };

    const toggleGuideZoom = () => {
        setIsGuideZoomed(!isGuideZoomed);
    };

    const handleTabChange = (key: string) => {
        setActiveTab(key);
    };

    return (
        <Wrapper>
            <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
                <Title>오시는 길</Title>
            </Divider>

            <Address>
                서울 구로구 경인로 662 디큐브시티 <br />
                더 세인트 웨딩 6F, 그랜드볼룸 홀
            </Address>

            <Tabs
                defaultActiveKey="map"
                centered
                onChange={handleTabChange}
                style={{ width: "80%", margin: "0 auto" }}
                items={[
                    {
                        key: "map",
                        label: "지도",
                        children: (
                            <div
                                id="map"
                                style={{
                                    width: "100%",
                                    height: "400px",
                                    borderRadius: "4px",
                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                                    objectFit: "contain",
                                }}
                            ></div>
                        ),
                    },
                    {

                        key: "guide",
                        label: "약도",
                        children: (
                            <div style={{ position: "relative", width: "100%", marginBottom: "24px" }}>
                                {/* 약도 이미지 */}
                                <Image
                                    src="./assets/LocationMap.png"
                                    alt="약도 이미지"
                                    style={{
                                        width: "100%",
                                        height: "300px",
                                        objectFit: "contain", // 이미지 비율 유지 (왜곡 방지)
                                        cursor: "pointer", // 클릭 가능하도록 스타일 추가
                                    }}
                                    onClick={toggleGuideZoom} // 이미지 클릭 동작
                                />

                                {/* 안내 문구 */}
                                <p
                                    style={{
                                        fontSize: "90%",
                                        color: "#666",
                                        marginTop: "-10px",
                                    }}
                                >
                                    이미지를 클릭하면 확대됩니다.
                                </p>

                                {/* 교통정보 텍스트 */}
                                <InfoText>
                                    <strong>교통편 안내</strong>
                                    <br />
                                    🚗 <strong>승용차 (6,8번기둥 주차):</strong>
                                    <br />
                                    - <strong>영등포 방향:</strong> 현대백화점 디큐브시티를 지나 좌회전 신호 받고, 오피스동 주차장 진입
                                    <br />
                                    - <strong>구로 방향:</strong> GS주유소 우측 진입로를 이용해 유회전 후 진입
                                    <br /><br />

                                    🚌 <strong>버스:</strong>
                                    <br />
                                    - <strong>신도림역 2번 출구:</strong> 간선(5619, 6411, 6511, 6611), 영등포 노선(영등포01, 08, 09, 12, 13)
                                    <br />
                                    - <strong>신도림역 1번 출구:</strong> 간선(160, 503, 600), 지선(5615, 5714, 6512), 기타(301, 662, N16)
                                    <br /><br />

                                    🚇 <strong>지하철:</strong>
                                    <br />
                                    - <strong>직통:</strong> 1호선, 2호선 신도림역 1번 출구에서 연결
                                    <br />
                                </InfoText>

                                {/* 확대된 약도 팝업 */}
                                {isGuideZoomed && (
                                    <div
                                        onClick={toggleGuideZoom} // 클릭 시 팝업 닫힘
                                        style={{
                                            position: "fixed", // 화면 전체를 덮도록 고정
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            background: "rgba(0, 0, 0, 0.8)", // 어두운 반투명 배경
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            zIndex: 2000, // 최상위 레이어에서 표시
                                            cursor: "pointer", // 팝업 닫기 용도로 클릭 가능하게 설정
                                        }}
                                    >
                                        {/* 확대 이미지 */}
                                        <img
                                            src="./assets/LocationMap.png"
                                            alt="확대된 약도 이미지"
                                            style={{
                                                width: "90%",
                                                height: "auto",
                                                borderRadius: "8px", // 부드러운 모서리
                                                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)", // 팝업 음영 처리
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        ),

                    },
                ]}
            />
        </Wrapper>
    );
}