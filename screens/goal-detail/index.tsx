import { View, Text, ScrollView, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  mightAlsoLikeData,
  similarExpData,
  trendingExpData,
} from "@/services/data";
import HeroSection from "@/components/organisms/hero-section";
import GoalHeading from "@/components/organisms/goal-heading";
import About from "@/components/organisms/about";
import ViewOnMap from "@/components/organisms/view-on-map";
import BookExperience from "@/components/organisms/book-experience";
import PhotosGallery from "@/components/organisms/photos-gallery";
import Reviews from "@/components/organisms/reviews";
import ExperienceSection from "@/components/organisms/experiences";
import Footer from "@/components/organisms/footer";

export default function GoalDetails() {
  return (
    <ScrollView
      style={{ backgroundColor: "white", marginBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="light" />
      <HeroSection />
      <GoalHeading />
      <About />
      <ViewOnMap />
      <ExperienceSection title="Similar Experiences" data={similarExpData} />
      <BookExperience />
      <PhotosGallery />
      <Reviews />
      <ExperienceSection
        title="You might also like..."
        data={mightAlsoLikeData}
      />
      <ExperienceSection title="Trending Experiences" data={trendingExpData} />
      <Footer />
    </ScrollView>
  );
}
