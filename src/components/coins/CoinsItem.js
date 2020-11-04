import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../../res/colors'

export function CoinsItem({ item }) {

    const getImgArrow = () => {
        if (item.percent_change_1h > 0) {
            return require('../../assets/arrow_up.png')
        } else {
            return require('../../assets/arrow_down.png')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText}>${item.price_usd}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.percent_change_1h}</Text>
                <Image style={{ width: 20, height: 20 }} source={getImgArrow()} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor:colors.zircon,
        borderBottomWidth:1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    symbolText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        paddingRight: 12
    },
    nameText: {
        color: 'white',
        fontSize: 14,
        marginRight: 12
    },
    percentText: {
        color: 'white',
        fontSize: 12,
    },
    priceText: {
        fontSize: 12,
        color: 'white',

    }
})
