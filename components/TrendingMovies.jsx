import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel'

var { width, height } = Dimensions.get('window')


const TrendingMovies = ({ data }) => {

    const navigation = useNavigation()
    const handleClick = () => {
        navigation.navigate('Movie', item)
    }

    return (
        <View className="mb-8">
            <Text className="text-white mb-5 mx-4 text-xl">Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{ display: 'flex', alignItems: 'center', }}
            />
        </View>
    )
}

const MovieCard = ({ item, handleClick }) => {
    return (
        <TouchableOpacity onPress={handleClick}>
            <Image
                source={require('../assets/slider/slider-2.webp')}
                style={{
                    width: width * 0.6,
                    height: height * 0.4
                }}
                className={'rounded-3xl'}
            />
        </TouchableOpacity>
    )
}

export default TrendingMovies