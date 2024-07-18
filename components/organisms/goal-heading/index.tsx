import { View, Text } from "react-native";
import LocationPointFillIcon from "@/assets/icons/location-point-fill";
import { DividerIcon, StarIcon } from "@/assets/icons";

export default function GoalHeading() {
  return (
    <View className="px-5 -mt-24 z-40 bg-white rounded-t-3xl pt-5">
      <Text className="text-lg text-textDarkGrey font-semibold">
        Melbourne Park Tennis Experience
      </Text>
      <View className="flex flex-row items-center py-1">
        <LocationPointFillIcon />
        <Text className="text-sm text-textDarkGrey ml-0.5">
          Melbourne, Victoria, Australia
        </Text>
      </View>
      <View className="flex flex-row items-center py-1">
        <StarIcon />
        <Text className="text-sm font-medium ml-1.5">4.5</Text>
        <Text className="text-sm text-bluePrimary mx-2">22 reviews</Text>
        <DividerIcon />
        <Text className="text-sm text-greenPrimary ml-2">10k+</Text>
        <Text className="text-sm text-textDarkGrey ml-1.5">Buckited</Text>
      </View>
      <View className="flex flex-row py-2">
        <View className="px-2 py-1 bg-blueBgLight border border-blueBg rounded-full mr-1.5">
          <Text className="text-xs text-bluePrimary">Sports</Text>
        </View>
        <View className="px-2 py-1 bg-blueBgLight border border-blueBg rounded-full mr-1.5">
          <Text className="text-xs text-bluePrimary">Activity</Text>
        </View>
        <View className="px-2 py-1 bg-blueBgLight border border-blueBg rounded-full mr-1.5">
          <Text className="text-xs text-bluePrimary">Outdoor</Text>
        </View>
      </View>
      <View className="w-full h-0.5 bg-border2LightGrey my-2.5" />
    </View>
  );
}
