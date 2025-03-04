import React from "react"
import { LogoProps } from "./types"
import KIALogo from "../assets/kia.svg"

export const KIA: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <KIALogo
      width={size}
      height={size}
      className={className}
      aria-label="KIA 타이거즈 로고"
    />
  )
}

export default KIA
