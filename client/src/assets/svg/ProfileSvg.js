import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props,{ stroke }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Path
      stroke={stroke}
      strokeWidth={2}
      d="M8.466 26.41h15.031a2.05 2.05 0 0 0 1.916-2.78 8.202 8.202 0 0 0-7.664-5.283h-3.583a8.057 8.057 0 0 0-7.6 5.38 2.014 2.014 0 0 0 1.9 2.683ZM16.047 13.73a4.07 4.07 0 1 0 0-8.14 4.07 4.07 0 0 0 0 8.14Z"
    />
  </Svg>
)
export default SvgComponent
