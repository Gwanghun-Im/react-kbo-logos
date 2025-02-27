import React from "react"
import { LogoProps } from "./types"
import hanwhaLogo from "../assets/hanwha.svg"

export const HANWHA: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  const aspectRatio = 1 // SVG의 실제 가로세로 비율로 수정 필요
  const width = size
  const height = size / aspectRatio

  return (
    <img
      src={hanwhaLogo}
      width={width}
      height={height}
      className={className}
      alt="한화 이글스 로고"
    />
  )
}

export default HANWHA
