import React from 'react'
import {View, StyleSheet, Button, SafeAreaView, ScrollView} from 'react-native'
import ProductDetails from '../common/ProductDetails'

const MobileDetailsScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <ProductDetails 
                        image={'https://www.android.com/static/2016/img/one/carousel/nokia-9_1x.png'}
                        name={'Mobile Phone'}
                        price={300}
                        description={'Hwauei Mobile Phone 6GB RAM'}
                    >
                        <Button 
                            style={styles.button} 
                            title={'Go Back'} 
                            onPress={() => props.navigation.navigate('Products')} 
                        />
                    </ProductDetails>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#036ef2',
        color: '#fff',
        textTransform: 'capitalize'
    }
})
export default MobileDetailsScreen

