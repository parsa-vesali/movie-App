import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { image185 } from '../api/moviedb'

const Cast = ({ cast, navigation }) => {
    const personName = 'Tom Hardy'
    const characterName = 'jhon'
    return (
        <View className="my-6">
            <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity key={index} className="mr-4 items-center" onPress={() => navigation.navigate('Person', person)}>
                                <View className="rounded-full overflow-hidden h-20 w-20 items-center border border-neutral-500">
                                    <Image
                                        // source={require('../assets/slider/cast.webp')}
                                        source={{ uri: image185(person?.profile_path) }}
                                        className="rounded-2xl h-20 w-20"
                                    />
                                </View>

                                <Text className="text-white text-xs mt-1">
                                    {
                                        person?.character.length > 10 ? character.slice(0, 10) + '...' : character
                                    }
                                </Text>
                                <Text className="text-white text-xs mt-1">
                                    {
                                        person?.original_name.length > 10 ? original_name.slice(0, 10) + '...' : original_name
                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

export default Cast