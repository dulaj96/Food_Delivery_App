import React from "react";
import { View, Text, TouchableOpacity, ScrollView, } from "react-native";
import { themeColors } from "../theme/Index";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({title, restaurants, description}) => {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg ">{title}</Text>
                    <Text className="text-gray-500 text-sm">{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className="font-semibold">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                className="overflow-visible py-5"
            >
                {
                    restaurants.map((restaurant, index) => {
                        return(
                            <RestaurantCard
                            key={index}
                            item={restaurant}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default FeaturedRow;