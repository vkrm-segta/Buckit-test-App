import { View, Text } from "react-native";
import { Image } from "expo-image";
import SectionHeading from "@/components/atoms/section-heading";
import { PhoneIcon, LocationPointIcon } from "@/assets/icons";

export default function ViewOnMap() {
  return (
    <View className="px-5">
      <SectionHeading title="View on Maps" viewAll="View All" style="mt-4" />

      <Image
        source={require("../../../assets/images/map.png")}
        contentFit="contain"
        style={{ width: "100%", height: 120 }}
        className="mt-5"
      />
      <Text className="text-sm font-medium text-textLightGrey my-4">
        Contact and schedule details
      </Text>
      <View className="pr-5">
        <View className="flex items-center flex-row">
          <PhoneIcon />
          <Text className="ml-2 text-textDarkGrey">+61 3 9286 1600</Text>
        </View>
        <View className="flex flex-row my-2">
          <LocationPointIcon />
          <Text className="ml-2 text-textDarkGrey mt-0.5">
            Melbourne Park, Olympic Blvd, Melbourne VIC 3000, Australia
          </Text>
        </View>
      </View>
      <View className="w-full h-0.5 bg-border2LightGrey my-4" />
    </View>
  );
}
