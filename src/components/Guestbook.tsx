import { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import { Divider, Button, Input, Modal, message, Pagination } from "antd";
import dayjs from "dayjs";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import crypto from "crypto-js";

const Wrapper = styled("div", {
    background: "#efebe9",
    backgroundImage: "url(./assets/GroovePaper.png)",
    paddingTop: 0, // 상단 여백 제거
    paddingBottom: 30, // 하단 여백 제거
    width: "100%",
    textAlign: "center",
});

const Title = styled("p", {
    fontSize: "150%",
    fontWeight: "bold",
    marginBottom: "0px",
});

const ErrorMessage = styled("div", {
    fontSize: "14px",
    color: "#888",
    margin: "20px 0",
});

const InputWrapper = styled("div", {
    width: "90%",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
});

const RowWrapper = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    width: "100%",
});

const TotalMessagesText = styled("p", {
    textAlign: "right", // 오른쪽 정렬
    fontSize: "14px",   // 적당한 크기
    color: "#555",      // 흐릿한 텍스트 색상
    margin: "10px 20px 0 0", // 위쪽 마진, 오른쪽 여백
});


const HighlightText = styled("span", {
    fontSize: "16px",   // 강조 텍스트 크기
    fontWeight: "bold", // 강조 텍스트 볼드
    color: "#000",      // 강조 텍스트 색상
});



const InputArea = styled(Input.TextArea, {
    width: "100%",
    fontSize: "14px",
    resize: "none",
    height: "80px",
});

const InputItem = styled(Input, {
    flex: 0.6,
});

const SmallInput = styled(Input.Password, {
    flex: 0.4,
});

const SubmitButton = styled(Button, {
    alignSelf: "flex-end",
});

const MessageList = styled("div", {
    width: "90%",
    maxWidth: "600px",
    margin: "20px auto 0",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
});

const MessageCard = styled("div", {
    width: "100%",
    background: "#ffffff",
    padding: "4px 8px",
    borderRadius: "8px",
    position: "relative",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
});

const MessageAuthor = styled("p", {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "4px",
});

const MessageContent = styled("p", {
    fontSize: "13px",
    opacity: 0.9,
    margin: "8px 0",
    wordBreak: "break-word",
    whiteSpace: "pre-wrap",
});

const MessageTime = styled("p", {
    fontSize: "12px",
    color: "#888",
    position: "absolute",
    top: "6px",
    right: "8px",
});

const DeleteButton = styled(Button, {
    position: "absolute",
    bottom: "6px",
    right: "8px",
    fontSize: "12px",
});

interface GuestbookMessage {
    id: string;
    name: string;
    content: string;
    time: string;
    hashedPassword: string;
}

const ADMIN_PASSWORD = "admin531";
const ADMIN_HASH = crypto.SHA256(ADMIN_PASSWORD).toString();

export default function Guestbook() {
    const [guestbookMessages, setGuestbookMessages] = useState<GuestbookMessage[]>([]);
    const [isFirebaseAvailable, setIsFirebaseAvailable] = useState(true); // Firebase 연결 상태 관리
    const [name, setName] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [deleteTarget, setDeleteTarget] = useState<{ id: string; hashedPassword: string } | null>(null);
    const [modalPassword, setModalPassword] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const PAGE_SIZE = 10; // 한 페이지에 보여줄 메시지 개수

    const fetchMessages = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "guestbook"));
            const messages: GuestbookMessage[] = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id } as GuestbookMessage);
            });

            const sortedMessages = messages.sort((a, b) => {
                return dayjs(b.time).valueOf() - dayjs(a.time).valueOf();
            });

            setGuestbookMessages(sortedMessages);
        } catch (error) {
            console.error("Firestore에서 메시지를 가져오는 중 오류:", error);
            setIsFirebaseAvailable(false); // Firebase 연결 실패 처리
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;

        // 최대 글자 수 제한
        if (value.length > 200) {
            setContent(value.slice(0, 200));
            return;
        }

        // 최대 줄 수 제한
        const lines = value.split("\n");
        if (lines.length > 30) {
            setContent(lines.slice(0, 30).join("\n"));
            return;
        }

        setContent(value);
    };

    const handleAddMessage = async () => {
        if (!name.trim() || !content.trim() || !password.trim()) {
            message.warning("이름, 내용, 비밀번호 모두 입력해주세요!");
            return;
        }

        const hashedPassword = crypto.SHA256(password).toString();

        const newMessage = {
            name: name.trim(),
            content: content.trim(),
            time: dayjs().format("YYYY-MM-DD HH:mm"),
            hashedPassword,
        };

        try {
            await addDoc(collection(db, "guestbook"), newMessage);
            message.success("새로운 메시지가 추가되었습니다!");
            setName("");
            setContent("");
            setPassword("");
            fetchMessages();
        } catch (error) {
            console.error("Firestore에 메시지 추가 중 오류:", error);
            message.error("메시지를 추가하지 못했습니다.");
        }
    };

    if (!isFirebaseAvailable) {
        return (
            <Wrapper>
                <Divider plain style={{ margin: 0 }}> {/* Divider 상하 여백 제거 */}
                    <Title>축하글</Title>
                </Divider>
                <ErrorMessage>
                    현재 방명록 데이터를 불러올 수 없습니다. 나중에 다시 시도해 주세요. 💌
                </ErrorMessage>
            </Wrapper>
        );
    }

    const currentMessages = guestbookMessages.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Wrapper>
            <Divider plain style={{ margin: 0 }}> {/* Divider 상하 여백 제거 */}
                <Title>축하해주세요</Title>
            </Divider>
            <InputWrapper>
                <RowWrapper>
                    <InputItem
                        placeholder="이름"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        allowClear
                    />
                    <SmallInput
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        allowClear
                    />
                </RowWrapper>
                <InputArea
                    placeholder="내용을 입력해주세요 (최대 200자, 30줄)"
                    value={content}
                    onChange={handleContentChange}
                    allowClear
                />
                <SubmitButton type="primary" onClick={handleAddMessage}>
                    축하 남기기
                </SubmitButton>
            </InputWrapper>
            <TotalMessagesText>
                <HighlightText>{guestbookMessages.length}개</HighlightText> 의 축하를 받았어요!
            </TotalMessagesText>

            <MessageList>
                {currentMessages.map((message) => (
                    <MessageCard key={message.id}>
                        <MessageTime>{message.time}</MessageTime>
                        <MessageAuthor>{message.name}</MessageAuthor>
                        <MessageContent>{message.content}</MessageContent>
                        <DeleteButton
                            danger
                            type="text"
                            onClick={() => {
                                setDeleteTarget({ id: message.id, hashedPassword: message.hashedPassword });
                                setIsModalVisible(true);
                            }}
                        >
                            삭제
                        </DeleteButton>
                    </MessageCard>
                ))}
            </MessageList>
            <Pagination
                current={currentPage}
                pageSize={PAGE_SIZE}
                total={guestbookMessages.length}
                onChange={handlePageChange}
                style={{ marginTop: "20px" }}
            />
            <Modal
                title="메시지 삭제"
                visible={isModalVisible}
                onCancel={() => {
                    setIsModalVisible(false);
                    setModalPassword("");
                }}
                onOk={async () => {
                    if (!deleteTarget) return;
                    const inputHashedPassword = crypto.SHA256(modalPassword).toString();
                    if (inputHashedPassword === deleteTarget.hashedPassword || inputHashedPassword === ADMIN_HASH) {
                        try {
                            await deleteDoc(doc(db, "guestbook", deleteTarget.id));
                            message.success("메시지가 삭제되었습니다!");
                            fetchMessages();
                            setIsModalVisible(false);
                            setModalPassword("");
                        } catch (error) {
                            message.error("메시지 삭제에 실패했습니다.");
                        }
                    } else {
                        message.error("비밀번호가 일치하지 않습니다.");
                    }
                }}
            >
                <Input.Password
                    placeholder="비밀번호를 입력하세요"
                    value={modalPassword}
                    onChange={(e) => setModalPassword(e.target.value)}
                    allowClear
                />
            </Modal>
        </Wrapper>
    );
}