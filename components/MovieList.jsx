import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

var { width, height } = Dimensions.get('window')


const MovieList = ({ title, data }) => {

    let movieName = 'Spider Man no way home!'
    const navigation = useNavigation()


    return (
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-xl">{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.text} className="text-lg">See All</Text>
                </TouchableOpacity>
            </View>
            {/* MOVIE ROW */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    data.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}
                                onPress={() => navigation.navigate('Movie', item)}
                            >
                                <View className="space-y-1 mr-4">
                                    <Image
                                        source={require('../assets/slider/slider-1.png')}
                                        className="rounded-3xl"
                                        style={{
                                            width: width * 0.33,
                                            height: height * 0.22
                                        }}
                                    />
                                    <Text className="text-neutral-300 ml-1">
                                        {
                                            movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName
                                        }
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default MovieList