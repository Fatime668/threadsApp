import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2fff/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Circle cx={20} cy={20} r={12} stroke="#fff" strokeWidth={2} />
    <Circle
      cx={4.126}
      cy={4.126}
      r={4.126}
      stroke="#fff"
      strokeWidth={1.981}
      transform="matrix(1 0 0 -1 15.874 22.252)"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.981}
      d="M13 29.252v0a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v0"
    />
  </Svg>
)
export default SvgComponent
