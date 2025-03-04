import React from "react"
import { LogoProps } from "./types"
import KiaLogo from "../../src/assets/kia.svg"

export const KIA: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <KiaLogo
      width={size}
      height={size}
      className={className}
      aria-label="기아 타이거즈 로고"
    />
  )
}

export default KIA
