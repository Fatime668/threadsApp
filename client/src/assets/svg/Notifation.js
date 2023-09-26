import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2fff/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24 26.667h-8V28a4 4 0 0 0 8 0v-1.333ZM10.667 26.667h18.666c.737 0 1.334-.597 1.334-1.334v-.78c0-.354-.14-.694-.39-.944l-.682-.68a.894.894 0 0 1-.262-.632v-4.964a9.333 9.333 0 0 0-18.666 0v4.964a.893.893 0 0 1-.262.631l-.681.681c-.25.25-.39.59-.39.943v.781c0 .737.596 1.334 1.333 1.334Z"
    />
  </Svg>
)
export default SvgComponent
