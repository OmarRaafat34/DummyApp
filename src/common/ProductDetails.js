import React from 'react'
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native'

const ProductDetails = (props) => {
    return (
        <ScrollView>
            <Image style={styles.Image} source={{uri: props.image}} />
            <View style={styles.DescriptionContainer}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                <Text style={styles.description}>{props.description}</Text>  
            </View>
            <View style={styles.actions}>
                {props.children}
            </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    Image: {
        width: '100%',
        height: 300
    },  
    DescriptionContainer: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    name: {
      color: '#000',
      fontSize: 18,

    },
    price: {
        color: '#ccc',
        fontSize: 16,
        marginVertical: 20,
    },
    description: {
        color:  '#000',
        fontSize: 18
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

export default ProductDetails