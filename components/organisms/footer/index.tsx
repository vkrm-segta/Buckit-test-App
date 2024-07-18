import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Footer() {
  return (
    <View className="w-full flex flex-row items-center justify-between border-t border-borderLightGrey py-4 px-5">
      <Pressable className="w-[48%] rounded-lg border border-borderLightGrey py-3 px-5">
        <Text className="text-sm text-center text-textDarkGrey font-medium">
          Mark as complete
        </Text>
      </Pressable>
      <Pressable className="w-[48%] rounded-lg bg-greenPrimary border border-borderLightGrey py-3 px-5">
        <Text className="text-sm text-center text-white font-medium">
          Add to Buckit
        </Text>
      </Pressable>
    </View>
  );
}
