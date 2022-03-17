import 'react-native-gesture-handler';
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProductsScreen from '../Screens/ProductsScreen';
import SettingsScreen from '../Screens/SettingsSceen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import {View, StyleSheet, } from 'react-native'

const BottomNavigator = () => {
    const Tab = createMaterialBottomTabNavigator()
    return (
        <Tab.Navigator
            tabBarPosition='bottom'
            initialRouteName={ProductsScreen}
            tabBarOptions={{
                tabBarVisible: true,
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={ProductsScreen} 
                options={{
                    tabBarLabel: ({ color }) => {
                        return (
                        <View style={styles.Icon}>
                            <Icon name={'home'} solid color={color} size={26} />
                        </View>
                        )
                    
                    }
                }}
            />
            <Tab.Screen 
                name='Settings' 
                component={SettingsScreen} 
                options={{
                    tabBarLabel: ({ color }) => {
                        return(
                            <View style={styles.Icon}>
                                <Icon name={'settings'} solid color={color} size={26} />
                            </View>
                        )
                    }
                    
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    Icon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }
})
export default BottomNavigator