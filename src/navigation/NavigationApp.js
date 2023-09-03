import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurentScreen from '../screens/RestaurentScreen';
import CartScreen from '../screens/CartScreen';
import OrderPreparingScreen from "../screens/OrderPreparingScreen";
import DeliveryScreen from '../screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

const NavigationApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='HomeScreen'>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="RestaurentScreen" component={RestaurentScreen} />
                <Stack.Screen name="CartScreen" options={{presentation: 'modal'}} component={CartScreen} />
                <Stack.Screen name="OrderPreparingScreen" options={{presentation: 'fullScreenModal'}} component={OrderPreparingScreen} />
                <Stack.Screen name="DeliveryScreen" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationApp;