import { View, Text, ScrollView } from "react-native";
import FallingStarIcon from "@/assets/icons/falling-star";
import ReviewCard from "@/components/molecules/cards/review-card";
import SectionHeading from "@/components/atoms/section-heading";
import { ChevronUp } from "@/assets/icons";
import { reviewsData } from "@/services/data";

export default function Reviews() {
  return (
    <View className="pl-4 mt-7">
      <SectionHeading title="Reviews" viewAll="View All" style="pr-5" />

      <View>
        <ScrollView
          className="pb-5 pl-1"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {reviewsData.map((item, index) => (
            <View key={index}>
              <ReviewCard
                userImg={item.userImg}
                userName={item.userName}
                timeStamp={item.timeStamp}
                likes={item.likes}
                rating={item.rating}
                categaories={item.categaories}
                review={item.review}
                reviewImg={item.reviewImg}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View className="flex flex-row items-center border rounded-lg border-borderLightGrey p-2 mr-5 ml-1">
        <View className="w-8 h-8 flex items-center justify-center rounded-full bg-blueBgLight">
          <FallingStarIcon />
        </View>
        <Text className="text-lg text-textDarkGrey font-medium ml-2">Add your experience</Text>
        <View className="ml-auto">
          <ChevronUp />
        </View>
      </View>
      <View className="mr-5 ml-1 mt-5">
        <View className="w-full h-0.5 bg-border2LightGrey my-1" />
      </View>
    </View>
  );
}
