import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, TouchableOpacity } from 'react-native'
import { View, Text, Dimensions, ScrollView, Platform } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../theme'
import MovieList from '../components/MovieList'
import Loading from "../components/Loading";


var { width, height } = Dimensions.get('window')
const ios = Platform.OS == 'ios'
const topMargin = ios ? '' : 'my-5'

const PersonScreen = () => {
    const navigation = useNavigation()
    const [isFavourite, setIsFavourite] = useState(false)
    const [presonMovies, setPresonMovies] = useState([1, 2, 3, 4, 5])
    const [loading, setLoading] = useState(false)
    return (
        <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{ paddingBottom: 20 }} >
            {/* back btn */}
            <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-4 " + topMargin}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                    <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
                    <HeartIcon size='35' color={isFavourite ? 'crimson' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>


            {/* PERSON DETAILS */}
            {
                loading ? (
                    <Loading />
                ) : (
                    <View>
                        <View
                            className="flex-row justify-center"
                            style={{
                                shadowColor: 'gray',
                                shadowRadius: 10,
                                shadowOffset: { width: 0, height: 5 },
                                shadowOpacity: 1,
                            }}
                        >
                            <View className="items-center rounded-full overflow-hidden h-72 w72 border-2 border-neutral-500">
                                <Image
                                    source={require('../assets/slider/cast.webp')}
                                    style={{
                                        height: height * 0.43,
                                        width: width * 0.74,
                                    }}
                                />
                            </View>

                        </View>
                        <View className="mt-6">
                            <Text className="text-3xl text-white font-bold text-center">Tom hardy</Text>
                            <Text className="text-base font-bold text-center text-neutral-500">
                                London , united kingdon
                            </Text>
                        </View>
                        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Gender</Text>
                                <Text className="text-neutral-300 font-semibold">Male</Text>
                            </View>
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Birthday</Text>
                                <Text className="text-neutral-300 font-semibold">1963-09-02</Text>
                            </View>
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Known for</Text>
                                <Text className="text-neutral-300 font-semibold">action</Text>
                            </View>
                            <View className="px-2 items-center">
                                <Text className="text-white font-semibold">popularity</Text>
                                <Text className="text-neutral-300 font-semibold">56.05</Text>
                            </View>
                        </View>

                        <View className="my-6 mx-4 space-y-2">
                            <Text className="text-white text-lg">BioGraphy</Text>
                            <Text className="text-neutral-400 tracking-wide">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, praesentium illum reprehenderit est perferendis adipisci pariatur explicabo itaque sint facere libero, similique accusantium sit amet repellendus cumque porro illo? In nihil dolorum rerum quae earum asperiores voluptatum assumenda sit at!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa non, commodi optio quo alias inventore sunt molestias tempore culpa?
                            </Text>
                        </View>

                        {/* Movies */}
                        <MovieList data={presonMovies} title='Movies' hideSeeAll={true} />
                    </View>
                )
            }

        </ScrollView>
    )
}


export default PersonScreen