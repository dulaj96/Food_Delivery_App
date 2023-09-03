import React from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import { themeColors } from "../theme/Index";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems } from "../slices/CartSlice";

const CardIcon = () => {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    if(!cartItems.length) return;

    return(
        <View className="absolute bottom-2 w-full z-50">
            <TouchableOpacity
            onPress={() => navigation.navigate('CartScreen')}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
                <View className="p-2 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
                    <Text className="font-extrabold text-white text-lg">3</Text>
                </View>
                <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
                <Text className="font-extrabold text-white text-lg">${23}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CardIcon;