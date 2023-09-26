import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="none"
      stroke="#fff"
      strokeWidth={1.5}
      d="M4 12a8 8 0 0 0 11.5 7.196l4 .804-.5-4.124A8 8 0 1 0 4 12Z"
    />
  </Svg>
)
export default SvgComponent
