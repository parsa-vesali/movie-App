import React, { useState } from "react";
import { View, Text, StatusBar, Platform, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { styles } from '../theme'
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";
const ios = Platform.OS == "ios";

const HomeScreen = () => {

  const [trending, setTrending] = useState([1, 2, 3])
  const [upcoming, setUpcoming] = useState([1, 2, 3])
  const [topRated, setTopRated] = useState([1, 2, 3])

  return (

    <View className="flex-1 bg-neutral-800">

      {/* SEARCH BAR AND LOGO */}
      <SafeAreaView className={ios ? "mb-2" : "mt-3 mb-3"}>
        <StatusBar style={"light"} />
        <View className="flex-row items-center justify-between mx-4  ">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >


        {/* TRENDING MOVIES SLIDER */}
        <TrendingMovies data={trending} />

        {/* UPCOMING MOVIES ROW */}
        <MovieList title={'Uncoming'} data={upcoming} />

      </ScrollView>

    </View>
  );
};

export default HomeScreen;
