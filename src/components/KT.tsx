import React from "react"
import { LogoProps } from "./types"
import ktLogo from "../assets/kt.svg"

export const KT: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  const aspectRatio = 1 // SVG의 실제 가로세로 비율로 수정 필요
  const width = size
  const height = size / aspectRatio

  return (
    <img
      src={ktLogo}
      width={width}
      height={height}
      className={className}
      alt="KT 위즈 로고"
    />
  )
}

export default KT
