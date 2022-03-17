import React from 'react'
import {View, StyleSheet, Button, SafeAreaView, ScrollView} from 'react-native'
import ProductDetails from '../common/ProductDetails'

const LaptopDetailsScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
            <ProductDetails 
                image={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3PHhv?ver=390c&q=90&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=674&y=189&s=1446&d=813&aim=true'}
                name={'Laptop'}
                price={500}
                description={'Lenovo Laptop 8GB RAM with Hard Drive 1TB'}
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
    container: {
        flex: 1,
      },
    button: {
        backgroundColor: '#036ef2',
        color: '#fff',
        textTransform: 'capitalize',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%'
    }
})
export default LaptopDetailsScreen

