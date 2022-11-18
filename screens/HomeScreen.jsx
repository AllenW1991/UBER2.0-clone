import { View, SafeAreaView, Image, Text } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../features/navSlice'
import NavFavorite from '../components/NavFavorite'

export default function HomeScreen() {
  const dispatch = useDispatch()

  return (
    <SafeAreaView className="bg-white h-full pt-6">
      <View className="px-5">
        <Image
          source={{ uri: 'https://links.papareact.com/gzs' }}
          className="w-32 h-11 object-contain my-5"
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            )
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={1}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'zh_TW',
          }}
        />
        <NavOptions />
        <NavFavorite />
      </View>
    </SafeAreaView>
  )
}
