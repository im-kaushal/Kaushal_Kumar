import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m45.736 13.901-.088-.088L35.172 5.01a.673.673 0 0 0-.44-.176l-4.401-.528.704-.88c.264-.353.264-.969-.088-1.233L28.482.433s-.264-.265-.528-.265H18.094c-.088 0-.176.088-.264.088l-2.817 1.85c-.44.263-.528.791-.264 1.231 0 0 0 .089.088.089l.704.88-4.401.528a.672.672 0 0 0-.44.176L.312 13.813c-.352.352-.44.88-.088 1.232l.088.089 8.01 7.922v19.895c0 .528.353.88.881.88h27.642c.528 0 .88-.352.88-.88V23.056l8.01-7.922a.85.85 0 0 0 0-1.233ZM29.01 3.073l-4.137 5.282-.617-1.496s.088 0 .088-.088l3.61-4.402 1.056.704Zm-10.916-.88 3.697 4.578L21 8.355l-4.225-5.282 1.32-.88Zm4.05 39.878H9.996V17.422c0-.528-.353-.88-.88-.88-.53 0-.881.352-.881.88v3.081L2.16 14.517l9.419-8.01 5.194-.617 3.785 4.754c.264.352.88.44 1.232.176l.265-.264.088-.088v31.603Zm.968-36.709h-.176L20.119 1.93h5.898L23.2 5.362h-.088Zm14.525 15.23V17.51c0-.528-.352-.88-.88-.88-.529 0-.88.352-.88.88V42.16h-12.06V37.14h.703c.529 0 .88-.352.88-.88s-.351-.88-.88-.88h-.704v-5.282h.704c.529 0 .88-.352.88-.88 0-.529-.351-.881-.88-.881h-.704v-5.282h.704c.529 0 .88-.352.88-.88s-.351-.88-.88-.88h-.704v-5.282h.704c.529 0 .88-.352.88-.88 0-.529-.351-.88-.88-.88h-.704v-3.786c.088.264.352.528.704.528h.177c.264 0 .528-.088.704-.352l3.697-4.754 5.194.705 9.42 8.01-6.075 5.986Z"
      fill="#38106A"
    />
  </Svg>
)

export default SvgComponent