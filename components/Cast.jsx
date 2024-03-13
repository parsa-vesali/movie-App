import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Cast = ({ cast }) => {
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
                            <TouchableOpacity key={index} className="mr-4 items-center">
                                <View className="rounded-full overflow-hidden h-20 w-20 items-center border border-neutral-500">
                                    <Image
                                        source={require('../assets/slider/cast.webp')}
                                        className="rounded-2xl h-20 w-20"
                                    />
                                </View>

                                <Text className="text-white text-xs mt-1">
                                    {
                                        characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName
                                    }
                                </Text>
                                <Text className="text-white text-xs mt-1">
                                    {
                                        personName.length > 10 ? personName.slice(0, 10) + '...' : personName
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