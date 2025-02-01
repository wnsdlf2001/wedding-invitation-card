# Wedding Invitation React.js Template

결혼식 초대를 위한 청첩장 템플릿입니다.  
이 저장소가 마음에 들거나 사용하게 되신다면, Star와 Fork 부탁드리겠습니다😉

## Template Preview

### Wedding Invitation
![Preview](./Preview.gif)

## 템플릿에 포함하고 있는 내용 및 기능
- 결혼식 날짜, 위치, 인사말 출력
- 사진첩
- 축의금을 보내실 곳 (계좌번호 클립보드 복사 기능 지원)
- 카카오톡 공유 기능 및 링크 공유 기능

## Wedding Invitation v1 사용 방법

`./src/pages/index.tsx`의 `<Head>` 부분을 알맞게 수정해 주세요.  
```html
<meta content="○○○❤○○○ 결혼식에 초대합니다" name="Title" />
<meta content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" name="Description" />
<meta content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" name="Keyword" />
<meta property="og:title" content="○○○❤○○○ 결혼식에 초대합니다" />
<meta property="og:description" content="○○○○년 ○○월 ○○일 ○요일 오전 ○○시 ○○분" />
<meta property="og:url" content="https://kyuhyuk.kr/wedding-invitation" />
<meta name="theme-color" content="#BCAAA4" />
```

`./src/data.json`를 수정하여 사용합니다.  
```json
{
  "date": "1970년 01월 01일, 목요일 오전 12시 00분",
  "location": "○○○웨딩, ○층 ○○홀",
  "gretting": "서로 마주 보며 다져온 사랑을\n이제 함께 한곳을 바라보며 걸어갈 수 있는\n큰 사랑으로 키우고자 합니다.\n저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게\n앞날을 축복해 주시면 감사하겠습니다.",
  "groom": {
    "name": "○○○",
    "account_number": "○○은행 ***-***-******",
    "parents": {
      "mother": {
        "name": "○○○",
        "account_number": "○○은행 ***-***-******"
      },
      "father": {
        "name": "○○○",
        "account_number": "○○은행 ***-***-******"
      }
    }
  },
  "bride": {
    "name": "○○○",
    "account_number": "○○은행 ***-***-******",
    "parents": {
      "mother": {
        "name": "○○○",
        "account_number": "○○은행 ***-***-******"
      },
      "father": {
        "name": "○○○",
        "account_number": "○○은행 ***-***-******"
      }
    }
  },
  "kakaotalk": {
    "api_token": "",
    "wedding_invitation_url": "",
    "share_image": ""
  }
}
```
