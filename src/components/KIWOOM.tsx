import React from "react"
import { LogoProps } from "./types"
import KiwoomLogo from "../../src/assets/kiwoom.svg"

export const KIWOOM: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <KiwoomLogo
      width={size}
      height={size}
      className={className}
      aria-label="키움 히어로즈 로고"
    />
  )
}

export default KIWOOM
