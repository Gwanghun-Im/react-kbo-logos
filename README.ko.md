# react-kbo-logos

_다른 언어로 보기: [English](README.md)_

KBO 리그 팀들의 로고를 제공하는 React 컴포넌트 라이브러리입니다.

## 설치

```bash
npm install react-kbo-logos
```

## 사용 방법

```tsx
import {
  KIA,
  DOOSAN,
  LG,
  SSG,
  KIWOOM,
  KT,
  NC,
  SAMSUNG,
  LOTTE,
  HANWHA,
} from "react-kbo-logos"

function App() {
  return (
    <div>
      <KIA size={100} />
      <DOOSAN size={80} />
      <LG size={60} />
      {/* 다른 팀 로고들도 동일한 방식으로 사용 가능 */}
    </div>
  )
}
```

👇 Check out the demo in the website below
[gwanghun.im](https://www.gwanghun.im/tools/react-kbo-logos)

## 제공되는 컴포넌트

- `<DOOSAN />` - 두산 베어스
- `<LG />` - LG 트윈스
- `<KIA />` - KIA 타이거즈
- `<SSG />` - SSG 랜더스
- `<KIWOOM />` - 키움 히어로즈
- `<KT />` - KT 위즈
- `<NC />` - NC 다이노스
- `<SAMSUNG />` - 삼성 라이온즈
- `<LOTTE />` - 롯데 자이언츠
- `<HANWHA />` - 한화 이글스

## Props

각 로고 컴포넌트는 다음 props를 받습니다:

- `size?: number` - 로고의 크기 (픽셀 단위, 기본값: 40)
- `className?: string` - 추가적인 스타일링을 위한 CSS 클래스

## 요구사항

- React >= 16.8.0
- React DOM >= 16.8.0

## 개발하기

개발을 시작하려면:

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

패키지 빌드:

```bash
npm run build
```

## 브라우저 지원

이 패키지는 로고를 SVG로 제공하며, 모든 최신 브라우저에서 지원됩니다.

## 기여하기

기여는 언제나 환영합니다! Pull Request를 자유롭게 제출해주세요.

1. 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/멋진기능`)
3. 변경사항을 커밋합니다 (`git commit -m '멋진 기능 추가'`)
4. 브랜치에 푸시합니다 (`git push origin feature/멋진기능`)
5. Pull Request를 생성합니다

## 키워드

- react
- kbo
- logo
- baseball
- korean baseball
- svg

## 저장소

[GitHub 저장소](https://github.com/Gwanghun-Im/react-kbo-logos)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
