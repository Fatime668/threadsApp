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
    <Circle cx={16} cy={16} r={13.846} stroke="#fff" strokeWidth={2.4} />
    <Path
      stroke="#fff"
      strokeWidth={2.4}
      d="M17.065 29.846c-4.706 0-8.52-6.199-8.52-13.846s3.814-13.846 8.52-13.846"
    />
    <Path
      stroke="#fff"
      strokeWidth={2.4}
      d="M14.935 29.846c4.118 0 7.456-6.199 7.456-13.846S19.053 2.154 14.935 2.154M3.219 10.675h25.562M3.219 21.325h25.562"
    />
  </Svg>
)
export default SvgComponent
