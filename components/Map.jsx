import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useEffect, useRef } from 'react'
import { setTravelTimeInfo } from '../features/navSlice'

const Map = () => {
  const origin = useSelector((state) => state.nav.origin)
  const destination = useSelector((state) => state.nav.destination)
  const dispatch = useDispatch()
  const mapRef = useRef(null)

  useEffect(() => {
    if (!origin || !destination) return

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
    })
  }, [origin, destination])

  useEffect(() => {
    if (!origin || !destination) return
    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInfo(data.rows[0].elements[0]))
        })
    }
    getTravelTime()
  }, [origin, destination, GOOGLE_MAPS_APIKEY])

  return (
    <MapView
      ref={mapRef}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      className="flex-1"
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination?.location.lat,
            longitude: destination?.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  )
}

export default Map
