import React from 'react'
import {View, StyleSheet, Button, SafeAreaView, ScrollView, TouchableOpacity, TouchableNativeFeedback} from 'react-native'
import ProductItem from '../common/ProductItem'

const ProductsScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
            {/* <TouchableNativeFeedback onPress={() => props.navigation.navigate('Laptop')}> */}
                <ProductItem   
                    image={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3PHhv?ver=390c&q=90&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=674&y=189&s=1446&d=813&aim=true'}
                    name={'Laptop'}
                    price={500}   
                >
                    
                    <Button 
                        style={styles.button} 
                        title={'View Details'} 
                        onPress={() => props.navigation.navigate('Laptop')} 
                    />
                </ProductItem>
            {/* </TouchableNativeFeedback> */}
            <ProductItem 
                image={'https://www.android.com/static/2016/img/one/carousel/nokia-9_1x.png'}
                name={'Mobile Phone'}
                price={300}
                onPress={() => props.navigation.navigate('Mobile')}  
            >
               <Button 
                    style={styles.button} 
                    title={'View Details'}
                    onPress={() => props.navigation.navigate('Mobile')}
                /> 
            </ProductItem>

            <ProductItem 
                image={'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-t10.jpg'}
                name={'Huawei Tablet'}
                price={800}
                onPress={() => props.navigation.navigate('Tablet')}

            >
                <Button 
                    style={styles.button} 
                    title={'View Details'}
                    onPress={() => props.navigation.navigate('Tablet')}
                />
            </ProductItem>
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
        borderRadius: 10
    }
})
export default ProductsScreen

