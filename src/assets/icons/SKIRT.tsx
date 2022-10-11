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
      d="m42.392 38.133-9.686-32.57V.982A.981.981 0 0 0 31.725 0h-20.45a.981.981 0 0 0-.981.981v4.583L.608 38.133a.981.981 0 0 0 .452 1.128C1.325 39.418 7.654 43 20.283 43h2.434c12.629 0 18.968-3.592 19.223-3.739a.981.981 0 0 0 .452-1.128ZM12.256 1.963h18.488V4.72H12.256V1.963Zm10.46 39.074H21.5c-10.49.187-16.78-2.217-18.762-3.13L12.01 6.683h3.385l-2.473 10.44a.981.981 0 0 0 .727 1.178h.225a.981.981 0 0 0 .982-.756l2.551-10.862h8.174l2.59 10.892a.981.981 0 0 0 .982.755h.226a.981.981 0 0 0 .726-1.177l-2.502-10.47h3.385l9.283 31.214c-1.904.884-7.782 3.14-17.555 3.14Z"
      fill="#38106A"
    />
  </Svg>
)

export default SvgComponent