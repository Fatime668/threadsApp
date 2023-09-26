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
      d="M8 11v9.75c0 .966.784 1.75 1.75 1.75s1.75.784 1.75 1.75V27l3.914-3.914a2 2 0 0 1 1.414-.586H22.5a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.5 26.5 24 31v-2.5a2 2 0 0 1 2-2h4.5a2 2 0 0 0 2-2V15a2 2 0 0 0-2-2h-3"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.778}
      d="M16 13.445v-.89"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.333}
      d="M12 13.889h8M13.778 13.889c.148 1.481 1.422 4.622 5.333 5.333"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.333}
      d="M18.222 13.889c-.148 1.481-1.422 4.622-5.333 5.333"
    />
  </Svg>
)
export default SvgComponent
