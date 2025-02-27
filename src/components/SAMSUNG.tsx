import React from "react"
import { LogoProps } from "./types"
import samsungLogo from "../assets/samsung.svg"

export const SAMSUNG: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  const aspectRatio = 1 // SVG의 실제 가로세로 비율로 수정 필요
  const width = size
  const height = size / aspectRatio

  return (
    <img
      src={samsungLogo}
      width={width}
      height={height}
      className={className}
      alt="삼성 라이온즈 로고"
    />
  )
}

export default SAMSUNG
