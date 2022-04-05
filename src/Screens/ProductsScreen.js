import React, {useState} from 'react'
import {View, StyleSheet, Button, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ProductItem from '../common/ProductItem'
import SearchBar from '../common/SearchBar'
import PRODUCTS from '../data/dummy-data'

const ProductsScreen = (props) => {
    const navigation = useNavigation()
    const [originalProducts, setOriginalProducts] = useState(PRODUCTS)
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS)
    const [searchTerm, setSearchTerm] = useState('')

    // console.log(searchTerm, "search term")
   
    const updateSearch = (searchTerm) => {
        // console.log(searchTerm, 'searched')
        if(searchTerm !== ''){
            const filteredClone = JSON.parse(JSON.stringify(filteredProducts))
            // console.log(filteredClone, "filtered clone")
            const filteredArray = filteredClone.filter(item => item.name.includes(searchTerm))
            setFilteredProducts(filteredArray)
        } else {
            setFilteredProducts(originalProducts)
            setSearchTerm('')
        }
    }



    
    const selectItemHandler = (id, image, name, price, description) => {
        navigation.navigate(
            'Details',
            {id, image, name, price, description}
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar searchTerm={searchTerm} updateSearch={updateSearch} setSearchTerm={setSearchTerm} />
            <FlatList 
                data={filteredProducts}
                keyExtractor={item => item.id}
                renderItem={itemData => {                    
                    return(
                        <ProductItem   
                            image={itemData.item.image}
                            name={itemData.item.name}
                            price={itemData.item.price}   
                        >     
                            <Button 
                                style={styles.button} 
                                title={'View Details'} 
                                onPress={() => selectItemHandler(itemData.item.id, itemData.item.image, itemData.item.name, itemData.item.price, itemData.item.description )} 
                            />
                        </ProductItem>
                    )
                }}
            />
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
        borderRadius: 10
    },
})
export default ProductsScreen

