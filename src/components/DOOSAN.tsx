import React from "react"
import { LogoProps } from "./types"
import doosanLogo from "../assets/doosan.svg"

export const DOOSAN: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  const aspectRatio = 1 // SVG의 실제 가로세로 비율로 수정 필요
  const width = size
  const height = size / aspectRatio

  return (
    <img
      src={doosanLogo}
      width={width}
      height={height}
      className={className}
      alt="두산 베어스 로고"
    />
  )
}

export default DOOSAN
