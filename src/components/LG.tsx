import React from "react"
import { LogoProps } from "./types"
import lgLogo from "../assets/lg.svg"

export const LG: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  const aspectRatio = 276.99255 / 221.51323
  const width = size
  const height = size / aspectRatio

  return (
    <img
      src={lgLogo}
      width={width}
      height={height}
      className={className}
      alt="LG 트윈스 로고"
    />
  )
}

export default LG
