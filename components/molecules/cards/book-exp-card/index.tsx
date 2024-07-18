import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import ThreeDotIcon from "@/assets/icons/three-dot";
import SmallStarIcon from "@/assets/icons/small-star";
import WhiteLocationIcon from "@/assets/icons/white-location-point";
import HeartIcon from "@/assets/icons/heart";
import { ICardProps } from "./types";
import { useState } from "react";

export default function BookExpCard({
  location,
  url,
  title,
  packageName,
  rating,
  price,
}: ICardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View
      style={styles.shadowAround}
      className="w-[200px] h-[233px] relative bg-white rounded-xl shadow-sm mt-5 mr-4"
    >
      <View className="w-full absolute top-2.5 z-20 flex flex-row justify-between px-3">
        <View className="flex flex-row items-center">
          <WhiteLocationIcon />
          <Text className="text-white text-[10px] ml-0.5">{location}</Text>
        </View>
        <Pressable onPress={() => setIsLiked(!isLiked)}>
          <HeartIcon fill={isLiked ? "white" : "none"} />
        </Pressable>
      </View>
      <Image
        source={require("../../../../assets/images/shadow.png")}
        contentFit="cover"
        style={{ width: 200, height: 120 }}
        className="rounded-t-xl absolute top-0 z-10"
      />
      <Image
        source={url}
        contentFit="cover"
        style={{ width: 200, height: 120 }}
        className="rounded-t-xl"
      />
      <View className="p-2.5">
        <View className="flex flex-row overflow-hidden">
          <View className="w-[88%]">
            <Text className="text-sm text-textDarkGrey font-medium">
              {title}
            </Text>
          </View>
          <View className="px-2 h-6 pt-1 ">
            <ThreeDotIcon />
          </View>
        </View>
        <Text className="text-xs text-textLightGrey py-1">{packageName}</Text>
        <View className="flex flex-row items-center justify-between mt-auto">
          <View className="flex flex-row items-center">
            <SmallStarIcon />
            <Text className="text-textDarkGrey text-xs font-medium mt-0.5 ml-1">
              {rating}
            </Text>
          </View>

          <Text className="text-sm font-semibold text-textDarkGrey mt-0.5">
            From ${price}
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
