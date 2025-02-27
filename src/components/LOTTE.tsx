import React from "react"
import { LogoProps } from "./types"
import lotteLogo from "../assets/lotte.svg"

export const LOTTE: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  const aspectRatio = 1 // SVG의 실제 가로세로 비율로 수정 필요
  const width = size
  const height = size / aspectRatio

  return (
    <img
      src={lotteLogo}
      width={width}
      height={height}
      className={className}
      alt="롯데 자이언츠 로고"
    />
  )
}

export default LOTTE
