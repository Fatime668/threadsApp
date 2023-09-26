import * as React from "react"
import Svg, { Circle, Rect } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Circle cx={19.583} cy={19.583} r={5.779} stroke="#fff" strokeWidth={2} />
    <Circle cx={26.938} cy={12.228} r={1.576} fill="#000" />
    <Rect
      width={24.167}
      height={24.167}
      x={7.5}
      y={7.5}
      stroke="#fff"
      strokeWidth={2}
      rx={5.254}
    />
  </Svg>
)
export default SvgComponent
