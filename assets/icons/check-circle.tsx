import Svg, { Path, Circle } from "react-native-svg";

export default function CheckCircleIcon() {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M5.25 9.75L7.5 12L12.75 6.75"
        stroke="#505050"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle
        cx="9"
        cy="9"
        r="6.75"
        stroke="#505050"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
