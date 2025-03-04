import React from "react"
import { LogoProps } from "./types"
import NCLogo from "../assets/nc.svg"

export const NC: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <NCLogo
      width={size}
      height={size}
      className={className}
      aria-label="NC 다이노스 로고"
    />
  )
}

export default NC
