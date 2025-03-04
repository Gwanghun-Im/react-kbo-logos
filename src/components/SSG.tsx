import React from "react"
import { LogoProps } from "./types"
import SSGLogo from "../assets/ssg.svg"

export const SSG: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <SSGLogo
      width={size}
      height={size}
      className={className}
      aria-label="SSG 랜더스 로고"
    />
  )
}

export default SSG
