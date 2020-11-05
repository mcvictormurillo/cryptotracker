import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FavoriteEmptyState() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Do you have any favorite yet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    }
})
