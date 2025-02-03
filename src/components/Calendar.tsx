import { Calendar as AntCalendar, Card, Divider } from "antd";
import { styled } from "@stitches/react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday"; // 플러그인 가져오기
import { useState } from "react";
import "dayjs/locale/ko"; // 한국어 로케일 추가
import locale from "antd/es/calendar/locale/ko_KR"; // Ant Design 한국어 로케일 불러오기

// Day.js 플러그인 등록
dayjs.extend(weekday);

// 스타일 정의
const Wrapper = styled("div", {
    background: "#efebe9",
    backgroundImage: "url(./assets/GroovePaper.png)",
    padding: "20px 0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
});

const TitleWrapper = styled("div", {
    width: "90%",
    marginBottom: "16px",
    textAlign: "center",
});

const Title = styled("p", {
    fontSize: "150%",
    fontWeight: "bold",
    opacity: 1,
    marginBottom: -10,
});

const CalendarBox = styled(Card, {
    width: "90%",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    background: "#ffffff",
    padding: "20px",
    marginBottom: "10px"
});

const CalendarHeader = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "120%",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
});

/* 날짜 셀 스타일 정의 */
const cellStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30px",
    width: "30px",
    fontSize: "100%",
    margin: "0 auto",
    padding: "0",
    borderRadius: "50%", // 동그라미
};

// 하이라이트 날짜 정의
const specialDate = dayjs("2025-08-23");

export default function Calendar() {
    // 현재 달력을 표시 중인 년/월 상태 관리
    const [currentDate, setCurrentDate] = useState(specialDate); // 초기값: "2025-08-23"

    // 날짜 셀 렌더링 함수
    const dateCellRender = (value: Dayjs) => {
        const isSpecialDate = value.isSame(specialDate, "day");
        const isCurrentMonth = value.month() === currentDate.month(); // 현재 월 확인

        return (
            <div
                style={{
                    ...cellStyle,
                    backgroundColor: isSpecialDate ? "#FFEB3B" : "transparent", // 특별한 날짜 배경
                    color: isCurrentMonth ? (isSpecialDate ? "#000" : "#000") : "#c0c0c0", // 현재 월 회색 처리
                    fontWeight: isSpecialDate ? "bold" : "normal",
                }}
            >
                {value.date()}
            </div>
        );
    };

    return (
        <Wrapper>
            {/* 타이틀을 박스 밖으로 분리 */}
            <TitleWrapper>
                <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
                <Title>우리의 특별한 날</Title>
                </Divider>
            </TitleWrapper>
            {/* 달력 박스 */}
            <CalendarBox>
                {/* 달력 내부에 년/월 정보 표시 */}
                <CalendarHeader>{currentDate.format("YYYY년 MM월")}</CalendarHeader>
                <AntCalendar
                    fullscreen={false}
                    defaultValue={specialDate} // 초기 달력 값 설정 (2025년 8월 23일)
                    headerRender={() => null} // 기본 헤더 제거
                    locale={locale} // 한국어 로케일 설정
                    dateFullCellRender={dateCellRender} // 날짜 렌더링
                    onPanelChange={(value) => setCurrentDate(value)} // 월 변경 시 상태 업데이트
                    disabledDate={() => true} // 날짜 클릭 비활성화
                />
            </CalendarBox>
        </Wrapper>
    );
}