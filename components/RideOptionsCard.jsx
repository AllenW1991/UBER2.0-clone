import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { useState } from 'react'
import { useSelector } from 'react-redux'

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
const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector((state) => state.nav.travelTimeInfo)

  return (
    <SafeAreaView className="bg-white flex-grow ">
      <View>
        <TouchableOpacity
          className="absolute top-5 left-5 z-50"
          onPress={() => {
            navigation.navigate('NavigateCard')
          }}
        >
          <Icon name="chevron-left" type="font-awesome" size={16} />
        </TouchableOpacity>
        <Text className="text-center py-3 text-xl">
          Select a Ride {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelected(item)
            }}
            className={`flex-row  justify-between p-3 items-center  ${
              item.id === selected?.id ? 'bg-gray-200' : null
            }`}
          >
            <View className=" flex-row items-start w-28 ">
              <Image
                className="w-24 h-16 object-contain"
                source={{ uri: item.image }}
              />
              <View>
                <Text className="text-lg font-semibold">{item.title}</Text>
                <Text className="text-xs ">
                  {travelTimeInformation?.duration.text}
                </Text>
              </View>
            </View>
            <Text className="text-md font-semibold ">
              {new Intl.NumberFormat('tw', {
                style: 'currency',
                currency: 'TWD',
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.mutiplier) /
                  3
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-2 my-4 mx-5 rounded-md ${
            !selected && 'bg-gray-200'
          }`}
        >
          <Text className="text-lg text-white text-center">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard
