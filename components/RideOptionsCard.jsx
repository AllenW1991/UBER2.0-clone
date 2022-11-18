import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: 'UBER-X-123',
    title: 'UBER X',
    mutiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'UBER-XL-456',
    title: 'UBER XL',
    mutiplier: 1,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'UBER-LUX-789',
    title: 'UBER LUX',
    mutiplier: 1,
    image: 'https://links.papareact.com/7pf',
  },
]

const RideOptionsCard = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          className="absolute top-7 left-5 z-50"
          onPress={() => {
            console.log(' you hit me')
            navigation.navigate('NavigateCard')
          }}
        >
          <Icon name="chevron-left" type="font-awesome" size={16} />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">Select a Ride</Text>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard
