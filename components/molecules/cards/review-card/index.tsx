import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import ThreeDotIcon from "@/assets/icons/three-dot";
import SmallStarIcon from "@/assets/icons/small-star";
import WhiteLocationIcon from "@/assets/icons/white-location-point";
import HeartIcon from "@/assets/icons/heart";
import ThumsUp from "@/assets/icons/thums-up";
import ThumsUpIcon from "@/assets/icons/thums-up";
import { ICardProps } from "./types";

export default function ReviewCard({
  userImg,
  userName,
  timeStamp,
  likes,
  rating,
  categaories,
  review,
  reviewImg,
}: ICardProps) {
  return (
    <View className="w-[290px] h-[230px] border border-borderLightGrey relative bg-white rounded-xl mt-5 mr-5 mb-1 p-2">
      <View className="flex flex-row">
        <Image
          source={userImg}
          contentFit="cover"
          style={{ width: 30, height: 30 }}
          className="rounded-full"
        />
        <View className="ml-2">
          <Text className="text-sm font-semibold text-textDarkGrey">
            {userName}
          </Text>
          <Text className="text-[10px] text-textLightGrey">{timeStamp}</Text>
        </View>
        <View className="flex flex-row ml-auto">
          <View className="h-6 bg-blueBgLight flex flex-row items-center justify-center rounded-full px-1.5">
            <ThumsUpIcon />
            <Text className="text-xs font-medium ml-0.5">{likes}</Text>
          </View>
          <View className="h-6 bg-yellowBgLight flex flex-row items-center justify-center rounded-full px-1.5 ml-3">
            <SmallStarIcon />
            <Text className="text-xs font-medium ml-0.5">{rating}</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row py-3">
        {categaories.map((category, index) => (
          <View
            key={index}
            className="px-2 py-1 bg-blueBgLight border border-blueBg rounded-full mr-1.5"
          >
            <Text className="text-xs text-bluePrimary">{category}</Text>
          </View>
        ))}
      </View>
      <Text className="text-xs text-textDarkGrey">{review}</Text>
      <View className="flex flex-row mt-auto">
        <Image
          source={reviewImg}
          contentFit="cover"
          style={{ width: 87, height: 60 }}
          className="rounded-lg mr-1.5"
        />
        <Image
          source={reviewImg}
          contentFit="cover"
          style={{ width: 87, height: 60 }}
          className="rounded-lg mr-1.5"
        />
        <View className="relative flex justify-center items-center">
          <Image
            source={require("../../../../assets/images/review-shadow.png")}
            contentFit="cover"
            style={{ width: 87, height: 60 }}
            className="rounded-lg absolute top-0 right-0 z-10"
          />
          <Text className="absolute text-white text-base font-medium z-20">
            +6
          </Text>
          <Image
            source={reviewImg}
            contentFit="cover"
            style={{ width: 87, height: 60 }}
            className="rounded-lg"
          />
        </View>
      </View>
    </View>
  );
}
