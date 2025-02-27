import React from "react"
import { LogoProps } from "./types"
import ssgLogo from "../assets/ssg.svg"

export const SSG: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  const aspectRatio = 432 / 254.7
  const width = size
  const height = size / aspectRatio

  return (
    <img
      src={ssgLogo}
      width={width}
      height={height}
      className={className}
      alt="SSG 랜더스 로고"
    />
  )
}

export default SSG
