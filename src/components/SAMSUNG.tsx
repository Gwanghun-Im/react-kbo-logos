import React from "react"
import { LogoProps } from "./types"
import SamsungLogo from "../../src/assets/samsung.svg"

export const SAMSUNG: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <SamsungLogo
      width={size}
      height={size}
      className={className}
      aria-label="삼성 라이온즈 로고"
    />
  )
}

export default SAMSUNG
