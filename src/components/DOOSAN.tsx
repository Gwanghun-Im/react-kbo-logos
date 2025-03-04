import React from "react"
import { LogoProps } from "./types"
import { ReactComponent as DoosanLogo } from "../../src/assets/doosan.svg"

export const DOOSAN: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <DoosanLogo
      width={size}
      height={size}
      className={className}
      aria-label="두산 베어스 로고"
    />
  )
}

export default DOOSAN
