import React from "react"
import { LogoProps } from "./types"
import KTLogo from "../assets/kt.svg"

export const KT: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <KTLogo
      width={size}
      height={size}
      className={className}
      aria-label="KT 위즈 로고"
    />
  )
}

export default KT
