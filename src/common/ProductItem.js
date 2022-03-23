import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

const ProductItem = (props) => {
    return (
        <View style={styles.product}>
            <View style={styles.ImageContainer}>
                <Image style={styles.Image} source={{uri: props.image}} />
            </View>
            <View style={styles.DescriptionContainer}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
                {props.children}
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    product: {
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 330,
        elevation: 5,
        shadowColor: '#000',
        margin: 20,
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        overflow: 'hidden' 
    },
    ImageContainer: {
        width: '100%',
        height: '60%',
        overflow: 'hidden'
    },
    Image: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        resizeMode: 'cover'
    },  
    DescriptionContainer: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
      color: '#000',
      fontSize: 18,
    paddingTop: 20
    },
    price: {
        color: '#ccc',
        fontSize: 16,
        marginBottom: 20 
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '20%'
    },
})

export default ProductItem