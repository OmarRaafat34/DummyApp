import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../Screens/ProductsScreen';
import LaptopDetailsScreen from '../Screens/LaptopDetailsScreen';
import MobileDetailsScreen from '../Screens/MobileDetailsScreen';
import TabletDetailsScreen from '../Screens/TabletDetailsScreen';


const ProductsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        // <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#036ef2'
                    },
                    headerTintColor: 'white',
                }}
            >
                <Stack.Screen name="Products" component={ProductsScreen} />
                <Stack.Screen name="Laptop" component={LaptopDetailsScreen} />
                <Stack.Screen name="Mobile" component={MobileDetailsScreen} />
                <Stack.Screen name="Tablet" component={TabletDetailsScreen} />
            </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default ProductsNavigator