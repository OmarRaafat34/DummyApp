import 'react-native-gesture-handler';
import React from 'react'
import SettingsScreen from '../Screens/SettingsSceen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsNavigator from './ProductsNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            tabBarPosition='bottom'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#036ef2'
                },
                headerTintColor: 'white',
            }}
        >
            <Tab.Screen
                name="Shop Products"
                component={ProductsNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name='Settings' 
                component={SettingsScreen} 
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name={'settings'} color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator