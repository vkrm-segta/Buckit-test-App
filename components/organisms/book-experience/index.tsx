import { View, ScrollView } from "react-native";
import BookExpCard from "@/components/molecules/cards/book-exp-card";
import SectionHeading from "@/components/atoms/section-heading";
import { bookExpData } from "@/services/data";

export default function BookExperience() {
  return (
    <View className="bg-greenBgLight pl-5 py-5 mt-2">
    <SectionHeading
      title="Book Experience"
      viewAll="View All"
      style="pr-5"
    />

    <View>
      <ScrollView
        className="pb-5"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {bookExpData.map((item, index) => (
          <View key={index}>
            <BookExpCard
              location={item.location}
              url={item.url}
              title={item.title}
              packageName={item.packageName}
              rating={item.rating}
              price={item.price}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
  )
}
