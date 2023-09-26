import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props,{stroke,fill}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Path
      stroke={stroke}
      fill={fill}
      strokeWidth={2}
      d="M27.874 24.163v-8.816a4.813 4.813 0 0 0-1.49-3.503c-1.127-1.066-2.69-2.505-3.952-3.513-2.388-1.905-3.58-3.463-6.432-3.463-2.853 0-4.044 1.558-6.432 3.463-1.262 1.008-2.825 2.447-3.952 3.513a4.812 4.812 0 0 0-1.49 3.503v8.816a2.968 2.968 0 0 0 2.969 2.969h3.958a1.979 1.979 0 0 0 1.978-1.98v-4.348a2.968 2.968 0 0 1 5.937 0v4.349c0 1.093.887 1.979 1.98 1.979h3.957a2.968 2.968 0 0 0 2.969-2.969Z"
    />
  </Svg>
)
export default SvgComponent
