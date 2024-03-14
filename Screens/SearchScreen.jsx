import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Dimensions, Platform, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { SafeAreaView } from 'react-native-safe-area-context'
import Loading from "../components/Loading";

var { width, height } = Dimensions.get('window')
const ios = Platform.OS == 'ios'

const SearchScreen = () => {
    const navigation = useNavigation()
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    let movieName = 'SHOGUN PART 2'
    return (
        <SafeAreaView className="bg-neutral-800 flex-1">
            <View className="mx-4 mt-5 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
                <TextInput
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="rounded-full p-3 m-1 bg-neutral-500 "
                >
                    <XMarkIcon size="25" color="white" />
                </TouchableOpacity>
            </View>

            {/* RESULTS */}
            {
                loading ? (
                    <Loading />
                ) :
                    results.length > 0 ? (
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                            className="space-y-3"
                        >
                            <Text className="text-white ml-1 font-semibold">
                                Results ({results.length})
                            </Text>
                            <View className="flex-row justify-between flex-wrap">
                                {
                                    results.map((item, index) => {
                                        return (
                                            <TouchableWithoutFeedback
                                                key={index}
                                                onPress={() => navigation.push('Movie', item)}
                                            >
                                                <View className="space-y-2 mb-4">
                                                    <Image
                                                        source={require('../assets/slider/slider-2.webp')}
                                                        className="rounded-3xl"
                                                        style={{
                                                            width: width * 0.44,
                                                            height: height * 0.3
                                                        }}
                                                    />
                                                    <Text className="ml-1 text-neutral-300">
                                                        {
                                                            movieName.length > 20 ? movieName.slice(0, 20) + '...' : movieName
                                                        }
                                                    </Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    ) : (
                        <View className=" justify-center items-center">
                            <Image
                                className="mt-5"
                                source={require('../assets/search-movie.png')}
                                style={{
                                    width: width * 0.90,
                                    height: height * 0.40
                                }}
                            />
                            <Text className="my-5 font-bold text-2xl text-white">
                                Ups!... no results found
                            </Text>
                            <Text className="text-base text-neutral-400">
                                Please try another search
                            </Text>
                        </View>
                    )
            }



        </SafeAreaView>
    )
}

export default SearchScreen