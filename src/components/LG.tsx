import React from "react"
import { LogoProps } from "./types"
import LgLogo from "../assets/lg.svg"

export const LG: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <LgLogo
      width={size}
      height={size}
      className={className}
      aria-label="LG 트윈스 로고"
    />
  )
}

export default LG
