import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props,{stroke}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeWidth={2}
      d="M21.433 21.167A9.25 9.25 0 1 0 8.32 8.117a9.25 9.25 0 0 0 13.113 13.05Zm0 0 5.44 5.44"
    />
  </Svg>
)
export default SvgComponent
