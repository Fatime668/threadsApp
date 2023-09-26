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
    <Circle
      cx={5}
      cy={5}
      r={5}
      stroke="#fff"
      strokeWidth={2.4}
      transform="matrix(1 0 0 -1 19.5 20)"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.4}
      d="M16.1 30.6v-1.2a6 6 0 0 1 6-6h5.4a6 6 0 0 1 6 6v1.2M11.3 13.8V21M14.9 17.4H7.7"
    />
  </Svg>
)
export default SvgComponent
