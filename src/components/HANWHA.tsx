import React from "react"
import { LogoProps } from "./types"
import HanwhaLogo from "../assets/hanwha.svg"

export const HANWHA: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <HanwhaLogo
      width={size}
      height={size}
      className={className}
      aria-label="한화 이글스 로고"
    />
  )
}

export default HANWHA
