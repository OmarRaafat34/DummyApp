import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';

const MainNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer
            initialRouteName="BottomNavigator"
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="BottomNavigator" component={BottomNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator