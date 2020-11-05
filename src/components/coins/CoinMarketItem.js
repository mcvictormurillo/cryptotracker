import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import color from '../../res/colors'
export const CoinMarketItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.priceText}>{item.price_usd}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderColor: color.zircon,
        borderColor: color.charade,
        borderWidth: 1,
        padding: 16,
        marginRight: 8,
        alignItems: 'center'
    },
    nameText: {
        color: 'white',
        fontWeight: 'bold'
    },
    priceText: {
        color: 'white',
    }
})
