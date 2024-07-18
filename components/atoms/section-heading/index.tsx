import React from "react";
import { Text, View } from "react-native";

interface IHeadingProps {
  title: string;
  viewAll?: string;
  style?: string;
}
export default function SectionHeading({
  title,
  viewAll,
  style,
}: IHeadingProps) {
  return (
    <View className={`flex flex-row items-center ${style?.length && style}`}>
      <View className="w-1 h-[18px] rounded-full bg-greenPrimary" />
      <Text className="text-lg font-medium text-textDarkGrey ml-1.5">
        {title}
      </Text>
      <Text className="text-base font-medium text-bluePrimary ml-auto">
        {viewAll}
      </Text>
    </View>
  );
}
