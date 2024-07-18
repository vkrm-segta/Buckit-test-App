import { View, Text } from "react-native";
import SectionHeading from "@/components/atoms/section-heading";
import { EditIcon, ChevronUp } from "@/assets/icons";

export default function About() {
  return (
    <View className="px-5">
      <View className="mt-2">
        <SectionHeading title="About" />

        <Text className="text-sm text-textDarkGrey mt-2">
          Melbourne Park, the home of the Australian Open, offers an
          unparalleled tennis experience for enthusiasts and casual players
          alike. Located in the heart of Melbourne, this world-class venue
          provides access to the same.
        </Text>
        <Text className="text-sm font-medium text-textLightGrey my-1.5">
          Tips & Key highlights
        </Text>
        <View className="ml-2.5">
          <View className="flex flex-row items-start">
            <View className="bg-textDarkGrey h-1 w-1 mt-2 rounded-full" />
            <Text className="text-sm text-textDarkGrey ml-1.5">
              Venue: Melbourne Park, Melbourne, Australia
            </Text>
          </View>
          <View className="flex flex-row items-start">
            <View className=" bg-textDarkGrey h-1 w-1 mt-2 rounded-full" />
            <Text className="text-sm text-textDarkGrey ml-1.5">
              Features: Access to the iconic Rod Laver Arena, Margaret Court
              Arena, and other world-class courts
            </Text>
          </View>
          <View className="flex flex-row items-start">
            <View className="bg-textDarkGrey h-1 w-1 mt-2 rounded-full" />
            <Text className="text-sm text-textDarkGrey ml-1.5">
              What to Bring: Comfortable sports attire, tennis shoes, personal
              tennis gear (rackets available for rent), sunscreen, and a water
              bottle.
            </Text>
          </View>
        </View>
        <Text className="text-sm font-medium text-textLightGrey my-1.5">
          What is included?
        </Text>
        <Text className="text-sm font-medium text-bluePrimary">Read More</Text>
      </View>
      <View className="flex flex-row items-center border rounded-lg border-borderLightGrey p-2 my-4">
        <View className="w-8 h-8 flex items-center justify-center rounded-full bg-blueBgLight">
          <EditIcon />
        </View>
        <Text className="text-lg text-textDarkGrey font-medium ml-2">Suggest an Edit</Text>
        <View className="ml-auto">
          <ChevronUp />
        </View>
      </View>
      <View className="w-full h-0.5 bg-border2LightGrey my-1" />
    </View>
  );
}
