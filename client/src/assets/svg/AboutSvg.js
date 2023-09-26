import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Circle cx={20} cy={20} r={12} stroke="#fff" strokeWidth={2} />
    <Circle cx={19.5} cy={15.25} r={1.25} fill="#fff" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.875}
      d="M17 25.25h5M17.625 17.75H19.5v7.5"
    />
  </Svg>
)
export default SvgComponent
