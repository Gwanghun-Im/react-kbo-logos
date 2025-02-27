# react-kbo-logos

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
