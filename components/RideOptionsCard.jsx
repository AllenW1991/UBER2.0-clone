import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { useState } from 'react'

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
    mutiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'UBER-LUX-789',
    title: 'UBER LUX',
    mutiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
]

const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)

  return (
    <SafeAreaView className="bg-white flex-grow ">
      <View>
        <TouchableOpacity
          className="absolute top-7 left-5 z-50"
          onPress={() => {
            navigation.navigate('NavigateCard')
          }}
        >
          <Icon name="chevron-left" type="font-awesome" size={16} />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">Select a Ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelected(item)
              console.log(selected)
            }}
            className="`flex-row items-center justify-between p-3`"
          >
            <Image className="w-24 h-16" source={{ uri: item.image }} />
            <View className="-ml-7">
              <Text className="text-lg font-semibold">{item.title}</Text>
              <Text className="text-xs">Travel Time...</Text>
            </View>
            <Text className="text-md font-semibold">$300</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default RideOptionsCard
