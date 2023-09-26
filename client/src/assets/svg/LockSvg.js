import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2fff/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Rect
      width={18}
      height={15}
      x={11}
      y={17}
      stroke="#fff"
      strokeWidth={2}
      rx={3}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M15 17v-4a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v4"
    />
  </Svg>
)
export default SvgComponent
