import React from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { featured } from "../constants/Data";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();

    return (
        <View className="flex-1">
            {/* map view */}
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                className="flex-1"
                mapType='standard'>
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }} />
            </MapView>
        </View>
    )
}

export default DeliveryScreen;