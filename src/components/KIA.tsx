import React from "react"
import { LogoProps } from "./types"
import kiaLogo from "../assets/kia.svg"

export const KIA: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  const aspectRatio = 1 // SVG의 실제 가로세로 비율로 수정 필요
  const width = size
  const height = size / aspectRatio

  return (
    <img
      src={kiaLogo}
      width={width}
      height={height}
      className={className}
      alt="KIA 타이거즈 로고"
    />
  )
}

export default KIA
