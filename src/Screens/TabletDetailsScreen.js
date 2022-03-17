import React from 'react'
import {View, StyleSheet, Button, SafeAreaView, ScrollView} from 'react-native'
import ProductDetails from '../common/ProductDetails'

const TabletDetailsScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
            <ProductDetails 
                image={'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-t10.jpg'}
                name={'Huawei Tablet'}
                price={800}
                description={'Hwauei Tablet 16GB RAM'}
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
export default TabletDetailsScreen

