import React from "react"
import { LogoProps } from "./types"
import ncLogo from "../assets/nc.svg"

export const NC: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  const aspectRatio = 1 // SVG의 실제 가로세로 비율로 수정 필요
  const width = size
  const height = size / aspectRatio

  return (
    <img
      src={ncLogo}
      width={width}
      height={height}
      className={className}
      alt="NC 다이노스 로고"
    />
  )
}

export default NC
