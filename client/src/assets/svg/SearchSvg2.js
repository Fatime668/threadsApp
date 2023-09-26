import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="6e6e6e"
    {...props}
  >
    <Path
      stroke="#6e6e6e"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM15 15l6 6"
    />
  </Svg>
)
export default SvgComponent
