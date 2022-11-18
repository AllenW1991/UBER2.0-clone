import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { Selector, useSelector } from 'react-redux'

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
]

export default function NavOptions() {
  const navigation = useNavigation()
  const origin = useSelector((state) => state.nav.origin)

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.screen)
            }}
            disabled={!origin}
            className="p-2 bg-gray-200 mr-4"
          >
            <View className={origin ? '' : 'opacity-20'}>
              <Image
                source={{ uri: item.image }}
                className="w-32 h-28 object-contain"
              />
              <Text className="text-lg font-semibold">{item.title}</Text>
              <Icon
                name="arrowright"
                color="white"
                type="antdesign"
                className="justify-center w-8 h-8 my-3 rounded-full bg-black"
              />
            </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}
