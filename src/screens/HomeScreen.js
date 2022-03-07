import { FlatList, ScrollView, SafeAreaView } from "react-native";
import { Heading } from "../components/ReusableItems";
import { woofPostsData } from "../data/WoofPosts";
import { trendingWoofsData } from "../data/TrendingWoofs";
import { WoofPost } from "../components/WoofPost";
import { WoofCard } from "../components/WoofCard";
import * as React from "react";

export const HomeScreen = (props) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF9FA" }}>
    <ScrollView>
      <Heading>Trending Woofs</Heading>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          data={trendingWoofsData.woofs}
          renderItem={({ item }) => (
            <WoofCard key={item.id} name={item.name} avatar={item.avatar} />
          )}
        />
      </ScrollView>
      <ScrollView>
        <Heading>New Woof Posts</Heading>
        <ScrollView>
          <FlatList
            data={woofPostsData.posts}
            renderItem={({ item }) => (
              <WoofPost
                image={item.image}
                title={item.title}
                description={item.description}
              />
            )}
          />
        </ScrollView>
      </ScrollView>
    </ScrollView>
  </SafeAreaView>
);
