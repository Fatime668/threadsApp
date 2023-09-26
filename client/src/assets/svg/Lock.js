import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2fff/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E0E4EB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.507}
      d="M3.75 15.78h10.5a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75Z"
    />
    <Path
      stroke="#E0E4EB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.507}
      d="M6.923 6.78h4.154a.173.173 0 0 0 .173-.173V4.53a2.25 2.25 0 0 0-4.5 0v2.077c0 .096.077.173.173.173Z"
    />
  </Svg>
)
export default SvgComponent
