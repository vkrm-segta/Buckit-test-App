import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import ThreeDotIcon from "@/assets/icons/three-dot";
import SmallStarIcon from "@/assets/icons/small-star";
import WhiteLocationIcon from "@/assets/icons/white-location-point";
import HeartIcon from "@/assets/icons/heart";
import { ICardProps } from "./types";
import { useState } from "react";

export default function PlansCard({
  location,
  url,
  title,
  rating,
  experience,
}: ICardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View
      style={styles.shadowAround}
      className="h-[224px] w-[170px] relative bg-white rounded-xl shadow mt-5 mr-2.5"
    >
      <View className="w-full absolute top-2.5 z-10 flex flex-row justify-between px-3">
        <View className="flex flex-row items-center">
          <WhiteLocationIcon />
          <Text className="text-white text-[10px] ml-0.5">{location}</Text>
        </View>
        <Pressable onPress={() => setIsLiked(!isLiked)}>
          <HeartIcon fill={isLiked ? "white" : "none"} />
        </Pressable>
      </View>
      <Image
        source={url}
        contentFit="contain"
        style={{ width: 170, height: 140 }}
      />
      <View className="p-2.5">
        <View className="flex flex-row overflow-hidden">
          <View className="w-[86%]">
            <Text className="text-sm text-textDarkGrey font-medium">
              {title}
            </Text>
          </View>
          <View className="px-2 h-6 pt-1 ">
            <ThreeDotIcon />
          </View>
        </View>

        <View className="flex flex-row items-center mt-1.5">
          <SmallStarIcon />
          <Text className="text-textDarkGrey text-xs font-medium mt-0.5 ml-1">
            {rating}
          </Text>
          <View className="w-0.5 h-3 bg-borderLightGrey mx-2 mt-0.5" />

          <Text className="text-xs text-textLightGrey mt-0.5">
            {experience}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowAround: {
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 4,
    marginBottom: 8,
  },
});
