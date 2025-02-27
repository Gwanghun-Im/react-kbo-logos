import React from "react"
import { LogoProps } from "./types"
import kiwoomLogo from "../assets/kiwoom.svg"

export const KIWOOM: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  const aspectRatio = 1 // SVG의 실제 가로세로 비율로 수정 필요
  const width = size
  const height = size / aspectRatio

  return (
    <img
      src={kiwoomLogo}
      width={width}
      height={height}
      className={className}
      alt="키움 히어로즈 로고"
    />
  )
}

export default KIWOOM
