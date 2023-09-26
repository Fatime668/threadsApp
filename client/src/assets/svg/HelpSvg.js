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
    <Circle cx={19.5} cy={19.5} r={12.375} stroke="#fff" strokeWidth={2.25} />
    <Circle cx={19.5} cy={19.5} r={6.75} stroke="#fff" strokeWidth={2.25} />
    <Path
      stroke="#fff"
      strokeLinecap="square"
      strokeWidth={5.625}
      d="m12.187 12.75.563.563M12.187 26.813l.563-.563M25.687 12.75l-.562.563M25.687 26.813l-.562-.563"
    />
  </Svg>
)
export default SvgComponent
