import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../features/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavorite from './NavFavorite'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 pb-0 text-xl">Good Day!</Text>
      <View className="border-top border-gray-200 flex-shrink px-5">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            returnKeyType={'search'}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              )
              navigation.navigate('RideOptionsCard')
            }}
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'zh_TW',
            }}
            styles={{
              container: {
                backgroundColor: 'white',
                paddingTop: 20,
                flex: 0,
              },
              textInput: {
                backgroundColor: '#DDDDDF',
                fontSize: 18,
              },
              textInputContainer: {
                paddingHorizontal: 0,
                paddingBottom: 0,
              },
            }}
          />
        </View>
        <NavFavorite />
      </View>
      <View className="flex-row bg-white justify-evenly py-4 mt-auto border-t border-gray-100">
        <TouchableOpacity
          className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
          onPress={() => navigation.navigate('RideOptionsCard')}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row  bg-white w-24 px-4 py-3 rounded-full"
          onPress={() => navigation.navigate('RideOptionsCard')}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
            className="mr-2"
          />
          <Text className="text-black text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard
