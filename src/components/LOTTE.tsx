import React from "react"
import { LogoProps } from "./types"
import LotteLogo from "../assets/lotte.svg"

export const LOTTE: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <LotteLogo
      width={size}
      height={size}
      className={className}
      aria-label="롯데 자이언츠 로고"
    />
  )
}

export default LOTTE
