import Svg, { Path } from "react-native-svg";

interface Icon {
  fill: string;
}
export default function HeartIcon({ fill }: Icon) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M3.59835 5.26504C2.13388 6.7295 2.13388 9.10387 3.59835 10.5683L10 16.97L16.4017 10.5683C17.8661 9.10387 17.8661 6.7295 16.4016 5.26504C14.9372 3.80057 12.5628 3.80057 11.0983 5.26504L10 6.36343L8.90165 5.26504C7.43718 3.80057 5.06282 3.80057 3.59835 5.26504Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={fill}
      />
    </Svg>
  );
}
