import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props,{stroke}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.5 6.25h-3.75a6 6 0 0 0-6 6v7.5a6 6 0 0 0 6 6h7.5a6 6 0 0 0 6-6V16m-9.269-.547 8.415-8.415"
    />
  </Svg>
)
export default SvgComponent
