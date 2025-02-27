import React from "react"
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
} from "../src"

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>KBO 구단 로고</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        <LogoCard name="KIA 타이거즈" Logo={KIA} />
        <LogoCard name="두산 베어스" Logo={DOOSAN} />
        <LogoCard name="LG 트윈스" Logo={LG} />
        <LogoCard name="SSG 랜더스" Logo={SSG} />
        <LogoCard name="키움 히어로즈" Logo={KIWOOM} />
        <LogoCard name="KT 위즈" Logo={KT} />
        <LogoCard name="NC 다이노스" Logo={NC} />
        <LogoCard name="삼성 라이온즈" Logo={SAMSUNG} />
        <LogoCard name="롯데 자이언츠" Logo={LOTTE} />
        <LogoCard name="한화 이글스" Logo={HANWHA} />
      </div>
    </div>
  )
}

interface LogoCardProps {
  name: string
  Logo: React.ComponentType<{ size?: number; className?: string }>
}

const LogoCard: React.FC<LogoCardProps> = ({ name, Logo }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Logo size={100} />
      <h3 style={{ margin: 0 }}>{name}</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <Logo size={40} />
        <Logo size={60} />
        <Logo size={80} />
      </div>
    </div>
  )
}

export default App
