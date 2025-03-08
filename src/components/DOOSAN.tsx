import React from "react"
import { LogoProps } from "./types"
import { ReactComponent as DoosanLogo } from "../../src/assets/doosan.svg"

export const DOOSAN: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}
    >
      <DoosanLogo
        width="100%"
        height="100%"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          display: "block",
        }}
        className={className}
        aria-label="두산 베어스 로고"
      />
    </div>
  )
}

export default DOOSAN
