import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native'
import colors from '../../res/colors'

export const CoinSearch = ({ onChange }) => {
    const [query, setQuery] = useState('')
    const handleText = (query) => {
        setQuery(query)
        onChange && onChange(query)
    }
    return (
        <View>
            <TextInput
                style={[
                    styles.textInput,
                    Platform.OS === 'ios' ? styles.textInputIOS : styles.textInputAndroid
                ]}
                onChangeText={handleText}
                value={query}
                placeholder='Search coin ...'
                placeholderTextColor={'#fff'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 46,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        paddingLeft: 16,
        color: "#fff"
    },
    textInputAndroid: {
        borderBottomWidth: 2,
        borderBottomColor: colors.charade
    },
    textInputIOS: {
        margin: 8,
        borderRadius: 8
    }
});