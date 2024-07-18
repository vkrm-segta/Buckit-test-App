import Svg, { Circle } from "react-native-svg";

interface IconProps {
  fill?: string;
}
export default function EllipseIcon({ fill }: IconProps) {
  return (
    <Svg width="6" height="6" viewBox="0 0 6 6" fill="none">
      <Circle cx="3" cy="3" r="3" fill={fill ? `${fill}` : "white"} />
    </Svg>
  );
}
