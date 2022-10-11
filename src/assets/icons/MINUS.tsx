import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={12} r={11.5} stroke="#C3C8D2" />
    <Path d="M7 12h9.532" stroke="#38106A" strokeWidth={2} />
  </Svg>
)

export default SvgComponent
