import { View, ScrollView } from "react-native";
import PlansCard from "@/components/molecules/cards/plans-card";
import SectionHeading from "@/components/atoms/section-heading";
import { similarExpData } from "@/services/data";

interface IExperienceProps {
  title: string;
  data?: any;
}
export default function ExperienceSection({ title, data }: IExperienceProps) {
  return (
    <View className="pl-5">
      <SectionHeading title={title} viewAll="View All" style="mt-1 pr-5" />

      <View>
        <ScrollView
          className="pb-5"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {data.map((item: any, index: number) => (
            <View key={index}>
              <PlansCard
                location={item.location}
                url={item.url}
                title={item.title}
                rating={item.rating}
                experience={item.experience}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
