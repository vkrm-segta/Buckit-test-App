import Svg, { Path } from "react-native-svg";

export default function ShareIcon() {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M3.75 9V12.75C3.75 13.9926 4.75736 15 6 15H12C13.2426 15 14.25 13.9926 14.25 12.75V9M9 12V3M9 3L6 6M9 3L12 6"
        stroke="#505050"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
