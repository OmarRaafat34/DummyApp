import React from 'react'
import {View, StyleSheet, Text, Button, SafeAreaView, ScrollView, TouchableOpacity, TouchableNativeFeedback} from 'react-native'
import ProductItem from '../common/ProductItem'

const SettingsScreen = (props) => {
    return (
       <View style={styles.settings}>
           <Text style={styles.text}>Settings</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    settings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,    
    }
})
export default SettingsScreen

