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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 13.5V9a3 3 0 0 1 3-3h7.5m0 0-3-3m3 3-3 3m6.5 1.5V15a3 3 0 0 1-3 3H8.5m0 0 3 3m-3-3 3-3"
    />
  </Svg>
)
export default SvgComponent
