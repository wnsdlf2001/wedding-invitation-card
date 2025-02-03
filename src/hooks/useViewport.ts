import { useEffect } from "react";

const useViewport = () => {
    useEffect(() => {
        // 화면 높이에 기반해 --vh 계산
        const setViewportUnits = () => {
            const vh = window.innerHeight * 0.01; // 브라우저 내부 세로 높이 기반
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        // 초기 실행
        setViewportUnits();

        // 화면 크기 변화 시 재계산
        window.addEventListener("resize", setViewportUnits);

        return () => {
            window.removeEventListener("resize", setViewportUnits);
        };
    }, []);
};

export default useViewport;
