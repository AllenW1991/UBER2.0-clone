import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { setOrigin } from '../features/navSlice'

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: '台中新光三越',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: '台中三井outlet',
  },
]

const NavFavorite = () => {
  const dispatch = useDispatch()
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => {
        return <View className="bg-gray-200" style={{ height: 0.5 }} />
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity className="flex-row items-center py-5">
            <Icon
              className="mr-4 rounded-full bg-gray-300 p-3"
              name={item.icon}
              type="ionicon"
              color="white"
              size={18}
            />
            <View>
              <Text
                className="font-semibold text-lg"
                // onPress={dispatch(
                //   setOrigin({
                //     location: item.destination,
                //     description: item.destination,
                //   })
                // )}
              >
                {item.location}
              </Text>
              <Text className="text-gray-500 ">{item.destination}</Text>
            </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}

export default NavFavorite
