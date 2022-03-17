import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../Screens/ProductsScreen';
import LaptopDetailsScreen from '../Screens/LaptopDetailsScreen';
import MobileDetailsScreen from '../Screens/MobileDetailsScreen';
import TabletDetailsScreen from '../Screens/TabletDetailsScreen';
import SettingsScreen from '../Screens/SettingsSceen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import ProductsNavigator from './ProductsNavigator';
import BottomNavigator from './BottomNavigator';

const MainNavigator = () => {
    const Stack = createStackNavigator();
    // const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer
            // initialRouteName={ProductsScreen}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="ProductsNavigator" component={ProductsNavigator}/>
                <Stack.Screen name="BottomNavigator" component={BottomNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator