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
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.5 5.5h-15L10 11m9.5-5.5-7.5 13-2-7.5m9.5-5.5L10 11"
    />
  </Svg>
)
export default SvgComponent
