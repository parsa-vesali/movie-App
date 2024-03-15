import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Platform, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { styles } from '../theme'
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";
import { fetchTrendingMovies } from "../api/moviedb";
import { fetchUpcomingMovies } from "../api/moviedb";
import { fetchtopRatedMovies } from "../api/moviedb";
const ios = Platform.OS == "ios";

const HomeScreen = () => {

  const [trending, setTrending] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [topRated, setTopRated] = useState([])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()


  useEffect(() => {
    getTrendingMovies()
    getUpcomingMovies()
    getTopRatedMovies()
  }, [])

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies()
    if (data && data.results) {
      setTrending(data.results)
      setLoading(false)
    }
  }
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies()
    if (data && data.results) {
      setUpcoming(data.results)
    }
  }
  const getTopRatedMovies = async () => {
    const data = await fetchtopRatedMovies()
    if (data && data.results) {
      setTopRated(data.results)

    }
  }

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
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {
        loading ? (
          <Loading />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >


            {/* TRENDING MOVIES SLIDER */}
            {trending.length > 0 && <TrendingMovies data={trending} />}

            {/* UPCOMING MOVIES ROW */}
            <MovieList title='Uncoming' data={upcoming} />


            {/* TopRated MOVIES ROW */}
            <MovieList title='Top Rated' data={topRated} />

          </ScrollView>

        )
      }


    </View>
  );
};

export default HomeScreen;
