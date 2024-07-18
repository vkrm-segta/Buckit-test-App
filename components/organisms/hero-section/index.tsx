import { View, Text } from "react-native";
import { Image } from "expo-image";
import {
  BigHeartIcon,
  CheckCircleIcon,
  LeftArrowIcon,
  ShareIcon,
  EllipseIcon,
} from "@/assets/icons";
import IconButton from "@/components/atoms/icon-button";
import { useState } from "react";

export default function HeroSection() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View className="relative w-full">
      {/* Top Buttons */}
      <View className="z-20 absolute top-16 w-full flex flex-row justify-between px-5">
        <IconButton>
          <LeftArrowIcon />
        </IconButton>

        <View className="flex flex-row">
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton onPress={() => setIsLiked(!isLiked)} style="mx-2">
            <BigHeartIcon fill={isLiked ? "red" : "none"} />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </View>
      </View>

      <Image
        source={require("../../../assets/images/melbourne-park.png")}
        contentFit="cover"
        style={{ width: "100%", height: 390 }}
        className="sticky"
      />

      {/* Ellipse */}
      <View className="z-20 h-10 absolute bottom-[90px] w-full flex flex-row justify-center items-center px-5">
        <View className="mx-0.5">
          <EllipseIcon fill="#818791" />
        </View>
        <View className="mx-0.5">
          <EllipseIcon />
        </View>
        <View className="mx-0.5">
          <EllipseIcon fill="#818791" />
        </View>
        <View className="mx-0.5">
          <EllipseIcon fill="#818791" />
        </View>
        <View className="mx-0.5">
          <EllipseIcon fill="#818791" />
        </View>
      </View>

      {/* Side card */}
      <View className="z-20 h-8 flex items-center justify-center absolute bottom-[105px] right-5 bg-black/50 rounded-lg px-3">
        <Text className="text-white z-30 text-sm text-center font-medium">
          1/20
        </Text>
      </View>
    </View>
  );
}
