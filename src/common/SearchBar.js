import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import DeleteIcon from 'react-native-vector-icons/MaterialIcons';

const SearchBar =({searchTerm, setSearchTerm, updateSearch}) => {
    const [textChange, setTextChange] = useState(false)
    const [deleteText, setDeleteText] = useState(false)

    const textChangeHandler = (search) => {
        updateSearch(search)
        // setTextChange(!textChange)
        if(deleteText) {
            searchTerm === ''
        }
    }   

    const clearTextHandler = () => {
        updateSearch('')
        // setTextChange(false)
        setDeleteText(true)
    }

    // const keyPressed = (e) => {
    //     if(e.key === 'Backspace') {
    //         setTextChange(false)
    //     } else {
    //         setTextChange(true)
    //     }
    // }
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Pressable style={styles.searchIcon}>
                    <Icon name='search' color='#000' size={20}/>
                </Pressable>
                <TextInput 
                    style={styles.text}
                    placeholder='search...'
                    onChangeText={textChangeHandler}
                    // onKeyPress={(e) => keyPressed(e)}
                />
                {
                    textChange? (
                        <Pressable style={styles.delete} onPress={clearTextHandler}>
                            <DeleteIcon name='cancel' color='#000' size={24}/>
                        </Pressable>
                    ) : (
                        null
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    searchContainer: {
        backgroundColor: '#ccc',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    searchIcon: { 
        width: '15%',
        paddingLeft: 10
    },
    text: {
        width: '75%',
        fontSize: 20
    },
    delete: {
        width: '10%'
    }
})

export default SearchBar