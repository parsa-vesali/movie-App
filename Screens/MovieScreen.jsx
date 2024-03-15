import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/Cast'
import MovieLoist from '../components/MovieList'
import Loading from "../components/Loading";


var { width, height } = Dimensions.get('window')
const ios = Platform.OS == 'ios'
const topMargin = ios ? '' : 'mt-5'

const MovieScreen = () => {

    const { params: item } = useRoute()
    const [isFavourite, setIsFavourite] = useState(false)
    const navigation = useNavigation()
    const [cast, setCast] = useState([1, 2, 3, 4, 5])
    const [similarMovies, setsimilarMovies] = useState([1, 2, 3, 4, 5])
    const [loading, setLoading] = useState(true)
    let movieName = 'Spider Man no way home!'


    useEffect(() => {
        // call the movie api
    }, [item])



    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 70 }}
            className="flex-1 bg-neutral-900"
        >

            {/* MOVIE POSTER AND BACK BUTTON */}
            <View className='w-full '>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 " + topMargin}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
                        <HeartIcon size='35' color={isFavourite ? 'crimson' : 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>
                {
                    loading ? (
                        <Loading />
                    ) : (
                        <View>
                            <Image
                                source={require('../assets/slider/slider-1.png')}
                                style={{
                                    width,
                                    height: height * 0.55,
                                }}
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                                style={{ width, height: height * 0.40 }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0"
                            />
                        </View>
                    )
                }


            </View>

            {/* Movie Details */}
            <View className="space-y-3" style={{ marginTop: -(height * 0.09) }}>

                {/* TITLE */}
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movieName}
                </Text>

                {/* Status , Relaes , runtime  */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released . 2024 . 70 min
                </Text>

                {/* Genres */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Action .
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Threll .
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        comedy
                    </Text>
                </View>

                {/* Description */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi consequatur at voluptatibus quidem repellat laudantium hic iusto necessitatibus ab.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi consequatur at voluptatibus quidem repellat laudantium hic iusto necessitatibus ab.
                </Text>
            </View>

            {/* Cast */}
            <Cast cast={cast} navigation={navigation} />

            {/* Similar Movies  */}
            <MovieLoist title="Similar Movies" hideSeeAll={true} data={similarMovies} />
        </ScrollView>
    )


}

export default MovieScreen