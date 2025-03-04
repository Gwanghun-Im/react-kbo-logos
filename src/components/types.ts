export interface LogoProps {
  size?: number
  className?: string
}

declare module "*.svg" {
  import React from "react"
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
