import { View } from "react-native";
import { Image } from "expo-image";
import SectionHeading from "@/components/atoms/section-heading";

export default function PhotosGallery() {
  return (
    <View className="px-5 mt-5">
      <SectionHeading title="Photos" viewAll="View All" />

      <View className="w-full h-[250px] rounded-md overflow-hidden mt-5">
        <View className="flex flex-row">
          <View className="w-1/2">
            <Image
              source={require("../../../assets/images/collage-1.png")}
              className="h-[104px] w-full rounded-tl-md"
            />
            <Image
              source={require("../../../assets/images/collage-2.png")}
              className="h-[143px] w-full mt-1 rounded-bl-md"
            />
          </View>
          <View className="w-1/2 pl-1">
            <Image
              source={require("../../../assets/images/collage-3.png")}
              className="h-[250px] w-full rounded-r-md"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
