import Svg, { Path } from "react-native-svg";

interface IconProps {
  fill?: string;
}

export default function BigHeartIcon({ fill }: IconProps) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M3.23851 4.73851C1.9205 6.05653 1.9205 8.19347 3.23851 9.51149L9.00004 15.273L14.7615 9.51149C16.0795 8.19347 16.0795 6.05653 14.7615 4.73851C13.4435 3.4205 11.3065 3.4205 9.98851 4.73852L9.00004 5.72707L8.01149 4.73851C6.69347 3.4205 4.55653 3.4205 3.23851 4.73851Z"
        stroke={fill === "red" ? "red" : "#505050"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={fill}
      />
    </Svg>
  );
}
