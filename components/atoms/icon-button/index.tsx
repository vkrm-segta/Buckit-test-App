import React from "react";
import { Pressable } from "react-native";

interface IButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: string;
}
export default function IconButton({ children, onPress, style }: IButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`w-8 h-8 flex justify-center items-center bg-white rounded-full ${
        style?.length && style
      }`}
    >
      {children}
    </Pressable>
  );
}
