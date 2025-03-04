import React from "react"
import { LogoProps } from "./types"
import KtLogo from "../assets/kt.svg"

export const KT: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <KtLogo
      width={size}
      height={size}
      className={className}
      aria-label="KT 위즈 로고"
    />
  )
}

export default KT
