import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";

const OrderPreparingScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("DeliveryScreen");
        }, 3000)
    }, [])

    return (
        <View className="flex-1 bg-white justify-center items-center">
                <Image 
                source={require('../assets/images/delivery.gif')} 
                className="h-80 w-80" />
        </View>

    )
}

export default OrderPreparingScreen;