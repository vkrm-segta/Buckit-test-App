import Svg, { Path } from "react-native-svg";

export default function LeftArrowIcon() {
  return (
    <Svg width="14" height="12" viewBox="0 0 14 12" fill="none">
      <Path
        d="M13 6H1M1 6L5.5 1.5M1 6L5.5 10.5"
        stroke="#505050"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
