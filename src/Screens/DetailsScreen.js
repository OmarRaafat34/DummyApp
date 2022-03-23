import React from 'react'
import {View, StyleSheet, Button, SafeAreaView, ScrollView} from 'react-native'
import ProductDetails from '../common/ProductDetails'

const DetailsScreen = (props) => {
    const { image, name, price, description } = props?.route?.params

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <ProductDetails 
                        image={image}
                        name={name}
                        price={price}
                        description={description}
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
export default DetailsScreen

